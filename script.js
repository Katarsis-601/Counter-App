const value = document.querySelector(".value");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
class App {
  constructor(value) {
    this.value = value;
  }
  increaseValue() {
    this.value += 1;
  }
  decreaseValue() {
    this.value -= 1;
  }
  resetValue() {
    this.value = 0;
  }
}
let app = new App(0);
value.textContent = app.value;
increase.addEventListener("click", () => {
  app.increaseValue();
  value.textContent = app.value;
});
decrease.addEventListener("click", () => {
  app.decreaseValue();
  value.textContent = app.value;
});
reset.addEventListener("click", () => {
  app.resetValue();
  value.textContent = app.value;
});
