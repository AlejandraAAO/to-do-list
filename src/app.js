
import AppHeader from './components/Appheader.vue';
import TodoInput from './components/Todoinput.vue';
import TodoItem from './components/Todoitem.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    TodoInput,
    TodoItem,
  },
  data() {
    return {
      todos: [
        {id:0, text:'Comer', done:true},
        {id:1, text:'Dormir', done:false},
        {id:2, text:'Vivir', done:false},
      ],
      nextId:3
    };
  },
  methods: {
    addTodo(text) {
      if(text !== "") {
      this.todos.push({id:this.nextId, text:text, done:false});
      this.nextId++;
     }
    },
    removeTodo(id){
      let todos= this.todos;
      //tbm se puede usar el metodo splice
      this.todos=todos.filter((todo)=> todo.id != id);
    }
  }
}