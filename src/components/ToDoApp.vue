<template>
  <div class="todo-container">
    <div class="form-group">
      <ToDoForm @onAddNewTask="onAddNewTask" />
    </div>
    <div class="task-container">
      <ToDoList
        :tasksList="tasksList"
        @onTaskStatusChange="onTaskStatusChange"
        @onTaskDelete="onTaskDelete"
      />
    </div>
  </div>
</template> 

<script>
import ToDoForm from "./ToDoForm.vue";
import ToDoList from "./ToDoList.vue";

export default {
  name: "ToDoApp",
  components: {
    ToDoForm,
    ToDoList,
  },
  data() {
    return {
      tasksList: [],
    };
  },
  methods: {
    /**
     * @description adds task to tasksList
     */
    onAddNewTask(taskName) {
      const task = {
        id: new Date().getTime(),
        text: taskName,
        isCompleted: false,
      };
      this.tasksList.push(task);
    },

    /**
     * @description update task status
     */

    onTaskStatusChange(id, isCompleted) {
      let item = this.tasksList.find((i) => i.id == id);
      if (item) {
        item.isCompleted = isCompleted;
      }
    },

    /**
     * @description delete task
     */

    onTaskDelete(id) {
      let index = this.tasksList.findIndex((i) => i.id == id);
      if (index > -1) {
        this.tasksList.splice(index, 1);
      }
    },

    /**
     * @description fetch tasksList from session
     */

    fetchtasksList() {
      this.tasksList = JSON.parse(sessionStorage.getItem("to-do-tasks")) || [];
    },

    /**
     * @description update tasksList to session
     */
    updatetasksList() {
      sessionStorage.setItem("to-do-tasks", JSON.stringify(this.tasksList));
    },
  },
  mounted() {
    this.fetchtasksList();
  },
  watch: {
    tasksList: {
      handler() {
        this.updatetasksList();
      },
      deep: true,
    },
  },
};
</script>

<style>
.form-group {
  margin-top: 1rem;
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.todo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  padding: 15px;
  margin-top: 25px;
  background: #fff;
  border: 1px solid;
  border-color: #dfdcdc #d9d6d6 #ccc;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.task-container {
  margin-top: 1rem;
  width: 100%;
  transition: all ease-in-out 0.3s;
}
</style>