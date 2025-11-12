<script setup>
import { knowns } from '@/configs/known';
import links from '@/constants/links';
</script>

<template>
  <section class="section-known">
    <div class="container">
      <UiGradientText class="heading">
        <span class="heading-text" v-html="$t('knownSection.title')" />
        <span class="square-dot" />
      </UiGradientText>
      <div class="cards">
        <div class="card" v-for="(card, index) in knowns" :key="index">
          <CPicture :src="card.icon" class="icon" alt="icon" />
          <div class="text">
            <span v-html="$t(card.text)" />
          </div>
        </div>
      </div>
      <NuxtLink :to="links.TNC" target="_blank" class="link">
        <span>
          {{ $t('common.TCFull') }}
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-known {
  margin-bottom: em(160);

  @include media-breakpoint-down(sm) {
    margin-bottom: em(64);
  }

  .heading {
    padding-bottom: em(10);
    display: inline-block;

    .heading-text {
      font-size: em(96);
      font-weight: $font-weight-semi-bold;
      line-height: 1;

      @include media-breakpoint-down(sm) {
        font-size: em(32);
        line-height: 1.1;
      }
    }

    .square-dot {
      width: em(50);
      height: em(50);
      margin-inline: em(12);

      @include media-breakpoint-down(sm) {
        width: em(16);
        height: em(16);
        margin-inline: em(4);
      }
    }
  }

  .cards {
    margin-top: em(48);
    display: flex;
    flex-wrap: wrap;
    gap: em(20) em(20);
    margin-bottom: em(24);

    @include media-breakpoint-down(sm) {
      margin-top: em(16);
      gap: em(15) em(15);
    }

    .card {
      width: em(378);
      height: em(326);
      background-color: $color-grey-100;
      padding: em(30) em(80) em(30) em(60);
      overflow: hidden;

      @include media-breakpoint-down(sm) {
        width: em(160);
        //height: em(178);
        height: auto;
        padding: em(30) em(18);
      }

      .icon {
        width: em(60);
        height: em(60);

        @include media-breakpoint-down(sm) {
          width: em(30);
          height: em(30);
        }
      }

      .text {
        margin-top: em(26);
        font-size: em(14);

        @include media-breakpoint-down(sm) {
          margin-top: em(20);
        }

        span {
          color: $color-black-900;
          font-size: em(24);
          font-weight: $font-weight-medium;
          line-height: 123.358%;

          &:deep(strong) {
            font-weight: $font-weight-bold;
          }

          @include media-breakpoint-down(sm) {
            font-size: em(16);
            line-height: 1.1;
          }
        }
      }
    }
  }

  .link {
    span {
      color: $color-grey-700;
      font-size: em(16);
      font-weight: $font-weight-regular;

      @include media-breakpoint-down(sm) {
        font-size: em(14);
        font-weight: $font-weight-light;
      }
    }
  }
}
</style>
