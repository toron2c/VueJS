<template>
  <div class="form">
    <button class="toggleForm" @click="isFormEnabled = !isFormEnabled">+</button>
    <div class=" newCategory"><button v-if="isFormEnabled" class="save" @click="isFormNewCategoryEnabled = !isFormNewCategoryEnabled">add new category</button></div>
    <div class="formBlock" v-if="isFormEnabled">
      <select v-model="category">
        <option v-for="(option, index) in getCategoryList" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
      <input type="text" placeholder="Payment amount" v-model="value">
      <button class="save" @click="saveHandler">Save</button>
      <template v-if="isFormNewCategoryEnabled">
        <input type="text" placeholder="New Category" v-model="newCategory">
        <button class="save" @click="addNewCategory(newCategory)">add</button>
      </template>
      <div>
      </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: "Paymentsform",
  data() {
    return {
      isFormEnabled: false,
      value: '',
      category: '',
      isFormNewCategoryEnabled: false,
      newCategory: '',
    }
  },
  computed: {
    ...mapGetters('payments', ['getLastId', "getCategoryList"]),

    getCurrentDate() {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },

  methods: {
    ...mapActions('payments', []),
    ...mapMutations('payments', ['setNewPay', 'setLastId', 'setNewCategory']),
    addNewCategory(newCategory) {
      this.isFormNewCategoryEnabled = false;
      this.setNewCategory(newCategory);
      this.newCategory = '';
    },
    saveHandler() {
      this.isFormEnabled = false;
      this.setLastId();
      let lastId = this.getLastId + 1;
      const data = {
        id: lastId,
        date: this.getCurrentDate,
        category: this.category,
        value: +this.value
      }
      this.category = '';
      this.value = '';
      this.setNewPay(data);
    }
  },
  mounted() {
  if(this.$route.name === 'AddPayment') {
    let category = this.$route.params.pathMatch.slice(1);
    let value = this.$route.query.value;
    if(category || value) {
      this.isFormEnabled = true;
      this.value = value;
      this.category = category;
      if(this.category && this.value) {
        setTimeout(this.saveHandler, 2000)
      }
    }
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
  & select {
    margin: 0 5px;
    border: 2px solid #0778d3;
    border-radius: 5px;
  }
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
.newCategory {
  padding: 10px;
}
</style>
