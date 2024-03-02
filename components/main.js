// // Определение компонентов
// const HelloWorld = {
//   template: ` <div>
//   <h1>Hello, world!</h1>
// </div>`,
// };

// const Counter = {
//   template: ` <div>
//   <h2>Counter: {{ count }}</h2>
//   <button @click="increment">Increment</button>
// </div>`,
//   data() {
//     return {
//       count: 0,
//     };
//   },
//   methods: {
//     increment() {
//       this.count++;
//     },
//   },
// };

// const UserInput = {
//   template: ` <div>
//   <input type="text" v-model="message" placeholder="Type something...">
//   <p>You typed: {{ message }}</p>
// </div>`,
//   data() {
//     return {
//       message: "",
//     };
//   },
// };

// Создание экземпляра Vue приложения
const app = Vue.createApp({
  template: `<div>Hello world</div>`,
  components: {
    // HelloWorld,
    // Counter,
    // UserInput,
  },
});

// Монтирование приложения на элемент #app
app.mount("#app");
