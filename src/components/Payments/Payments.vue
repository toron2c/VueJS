<template>
  <div class="content">
    <Paymentsform @savePay="pushPay" :id="list.length"/>
    <Paymentslist :list="activeList"/>
    <Paginator :lists="list.length" @changePage="changeActiveList"/>
  </div>
</template>

<script>
import Paymentslist from './Paymentslist'
import Paymentsform from "./Paymentsform";
import Paginator from "./Paginator";

export default {
  name: "Payments.vue",
  components: {
    Paginator,
    Paymentslist,
    Paymentsform,
  },
  data() {
    return {
      activeList: [],
      list: [
        {
          id: 1,
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          id: 2,
          date: '24.03.2020',
          category: 'Transport',
          value: 360
        },
        {
          id: 3,
          date: '24.03.2020',
          category: 'Food',
          value: 532
        },
        {
          id: 4,
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          id: 5,
          date: '24.03.2020',
          category: 'Transport',
          value: 360
        },
        {
          id: 6,
          date: '24.03.2020',
          category: 'Food',
          value: 532
        },
        {
          id: 7,
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          id: 8,
          date: '24.03.2020',
          category: 'Transport',
          value: 360
        },
        {
          id: 9,
          date: '24.03.2020',
          category: 'Food',
          value: 532
        },
        {
          id: 10,
          date: '24.03.2020',
          category: 'Food',
          value: 532
        },
        {
          id: 11,
          date: '24.03.2020',
          category: 'Transport',
          value: 360
        },
        {
          id: 12,
          date: '24.03.2020',
          category: 'Food',
          value: 532
        },
        {
          id: 13,
          date: '24.03.2020',
          category: 'Food',
          value: 532
        }
      ],
      count: 5,
    }
  },

  created() {
    this.activeList = this.list.slice(0, this.count)
  },
  methods: {
    pushPay(data) {
      this.list.push(data);
    },
    changeActiveList(page) {
      page = page -1;
      let startNum = page * this.count;
      let lastNum = startNum + this.count;
      this.activeList = this.list.slice(startNum, lastNum)
    }

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
