<template>
  <div class="form">
    <div class="form__body">
      <input
        v-model="item.title"
        type="text"
        placeholder="Введіть текст"
        class="form__input"
      />
    </div>
    <div class=form__footer>
      <div class="btn btn--primary" @click="save">Зберегти</div>
      <div class="btn btn--warning" @click="cancel">Скасувати</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create-list-item-form',
  data() {
    return {
      item: {
        title: '',
        isFinished: false
      }
    }
  },
  methods: {
    save() {
      this.$emit('save', this.item)
    },
    cancel() {
      this.$emit('hide')
    }
  }
}
</script>

<style lang="scss">
.form {
  &__body {
    margin-bottom: 41px;
    text-align: center;
  }

  &__footer {
    text-align: center;

    .btn {
      margin: 0 15px 4px;
    }
  }

  &__input {
    max-width: 268px;
    width: 100%;
  }
}
</style>
