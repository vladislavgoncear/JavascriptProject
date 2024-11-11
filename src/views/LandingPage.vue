<template>
  <div class="landing-page">
    <h1>Benvinguts al nostre projecte!</h1>
    <p>Aquesta és una aplicació Vue SPA.</p>
    <div class="buttons">
      <div class="button-container">
        <router-link to="/calculator" class="button">
          <div class="emoji">🧮</div>
          <h2>Calculator</h2>
          <p>Accedeix a la nostra calculadora interactiva.</p>
        </router-link>
      </div>
      <div class="button-container">
        <router-link to="/comments" class="button">
          <div class="emoji">💬</div>
          <h2>Comments</h2>
          <p>Llegeix i publica comentaris.</p>
        </router-link>
      </div>
      <div class="button-container">
        <router-link to="/users" class="button">
          <div class="emoji">👥</div>
          <h2>Users</h2>
          <p>Consulta la llista d'usuaris.</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
};
</script>

<style scoped>
.landing-page {
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  min-height: 100vh;
}

h1 {
  color: #333;
}

.buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.button-container {
  text-align: center;
  flex: 1 1 300px; /* Ensure the buttons take up at least 300px but can grow */
  max-width: 300px; /* Ensure the buttons do not exceed 300px */
}

.button {
  display: block;
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
  text-decoration: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%; /* Ensure the button takes up the full width of its container */
  box-sizing: border-box;
}

.emoji {
  font-size: 3em;
}

.button h2 {
  margin: 10px 0;
  font-size: 1.5em;
}

.button p {
  color: #666;
}

.button:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

@media (max-width: 600px) {
  .button-container {
    flex: 1 1 100%; /* Ensure the buttons take up the full width on small screens */
  }
}
</style>