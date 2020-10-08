import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: JSON.parse(localStorage.getItem('tasks') || '[]').map(task => {
            if(new Date(task.date) < new Date()) { //если дата старая то таск просрочен
                task.status = 'Overdue'
            }
            return task
        }) //помещаем в таск содержимое локал стоража
    },
    mutations: {
        createTask(state, task) {
            state.tasks.push(task) //добавление значения переменной таскс из экшинов

            localStorage.setItem('tasks', JSON.stringify(state.tasks)) //добавление в локал стораж
        },
        updateTask(state, {id, description, date}) {
            const tasks = state.tasks.concat() //обновление данных в массиве

            const idx = tasks.findIndex(t => t.id === id)
            const task = tasks[idx]

            const status = new Date(date) > new Date() ? 'Active' : 'Overdue'

            tasks[idx] = {...task, date, description, status}

            state.tasks = tasks
            localStorage.setItem('tasks', JSON.stringify(state.tasks)) //добавление в локал стораж
        },
        completeTask(state, id) {
            const idx = state.tasks.findIndex(t => t.id === id)
            state.tasks[idx].status = 'Выполнено'
            localStorage.setItem('tasks', JSON.stringify(state.tasks)) //добавление в локал стораж
        }
    },
    actions: {
        createTask({commit}, task) {
            commit('createTask', task) //вызов мутаций который позволяет изменять стор
        },
        updateTask({commit}, task) {
            commit('updateTask', task)
        },
        completeTask({commit}, id) {
            commit('completeTask', id)
        }
    },
    getters: {
        tasks: s => s.tasks, //получение стейт и возвращение поля 
        taskById: s => id => s.tasks.find(t => t.id === id) //принимает в себя стейт и возвращает новую функцию с айди
    }
})