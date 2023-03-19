import axios from 'axios';

const URL='https://jsonplaceholder.typicode.com/todos/1'


interface Todo{
   id: number;
   title: string;
   completed: boolean;
}



// fetch the data from the URL

 axios.get(URL).then((res)=>{
   const todo = res.data as Todo;

   const ID = todo.id;
   const title = todo.title;
   const completed = todo.completed;

   logTodo (ID, title, completed);

 })


 const logTodo = (id,completed,title) => {
   console.log(`
   The todo with ID: ${id}
   Has a title of: ${title}
   Is it finished? ${completed}
   `);
 }

