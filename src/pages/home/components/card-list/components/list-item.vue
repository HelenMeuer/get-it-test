<template>
  <transition name="fade">
    <div>
      <div class="list__item">
        <span
          class="list__item--done icon-checkbox"
          :class="{'icon-checkbox--checked': item.isFinished}"
          @click="finishItem"
        ></span>
        <p class="break-word">{{ item.title }}</p>
        <span
          class="list__item--remove icon-remove"
          @click="showModal = true"
        ></span>
      </div>
      <v-remove-list-item-modal
        v-if="showModal"
        @hide="showModal = false"
        @remove="remove"
      ></v-remove-list-item-modal>
    </div>
  </transition>
</template>

<script>
import removeListItemModal from './remove-list-item-modal'

export default {
  name: 'list-item',
  components: {
    vRemoveListItemModal: removeListItemModal
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      isFinishedItem: false,
      showModal: false
    }
  },
  methods: {
    finishItem() {
      this.item.isFinished = true
      setTimeout(() => {
        this.$emit('moveToArchive')
      }, 700)
    },
    remove() {
      this.$emit('remove')
      this.showModal = false
    }
  }
}
</script>

<style lang="scss">
.list {
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;  

    &--done {
      margin-right: 8px;
      transition: $transition;
      cursor: pointer;

      &:hover {
        box-shadow: $box-shadow-btn-hover;
      }
    }

    &--remove {
      margin-left: 6px;
      cursor: pointer;
    }

    .break-word {
      word-wrap: break-word;
      max-width: calc(100% - 30px);
    }
  }
}
</style>
