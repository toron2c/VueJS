<template>
  <div>
    <div class="header">
      <p>#</p>
      <p>Date</p>
      <p class="category">Category</p>
      <p>Value</p>
    </div>
    <div class="items">
      <div v-for="item in list" class="item" :key="item.id">
        <p>{{ item.id }}</p>
        <p>{{ item.date }}</p>
        <p class="category">{{ item.category }}</p>
        <p>{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paymentslist.vue",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  font-weight: bold;
  border-bottom: 1px solid gray;
}

.item {
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid gray;
}

.category {
  width: 70px;
}
</style>
