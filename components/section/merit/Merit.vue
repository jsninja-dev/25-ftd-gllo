<script setup>
import { merits } from '@/configs/merits';

const { getRegisterLink } = useRegisterLink();
</script>

<template>
  <section class="section-merit">
    <div class="container">
      <UiGradientText class="heading">
        <span class="heading-text" v-html="$t('meritSection.title')" />
        <span class="square-dot" />
      </UiGradientText>

      <div class="cards">
        <SectionMeritCard
          v-for="(item, key) in merits"
          :key="key"
          v-bind="item"
          class="card"
        />
      </div>

      <UiButton
        theme="red"
        class="button"
        :text="$t('common.btnOpen')"
        :to="getRegisterLink()"
        target="_blank"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-merit {
  margin-bottom: em(160);

  @include media-breakpoint-down(sm) {
    margin-bottom: em(60);
  }

  .heading {
    display: inline-block;
    padding-bottom: em(10);

    .heading-text {
      font-size: em(96);
      font-weight: $font-weight-semi-bold;
      line-height: 1;

      @include media-breakpoint-down(sm) {
        font-size: em(32);
      }
    }

    .square-dot {
      width: em(50);
      height: em(50);
      margin-inline: em(10);

      @include media-breakpoint-down(sm) {
        width: em(16);
        height: em(16);
        margin-inline: em(6);
      }
    }
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: em(72);
    margin-top: em(56);
    margin-bottom: em(42);

    @include media-breakpoint-down(sm) {
      gap: em(40);
      margin-top: em(16);
      margin-bottom: em(28);
    }
  }
}
</style>
