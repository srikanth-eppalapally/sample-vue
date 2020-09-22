<template>
  <form>
    <input type="text" class="form-control" placeholder="Type a task" v-model="model" required />
    <button :disabled="model === ''" class="submit-btn" @click="onAddNewTask">Add to List</button>
  </form>
</template>

<script>
export default {
  name: "ToDoForm",
  data() {
    return {
      model: "",
    };
  },
  methods: {
    onAddNewTask(e) {
      e.preventDefault();
      const model = this.model;

      this.$emit("onAddNewTask", model);

      this.model = "";
    },
  },
};
</script>

<style>
form {
  height: 3rem;
  width: 100%;
  transition: all ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-control {
  height: 2.5rem;
  width: 90%;
  font-size: 1.5rem;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
}
.submit-btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  margin-left: 5px;
}
</style>
