<template>
    <div class="calculator">
      <div class="display">{{ current }}</div>
      <div class="buttons">
        <button @click="clear">C</button>
        <button @click="append('7')">7</button>
        <button @click="append('8')">8</button>
        <button @click="append('9')">9</button>
        <button @click="append('/')">/</button>
        <button @click="append('4')">4</button>
        <button @click="append('5')">5</button>
        <button @click="append('6')">6</button>
        <button @click="append('*')">*</button>
        <button @click="append('1')">1</button>
        <button @click="append('2')">2</button>
        <button @click="append('3')">3</button>
        <button @click="append('-')">-</button>
        <button @click="append('0')">0</button>
        <button @click="append('.')">.</button>
        <button @click="calculate">=</button>
        <button @click="append('+')">+</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CalculatorPage',
    data() {
      return {
        current: '',
      };
    },
    methods: {
      append(char) {
        this.current += char;
      },
      clear() {
        this.current = '';
      },
      calculate() {
        try {
          this.current = eval(this.current).toString();
        } catch (e) {
          this.current = 'Error';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .calculator {
    width: 320px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background: #f9f9f9;
  }
  
  .display {
    font-size: 2em;
    padding: 10px;
    background: #222;
    color: #fff;
    text-align: right;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  
  button {
    font-size: 1.5em;
    padding: 20px;
    border: none;
    border-radius: 5px;
    background: #e0e0e0;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  button:hover {
    background: #d0d0d0;
  }
  
  button:active {
    background: #c0c0c0;
  }
  
  button:nth-child(4n) {
    background: #ff9500;
    color: #fff;
  }
  
  button:nth-child(4n):hover {
    background: #e08b00;
  }
  
  button:nth-child(4n):active {
    background: #c07a00;
  }
  </style>