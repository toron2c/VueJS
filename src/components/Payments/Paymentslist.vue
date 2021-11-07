<template>
  <div>
    <div class="header">
      <p>#</p>
      <p>Date</p>
      <p class="category">Category</p>
      <p>Value</p>
    </div>
    <div class="items">
      <div v-for="(item,idx) in getActiveList" class="item" :key="item.id" :ref="'item' + item.id">
        <p>{{ item.id }}</p>
        <p>{{ item.date }}</p>
        <p class="category">{{ item.category }}</p>
        <p>{{ item.value }}</p>
        <div class="contextBox">
        <template v-if="!editModes">
          <div @click="$modal.show(item)" class="contextBtn">
            :
          </div>

          <transition name="fade">
            <ContextMenu v-if="item.id === activeId" :item="{...item, idx, getCurrentPage}"/>
          </transition>
        </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContextMenu from "./ContextMenu";
import {mapGetters} from 'vuex'

export default {
  name: "Paymentslist.vue",
  components: {ContextMenu},
  data() {
    return {
      activeId: null,
      editModes: false,
      newCategory: document.createElement("input"),
      newValue: document.createElement("input"),
      currentIndex:null,
    }
  },
  computed: {
    ...mapGetters('payments', ["getActiveList", "getCurrentPage"])
  },
  mounted() {
    this.$modal.EventBus.$on('shown', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
  methods: {
    savePay() {
      const data = {
        newCategory: document.querySelector('#category').value,
        newValue: document.querySelector('#value').value,
        idx: this.currentIndex,
      }
    this.editPay(data)
    },
    onShown(params) {
      this.activeId = params.id
      // this.activeID = null
    },
    onHide() {
      this.activeId = null
    },
    settingHandler(params) {
      // this.$modal.show(params)
      this.activeId = params.id
    }
  }

}


</script>

<style lang="scss" scoped>
.header {
  display: flex;
  font-weight: bold;
  border-bottom: 1px solid gray;
  font-size: 25px;
  margin: 16px 0 0 0;

  & p {
    margin: 16px 0 16px 0;
  }

  & p:first-child {
    margin: 16px 110px 0 100px;
  }

  & p:nth-child(3) {
    margin: 16px 95px 0 130px;
  }
}

.item {
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid gray;
  font-size: 25px;
}

.contextBox {
  margin: 16px 0 0 0;
  font-size: 25px;
  position: relative;
  cursor: pointer;
}

.category {
  width: 70px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
