<template>
  <transition name="fade">
    <div class="modal">
      <div class="modal__container">
        <div class="modal__body">
          <p class="paragraph">Ви впевнені, <br>що хочете видалити?</p>
        </div>
        <div class="modal__footer">
          <div class="btn btn--primary btn--sm" @click="remove">Так</div>
          <div class="btn btn--warning btn--sm" @click="hide">Hi</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'remove-list-item-modal',
  methods: {
    remove() {
      this.$emit('remove')
    },
    hide() {
      this.$emit('hide')
    }
  }
}
</script>

<style lang="scss">
.modal {
  position: absolute;
  max-width: inherit;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba($color-dark, 0.45);
  z-index: 4;

  &__container {
    background: $color-white;
    max-width: 260px;
    width: 100%;
    padding: 25px 50px 24px;
  }

  &__body {
    text-align: center;
    font-size: 12px;
    margin-bottom: 26px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
