<template>
  <div class="paginator">
    <div class="left" @click="leftPage"></div>
    <div class="pageNumber" :class="{ active: getCurrentPage === n}" v-for="n in getNumbersOfPages" :key="n"
         @click="chosePage(n)">
      {{ n }}
    </div>
    <div class="right" @click="rightPage"></div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Paginator",
  computed: {
    ...mapGetters('payments', ['getNumbersOfPages', 'getCurrentPage'])
  },
  methods: {
    ...mapActions('payments', ['updateActiveList']),
    chosePage(page) {
      this.updateActiveList(page)
    },
    leftPage() {
      if (this.getCurrentPage === 1) {
        return
      } else {
        let newNumberPage = this.getCurrentPage - 1
        this.chosePage(newNumberPage)
      }
    },
    rightPage() {
      if (this.getCurrentPage === this.getNumbersOfPages) {
        return
      } else {
        let newNumberPage = this.getCurrentPage + 1;
        this.chosePage(newNumberPage)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.paginator {
  margin-top: 236px;
  display: flex;
  justify-content: center;
}

.pageNumber {
  margin: 0 10px;
  color: #0778d3;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    transform: scale(1.24);
  }
}

.active {
  background: lightblue;
  border-radius: 5px;
  width: 15px;

  &:hover {
    transition: 0.3s;
    transform: scale(1.24);
  }
}

.left {
  width: 25px;
  height: 25px;
  background: url('https://toron2c.github.io/testovoe/img/leftarrow.svg') no-repeat;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    transform: scale(1.24);
  }
}

.right {
  margin: -4px 0 0 5px;
  width: 25px;
  height: 25px;
  background: url('https://toron2c.github.io/testovoe/img/rigtharrow.svg') no-repeat;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    transform: scale(1.24);
  }
}
</style>
