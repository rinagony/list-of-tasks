<template>
  <div id="list">
    <h2>List</h2>
    <div class="row">
      <div class="input-field s6 col">
        <select ref="select" v-model="filter">
          <option value="" disabled selected>Choose status of tasks</option>
          <option value="Active">Active</option>
          <option value="Overdue">Overdue</option>
          <option value="Completed">Completed</option>
        </select>
        <label></label>
      </div>
    </div>
    <button v-if="filter" class="btn btn-small" @click="filter = null">Show all</button>

    <table v-if="tasks.length">
      <thead>
        <tr class="tableGroup">
          <th>#</th>
          <th>Title</th>
          <th>Date</th>
          <th>Description</th>
          <th>Status</th>
          <th>Open</th>
        </tr>
      </thead>
      <tbody>
        <tr 
        v-for="(task, idx) of displayTasks"
        :key="task.id"
        class="tableGroup"
        >
          <td>{{idx +1}}</td>
          <td>{{task.title}}</td>
          <td>{{new Date(task.date).toLocaleDateString()}}</td>
          <td class="cutTd"><div class="textCut">{{task.description}}</div></td>
          <td>{{task.status}}</td>
          <td class="noLine">
            <router-link style="background: #883ca3;" tag="button" class="btn btn-small" :to="'/task/' + task.id">
              Open
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <h3 style="text-align: center;" v-else>No tasks</h3>
  </div>
</template>

<script>

export default {
  name: 'List',
  components: {
  },
  data: () => ({
    filter: null
  }),
  computed: {
    tasks() {
      return this.$store.getters.tasks //полчуение тасков из стора
    },
    displayTasks() {
      return this.tasks.filter(t => {
        if(!this.filter) {
          return true
        }
        return t.status === this.filter
      })
    }
  },
  mounted() {
    window.M.FormSelect.init(this.$refs.select) //инициализация селект
  }
}
</script>

<style lang="scss" scoped>
.tableGroup th{
  border-right: 0.5px solid grey;
  padding: 1rem;
}

.tableGroup td{
  border-right: 0.5px solid grey;
  padding: 1rem;
}

#list {
  margin-bottom: 40px 0;
}

.noLine {
  border-right: 0px !important;
}

.textCut {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.cutTd {
  max-width: 400px;
}

</style>
