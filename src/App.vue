<template>
 <div class="app">
   <div class="todo-wrapper">
     <app-header></app-header>
     <todo-input v-on:todo:add="addTodo"></todo-input>
     <!-- DIRECTIVAS / v-  /
       interactuar, escuchar eventos + invoxcan metodos : v-on
     recorrer: v-for
    mantener actualizado: v-bind
    vinculado bidirecciona: v-model
     -->
     <todo-item :key="todo.id" v-for="todo in todos" v-bind:todo="todo" v-on:todo:remove="removeTodo" ></todo-item>
   </div>
 </div>
</template>

<script src="./app.js"></script>

<style src="./style.css"></style>
