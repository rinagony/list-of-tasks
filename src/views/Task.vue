<template>
  <div id="task" class="row">
    <div v-if="task" class="col s6 offset-s3">
      <h1>{{task.title}}</h1>

      <form @submit.prevent="submitHandler">

        <div class="chips" ref="chipsf"></div>

        <div class="input-field">
          <textarea style="min-height: 150px" v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Description</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
        </div>
        <input type="text" ref="datepicker">
        <div v-if="task.status != 'completed'">
          <button class="btn" type="submit" style="margin-right: 1rem; background: #883ca3">Refresh</button>
          <button class="btn blue" type="button" @click="completeTask">Complete the task</button>
        </div>

      </form>
    </div>
    <h1 v-else>Task not found</h1>
  </div>
</template>

<script>

export default {
  name: 'Task',
  components: {
  },
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id) //возвращение значения из гетеров, куда передаем айди данной задачи. + для того чтобы из стринг перевести в намбер
    }
  },
   mounted() {
    this.description = this.task.description
    this.chips = window.M.Chips.init(this.$refs.chips, {
      placeholder: 'Task tags',
      data: this.task.tags //отображение данных в чипсах
    })
    this.date = window.M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(this.task.date),
      setDefaultDate: true
    })
    setTimeout(() => {
      window.M.updateTextFields()
    }, 0)
  },
  data: () => ({
    description: '',
    chips: null,
    date: null
  }),
  methods: {
    submitHandler() {
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        description: this.description,
        date: this.date.date
      })
      this.$router.push('/list')
    },
    completeTask() {
      this.$store.dispatch('completeTask', this.task.id)
      this.$router.push('/list')
    }
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy()
    }
    if (this.chips && this.chips.destroy) {
      this.chips.destroy()
    }
  }
}
</script>

<style lang="scss">
</style>
