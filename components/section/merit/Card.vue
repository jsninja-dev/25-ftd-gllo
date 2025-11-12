<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  redo: {
    type: Boolean,
    required: true,
  },
  step: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="merit-card">
    <div class="title-container">
      <div class="step-container">
        <div class="step">
          <span>{{ $t('meritSection.step') }}</span>
        </div>
        <div class="number">
          <span>{{ step }}</span>
        </div>
      </div>
      <div class="title">
        <span v-html="$t(title)" />
      </div>
    </div>
    <div class="divider" />
    <div class="text-container">
      <CPicture v-if="redo" src="/images/merit/redo.svg" class="redo" />
      <div class="text">
        <span class="text-span" v-html="$t(text)" />
        <span class="square-dot" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.merit-card {
  .title-container {
    display: flex;
    flex-direction: row;
    gap: em(26);

    @include media-breakpoint-down(sm) {
      gap: em(12);
      flex-direction: column;
    }

    .step-container {
      width: em(65);
      height: em(65);
      border-radius: em(3);
      background-color: $color-black-999;
      color: $color-white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @include media-breakpoint-down(sm) {
        width: em(42);
        height: em(42);
      }

      .step {
        span {
          font-size: em(18);
          font-weight: $font-weight-light;
          line-height: 1.2;

          @include media-breakpoint-down(sm) {
            font-size: em(14);
            line-height: 1;
          }
        }
      }

      .number {
        span {
          font-size: em(24);
          font-weight: $font-weight-bold;
          line-height: 1.2;

          @include media-breakpoint-down(sm) {
            font-size: em(20);
            line-height: 1;
          }
        }
      }
    }

    .title {
      span {
        color: $color-black-999;
        font-size: em(48);
        font-weight: $font-weight-semi-bold;

        @include media-breakpoint-down(sm) {
          font-size: em(20);
          line-height: 1.2;
        }
      }
    }
  }

  .divider {
    width: 100%;
    height: em(1);
    background-color: $color-grey-200;
    margin-block: em(30);

    @include media-breakpoint-down(sm) {
      margin-block: em(16);
    }
  }

  .text-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: em(22);

    @include media-breakpoint-down(sm) {
      gap: em(8);
    }

    .redo {
      width: em(52);
      height: em(48);

      @include media-breakpoint-down(sm) {
        width: em(26);
        height: em(24);
      }
    }

    .text {
      .text-span {
        font-size: em(32);
        font-weight: $font-weight-medium;
        line-height: 1;

        @include media-breakpoint-down(sm) {
          font-size: em(16);
          line-height: 1.15;
        }
      }

      .square-dot {
        width: em(18);
        height: em(18);
        margin-inline: em(8);

        @include media-breakpoint-down(sm) {
          width: em(10);
          height: em(10);
          margin-inline: em(4);
        }
      }
    }
  }
}
</style>
