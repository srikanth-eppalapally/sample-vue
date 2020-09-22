import Vue from "vue"
import Router from "vue-router"
import ToDoApp from  "./components/ToDoApp.vue"

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "todo",
			component: ToDoApp
		}
	]
})