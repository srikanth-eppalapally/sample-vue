<template>
  <li class="task" v-bind:class="{ completed: isCompleted }">
    <p>{{ text }}</p>
    <input
      type="checkbox"
      class="checkbox"
      :id="'item-'+ id"
      @change="onTaskStatusChange"
      :checked="isCompleted"
    />
    <label class="mr-3" :for="'item-'+ id"></label>
    <span class="close" @click="onTaskDelete">&times;</span>
  </li>
</template>

<script>
export default {
  name: "ToDoListItem",

  props: {
    id: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      default: "",
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  methods: {

    /**
     * @description emits delete event
     */
    onTaskDelete() {
      this.$emit("onTaskDelete", this.id);
    },



    /**
     * @description emits change event
     */
    onTaskStatusChange(e) {
      const checked = e.target.checked;
      this.$emit("onTaskStatusChange", this.id, checked);
    },
  },
};
</script>



<style>
.task {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all ease-in-out 0.5s;
  color: #795548;
  border-bottom: 1px solid #dedede;
}

.task.completed p {
  text-decoration: line-through;
  text-decoration-thickness: 2px;
  text-decoration-color: red;
}

.task p {
  font-size: 1.5rem;
  color: #8b8f97;
  width: 90%;
}

input[type="checkbox"] + label {
  display: block;
  margin: 0.2em;
  cursor: pointer;
  padding: 0.2em;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label:before {
  content: "\2714";
  border: 0.1em solid #000;
  border-radius: 0.2em;
  display: inline-block;
  width: 1em;
  height: 1em;
  padding-left: 0.2em;
  padding-bottom: 0.3em;
  margin-right: 0.2em;
  vertical-align: bottom;
  color: transparent;
  transition: 0.2s;
}

input[type="checkbox"] + label:active:before {
  transform: scale(0);
}

input[type="checkbox"]:checked + label:before {
  background-color: MediumSeaGreen;
  border-color: MediumSeaGreen;
  color: #fff;
}

input[type="checkbox"]:disabled + label:before {
  transform: scale(1);
  border-color: #aaa;
}

input[type="checkbox"]:checked:disabled + label:before {
  transform: scale(1);
  background-color: #bfb;
  border-color: #bfb;
}

.close {
  color: red;
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;
}
</style>

