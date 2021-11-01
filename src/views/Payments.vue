<template>
  <div>
    <Paymentsform/>
    <Paymentslist/>
    <Paginator/>
  </div>
</template>

<script>
import Paymentslist from '../components/Payments/Paymentslist'
import Paymentsform from "../components/Payments/Paymentsform";
import Paginator from "../components/Payments/Paginator";
export default {
  name: "Payments.vue",
  components: {
    Paginator,
    Paymentslist,
    Paymentsform,
  },

}
</script>

<style scoped>

</style>
