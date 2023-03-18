import axios from 'axios';

const URL='https://jsonplaceholder.typicode.com/todos/1'


// fetch the data from the URL

 axios.get(URL).then((res)=>{
   const todo = res.data;
   const ID = todo.ID;
   const title = todo.title;
   const completed = todo.completed;

   console.log(`The todo with ID: ${ID} Has a title of: ${title},
   Is it finished? ${completed}
   `);

 })

