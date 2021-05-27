<template>
  <div class="card-list">

    <div
      class="card-list__body"
      :class="{'card-list__body--pb-xs': listFinishedItems.length}"
    >
      <h3 class="card-list__title">Назва заголовка</h3>
      <transition name="fade" mode="out-in">
        <v-create-list-item-form
          v-if="isDisplayedForm"
          @save="addNewListItem"
          @hide="hideForm"
        ></v-create-list-item-form>
        <ul
          class="list"
          v-if="!isDisplayedForm && listItems.length"
        >
          <li class="list__title">Список карток</li>
          <li
            is="v-list-item"
            v-for="(item, index) in listItems"
            :key="index"
            :item="item"
            @moveToArchive="moveToArchive(item, index)"
            @remove="removeListItem(index)"
          >
          </li>
        </ul>
      </transition>
      <div
        v-if="!isDisplayedForm"
        class="btn btn--primary btn--round btn--add"
        @click="showForm"
      ></div>
    </div>

    <transition name="fade">
      <div
        class="card-list__footer accordion"
        :class="{'accordion--active': showAccordionBody}"
        v-if="listFinishedItems.length"
      >
        <p class="accordion__header">
          <span
            class="icon-chevron-right"
            :class="{'icon-chevron-right--rotate': showAccordionBody}"
            @click="showAccordionBody = !showAccordionBody"
          ></span>
          {{ listFinishedItems.length }} пунктів виконано
        </p>
        <div
          class="accordion__body"
          v-show="showAccordionBody"
        >
          <p
            v-for="(item, index) in listFinishedItems"
            :key="index"
            class="paragraph"
          >
            {{ item.title }}
          </p>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import createListItemForm from './components/create-list-item-form'
import listItem from './components/list-item'

export default {
  name: 'card-list',
  components: {
    vCreateListItemForm: createListItemForm,
    vListItem: listItem
  },
  data() {
    return {
      isDisplayedForm: false,
      listItems: [],
      listFinishedItems: [],
      showModal: false,
      showAccordionBody: false
    }
  },
  methods: {
    addNewListItem(item) {
      this.listItems.push(item)
      this.hideForm()
    },
    showForm() {
      this.isDisplayedForm = true
    },
    hideForm() {
      this.isDisplayedForm = false
    },
    removeListItem(index) {
      this.listItems.splice(index, 1)
    },
    moveToArchive(item, index) {
      this.removeListItem(index)
      this.listFinishedItems.unshift(item)
    }
  }
}
</script>

<style lang="scss">
.card-list {
  max-width: 500px;
  width: 100%;
  min-height: 250px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: $box-shadow-card;
  position: relative;

  &__title {
    font-size: 24px;
    line-height: 125%;
    margin-bottom: 18px;
    text-align: center;
  }

  &__body {
    padding: 35px 28px 28px;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;

    &--pb-xs {
      padding-bottom: 11px;
    }

    .btn--add {
      margin: auto 0 0 auto;
    }
  }

  &__footer {
    border-top: 1px solid rgba($color-dark, 0.18);
    margin: 0 10px;
  }
}

.list {
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  transition-delay: 0.5s;

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  & > div:last-child {
    .list__item {
      margin-bottom: -16px;

      @media all and (max-width: $screen-xs) {
        margin-bottom: 5px;
      }
    }
  }
}

.accordion {
  padding: 20px 0 18px;

  &__header {
    padding: 0 25px;
    display: flex;
    align-items: center;
    transition: $transition;

    .icon-chevron-right {
      margin-right: 14px;
      cursor: pointer;
    }
  }

  &__body {
    padding: 0 44px;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: $transition;

    .paragraph {
      color: $color-dark-grey;
      text-decoration: line-through;
      margin-bottom: 6px;
      word-wrap: break-word;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &--active {
    padding: 10px 0 14px;

    .accordion__header {
      color: $color-primary;
      margin-bottom: 14px;
    }

    .accordion__body {
      max-height: 2000px;
      overflow: visible;
      opacity: 1;
    }
  }
}
</style>
