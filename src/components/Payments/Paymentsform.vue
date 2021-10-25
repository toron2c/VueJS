<template>
  <div class="form">
    <button class="toggleForm" @click="isFormEnabled = !isFormEnabled">+</button>
    <div class="formBlock" v-if="isFormEnabled">
      <input type="text" placeholder="Payment description" v-model="category">
      <input type="text" placeholder="Payment amount" v-model="value">
      <button class="save" @click="saveHandler">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paymentsform",
  props: {
    id: {
      type: Number
    }
  },
  data() {
    return {
      isFormEnabled: false,
      category: '',
      value: '',
    }
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    saveHandler() {
      this.isFormEnabled = false;
      let lastId = this.id + 1;
      const data = {
        id: lastId,
        date: this.getCurrentDate,
        category: this.category,
        value: +this.value
      }
      this.category = '';
      this.value = '';
      this.$emit('savePay', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  height: 25px;
}

.toggleForm {
  padding: 5px 10px;
  border: none;
  color: #0778d3;
  background: transparent;
  font-size: 25px;
  transition: 0.3s;
  cursor: pointer;
  height: 30px;

  &:hover {
    transition: 0.3s;
    transform: scale(1.24);
  }
}

.formBlock {
  padding: 10px 10px;

  & input {
    margin: 0 5px;
    border: 2px solid #0778d3;
    border-radius: 5px;

    &:hover {
      transition: 0.3s;
      transform: scale(1.01);
    }
  }
}

.save {
  background: transparent;
  border: 2px solid #0778d3;
  border-radius: 5px;
  cursor: pointer;
  color: #0778d3;
  font-weight: bold;
  font-size: 13px;

  &:hover {
    transition: 0.3s;
    transform: scale(1.14)
  }
}
</style>
