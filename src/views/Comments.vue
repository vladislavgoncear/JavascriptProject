<template>
    <div>
      <h2>Comentaris</h2>
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          <strong>{{ comment.name }}</strong>: {{ comment.body }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CommentsPage',
    data() {
      return {
        comments: [],
      };
    },
    async created() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        this.comments = await response.json();
      } catch (error) {
        console.error('Error carregant comentaris:', error);
      }
    },
  };
  </script>
  