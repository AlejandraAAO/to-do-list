<template>
  <div class="todoWrapper">
    <input class="done" type="checkbox" v-model="todo.done">
    <span :class="{workDone:todo.done}">{{todo.text}}</span>
    <!-- evento de eliminado -->
    <button class="removeTodo" v-on:click="removeTodo" >X</button>
    <!-- aca se ve el atrributo personalizado = prop -->
  </div>
  
</template>
<script>
export default {
  name: 'todo-item',
  // atributo personalizado son los prop
  props: ['todo'],
  methods: {
    removeTodo(){
      this.$emit('todo:remove', this.todo.id);
    },
  }
}
</script>
<style>
.todoWrapper {
  border-bottom: 1px solid #efefef;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 20px;
}
  .removeTodo {
  margin: 20px;
  margin-bottom: 10px;
  outline: none;
  box-shadow: none;
  border-width: 2px;
  border-radius: 3px;
  border-style: solid;
  padding: 8px;
  color: rgba(203, 20, 32, 0.4);
  border-color: rgba(203, 20, 32, 0.4);
  background-color: transparent;
}

.done {
  margin: 0px;
  width: 2rem;
}
.workDone {
  text-decoration: line-through;
}
</style>