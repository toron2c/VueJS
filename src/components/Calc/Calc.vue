<template>
  <div>
    <input v-model.number="operand1" type="number">
    <input v-model.number="operand2" type="number">
    <span> = </span>
    <span> {{ result }} </span>
    <div>
      <button v-for="item in operators"
              :key="item.name"
              @click="calcMethod(item.value)"
              :title="item.name"
              :disabled="item.value === '/' && operand2 === 0">
        {{ item.name }}
      </button>
    </div>
    <div class="keyboard">
      <label>
        <input type="checkbox" v-model="isKeyboard">
        Включить клавиатуру
      </label>
      <div v-if="isKeyboard">
        <button v-for="(item, idx) in buttons" :key="idx" @click="addCommand(item)">
          {{ item }}
        </button>
        <div>
          <label>
            <input type="radio" v-model="selectedOperand" :value="'operand1'"> Операнд 1
          </label>
          <label>
            <input type="radio" v-model="selectedOperand" :value="'operand2'"> Операнд 2
          </label>
        </div>
      </div>
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
      operators: [
        {
          name: 'Плюс',
          value: '+',
        },
        {
          name: 'Минус',
          value: '-',
        },
        {
          name: 'Деление',
          value: '/',
        },
        {
          name: 'Умножение',
          value: '*',
        },
        {
          name: 'Возведение',
          value: '^'
        },
        {
          name: 'Целочисленное деление',
          value: '//',
        }
      ],
      isKeyboard: false,
      buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '←'],
      selectedOperand: 'operand1',
    }
  },
  methods: {
    calcMethod(name) {
      switch (name) {
        case '+': {
          this.plus();
          break;
        }
        case '-': {
          this.minus();
          break;
        }
        case '/': {
          this.divide();
          break;
        }
        case '*': {
          this.multiplication();
          break;
        }
        case '^': {
          this.exponentiation();
          break;
        }
        case '//': {
          this.division();
          break;
        }
      }
    },
    addCommand(item) {
      if (this.selectedOperand === 'operand1') {
        if (item === '←') {
          this.operand1 = this.operand1.toString()
          this.operand1 = this.operand1.slice(0, -1);
          this.operand1 = Number(this.operand1);
        } else {
          this.operand1 = this.operand1.toString();
          this.operand1 = this.operand1 + item;
          this.operand1 = Number(this.operand1);
        }
      } else {
        if (item === '←') {
          this.operand2 = this.operand2.toString()
          this.operand2 = this.operand2.slice(0, -1);
          this.operand2 = Number(this.operand2);
        } else {
          this.operand2 = this.operand2.toString();
          this.operand2 = this.operand2 + item;
          this.operand2 = Number(this.operand2);
        }
      }
    },
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

.keyboard {
  margin: 5px;
}
</style>
