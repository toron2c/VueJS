<template>
  <div class="context-menu">
    <div class="context-menu__item" @click.prevent="editHandler">Edit</div>
    <div class="context-menu__item" @click.prevent="deleteHandler">Remove</div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'ContextMenu',
  props:{
    item: {},
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    ...mapActions('payments', ['deletePay']),
   editHandler() {
  this.$modal.hide();
  this.$router.push({name: 'edit', params: this.item})
   },
    deleteHandler() {
     this.deletePay(this.item);
    }
  }
}
</script>

<style lang="scss" scoped>
.context-menu{
  position: absolute;
  left: -10px;
  top: -20px;
  box-shadow: 2px 3px 6px 1px;
  &__item {
    padding: 5px;
    cursor: pointer;
    &:hover{
      background: rgba(0, 0, 0, 0.1);
    }
  }
}

</style>
