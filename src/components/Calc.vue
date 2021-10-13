<template>
  <div>
    <input v-model.number="operand1">
    <input v-model.number="operand2">
    <span> = </span>
    <span> {{ result }} </span>
    <div>
      <button @click="plus">Плюс</button>
      <button @click="minus">Минус</button>
      <button @click="divide" :disabled="operand2 === 0">Деление</button>
      <button @click="multiplication">Умножение</button>
      <button @click="exponentiation">Возведение в степень</button>
      <button @click="division" :disabled="operand2 === 0">Целочисленное деление</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calc",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
    }
  },
  methods: {
    plus() {
      this.result = this.operand1 + this.operand2;
    },
    minus() {
      this.result = this.operand1 - this.operand2;
    },
    divide() {
      this.result = this.operand1 / this.operand2;
    },
    multiplication() {
      this.result = this.operand1 * this.operand2;
    },
    exponentiation() {
      this.result = Math.pow(this.operand1, this.operand2)
    },
    division() {
      this.result = Math.floor(this.operand1 / this.operand2);
    }
  }
}
</script>

<style scoped>
input {
  margin: 0 5px 0 0;
}
button {
  margin: 5px;
}
</style>
