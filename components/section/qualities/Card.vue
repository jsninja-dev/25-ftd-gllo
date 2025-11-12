<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  gradient: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  }
});

const { tm, rt } = useI18n();

function getTextArray(text) {
  return tm(text).map(rt);
}
</script>

<template>
  <div class="qualities-card" :class="`qualities-card--${gradient}`">
    <CPicture
      src="/images/qualities/icons/gradient.png"
      alt=""
      class="gradient"
      :class="`gradient--${gradient}`"
    />
    <div class="content" :class="{ 'content__items--order': index === 3 }">
      <CPicture :src="icon" alt="" loading="lazy" class="icon" />

      <p class="title">
        <span v-html="$t(title)" />
      </p>

      <!--<ul class="list" :class="{ 'bullet-list': getTextArray(text).length > 1 }">
        <li
          v-for="(item, index) in getTextArray(text)"
          :key="index"
          class="item"
          :class="{ 'bullet-item': getTextArray(text).length > 1 }"
        >
          <div class="text" v-html="item" />
        </li>
      </ul>-->
    </div>
  </div>
</template>

<style scoped lang="scss">
.qualities-card {
  position: relative;
  overflow: hidden;
  background: $color-black-999;

  &--top-left {
    background: linear-gradient(20deg, #040714 54.2%, #287361 129.65%);
    height: em(383);
    margin-top: em(92);
  }

  &--bottom-right {
    background: linear-gradient(165deg, #040714 65.1%, #287361 101.2%);
    height: em(412);
    margin-top: em(152);
  }

  &--left-bottom {
    background: linear-gradient(203deg, #040714 46.21%, #287361 102.9%);
    height: em(415);
  }

  @include media-breakpoint-down(sm) {
    margin-top: 0;
    height: auto;
  }

  .gradient {
    position: absolute;
    height: em(224);
    width: em(510);

    @include media-breakpoint-down(sm) {
      height: em(116);
      width: em(255);
    }

    &--top-left {
      top: 0;
      left: 0;
    }

    &--bottom-right {
      bottom: 0;
      left: 0;
      transform: scaleX(-1);
    }

    &--left-bottom {
      bottom: 0;
      left: 0;
      transform: rotate(-90deg);
      transform-origin: em(112) em(112);

      @include media-breakpoint-down(sm) {
        width: em(255);
        height: em(116);
        transform-origin: em(58) em(58);
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: em(20);
    color: $color-white;
    position: relative;
    width: 100%;
    height: 100%;
    padding: em(60) em(24);
    z-index: 1;

    @include media-breakpoint-down(sm) {
      padding: em(30) em(29) em(24);
    }

    .icon {
      display: inline-block;
      width: auto;
      height: em(48);
      //margin-bottom: em(20);

      @include media-breakpoint-down(sm) {
        height: em(32);
        margin-bottom: em(16);
      }
    }

    .title {
      span {
        font-size: em(24);
        font-weight: $font-weight-medium;
        line-height: 123%;

        @include media-breakpoint-down(sm) {
          font-size: em(20);
          line-height: 1;
        }
      }
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: em(20);
      margin-top: em(48);

      @include media-breakpoint-down(sm) {
        margin-top: em(24);
        gap: em(12);
      }

      &.bullet-list {
        margin-top: em(20);

        @include media-breakpoint-down(sm) {
          margin-top: em(24);
          margin-left: em(-12);
          margin-right: em(-12);
        }
      }

      .item {
        display: flex;
        flex-direction: row;
        gap: 0;

        .text {
          font-size: em(20);
          font-weight: $font-weight-light;
          line-height: 123%;

          @include media-breakpoint-down(sm) {
            font-size: em(16);
          }
        }

        &.bullet-item {
          &::before {
            content: '•';
            font-size: em(20);

            @include media-breakpoint-down(sm) {
              font-size: em(16);
              margin-top: em(-4);
            }
          }

          .text {
            margin-left: em(4);
          }
        }
      }
    }

    &.content__items--order {
      .icon {
        order: 2
      }

      .title {
        order: 1
      }
    }
  }
}
</style>
