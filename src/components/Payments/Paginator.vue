<template>
  <div class="paginator">
    <div class="left" @click="leftPage"></div>
    <div class="pageNumber" :class="{ active: currentPage === item }" v-for="(item, index) in pages" @click="chosePage(item)" :key="index">
      {{ item }}
    </div>
    <div class="right" @click="rightPage"></div>
  </div>
</template>

<script>
export default {
  name: "Paginator",
  props: {
    lists: Number,
  },
  data () {
    return {
      currentPage: 1,
    }
  },

  computed: {
    pages() {
      return Math.ceil(this.lists / 5);
    }
  },
  methods: {
    chosePage(page) {
      this.currentPage = page
      this.$emit('changePage', page)
    },
    leftPage() {
      if(this.currentPage === 1) {
        return
      } else {
        this.currentPage = this.currentPage - 1;
        this.chosePage(this.currentPage)
      }
    },
    rightPage() {
    if(this.currentPage === this.pages) {
      return
    } else {
      this.currentPage++;
      this.chosePage(this.currentPage)
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
