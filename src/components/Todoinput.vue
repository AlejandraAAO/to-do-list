<template>
  <div class="todo-input">
    <input v-model="text" type="text" />
    <button class="btn btn-primary" v-on:click="addTodo">Añadir</button>
  </div>
</template>

<script>
export default {
  name:'todo-input',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    addTodo() {
      //evento para añadir tareas en el input
      this.$emit('todo:add',this.text.trim());
      this.text ='';
    }
  }
}
</script>
<style >
.btn {
  outline: none;
  box-shadow: none;
  border-width: 2px;
  border-radius: 3px;
  border-style: solid;
  padding: 8px;
}

.btn-primary {
  color: mediumvioletred;
  border-color: lightgray;
  background-color: transparent;
}

input {
  width: 80%;
  border: none;
  border-radius: 5px;
  border: 2px solid lightgray;

  margin-right: 10px;
  padding: 5px;
  line-height: 17px;
}

</style>
