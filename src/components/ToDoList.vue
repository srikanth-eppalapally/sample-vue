<template>
  <ul class="task-list">
    <ToDoListItem
      v-for="task in tasksList"
      :key="task.id"
      :text="task.text"
      :id="task.id"
      :isCompleted="task.isCompleted"
      @onTaskStatusChange="onTaskStatusChange"
      @onTaskDelete="onTaskDelete"
    />
  </ul>
</template>


<script>
import ToDoListItem from "./ToDoListItem.vue";

export default {
  name: "ToDoList",
  components: {
    ToDoListItem,
  },
  props: {
    tasksList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    /**
     * emits change event
     */
    onTaskStatusChange(id, isCompleted) {
      this.$emit("onTaskStatusChange", id, isCompleted);
    },

    /**
     * emits delete event
     */
    onTaskDelete(id) {
      this.$emit("onTaskDelete", id);
    },
  },
};
</script>


<style>
.task-list {
  list-style: none;
}
</style>