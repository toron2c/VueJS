<template>
  <div class="box">
    <input class="input" type="text" v-model="date">
    <input class="input" type="text" v-model="category">
    <input class="input" type="text" v-model="value">
    <div>
      <button class="btn" @click="saveChange">Save</button>
      <button class="btn" @click="cancelChange" >Cancel</button>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Editor",
  data() {
    return {
      category: '',
      date: '',
      value: '',
      idx: '',
      currentPage: '',
    }
  },
  methods: {
    ...mapMutations('payments', ['editPay']),
  saveChange() {
  const data = {
    category: this.category,
    date: this.date,
    value: this.value,
    idx: this.idx,
    currentPage: this.currentPage
  }
  this.editPay(data);
  this.$router.push({name: 'Dashboard', params: this.currentPage})
  },
    cancelChange() {
      this.$router.push({name: 'Dashboard', params: this.currentPage})
    }
  },
  mounted() {
    this.category = this.$route.params.category
    this.value = this.$route.params.value
    this.date = this.$route.params.date
    this.idx = this.$route.params.idx
    this.currentPage = this.$route.params.getCurrentPage
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding: 32px;
}
.input {
  margin: 15px;
}
.btn {
  margin: 15px
}
</style>
