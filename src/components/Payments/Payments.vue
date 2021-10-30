<template>
  <div class="content">
    <Paymentsform/>
    <Paymentslist/>
    <Paginator/>
  </div>
</template>

<script>
import Paymentslist from './Paymentslist'
import Paymentsform from "./Paymentsform";
import Paginator from "./Paginator";
import {mapActions} from 'vuex'
export default {
  name: "Payments.vue",
  components: {
    Paginator,
    Paymentslist,
    Paymentsform,
  },
  methods: {
  ...mapActions('payments', ['fetchData', 'loadCategories']),
  },
  created() {
    this.fetchData();
    this.loadCategories();
  },
}
</script>

<style scoped>
.content {
  margin: 0 auto;
  width: 800px;
  height: 600px;
  background: #faf9dbf7;
  border: 25px solid #524e4e;
  border-radius: 25px;
}
</style>
