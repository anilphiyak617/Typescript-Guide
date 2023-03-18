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

   console.log(`
   The todo with ID: ${ID}
   Has a title of: ${title},
   Is it finished? ${completed}
   `);

 })

