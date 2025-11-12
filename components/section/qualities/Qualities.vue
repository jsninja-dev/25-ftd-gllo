<script setup>
import { qualities } from '@/configs/qualities';
import breakpoints from '@/configs/breakpoints';
import links from '@/constants/links';

function onBreakpointChange(swiper) {
  swiper.setProgress(0, 0);
}

const { getRegisterLink } = useRegisterLink();
</script>

<template>
  <section class="section-qualities">
    <div class="container">
      <div class="background" />
      <div class="content">
        <UiGradientText class="heading">
          <span class="heading-text" v-html="$t('qualitiesSection.title')" />
          <span class="square-dot" />
        </UiGradientText>
        <div class="text">
          <!-- <span v-html="$t('qualitiesSection.text')" /> -->
        </div>
        <Swiper
          slides-per-view="auto"
          :breakpoints="{
            [breakpoints.sm]: {
              allowTouchMove: false,
            },
          }"
          class="swiper"
          @breakpoint="onBreakpointChange"
        >
          <SwiperSlide
            v-for="(item, key) in qualities"
            :key="key"
            class="slide"
          >
            <SectionQualitiesCard v-bind="item" :index="key" class="card" />
          </SwiperSlide>
        </Swiper>

        <div class="bonus">
          <UiButton
            theme="red"
            class="button"
            :text="$t('common.btnClaim')"
            :to="getRegisterLink()"
            target="_blank"
          />

          <span>
            <NuxtLink :to="links.TNC" target="_blank">{{
              $t('common.TNC')
            }}</NuxtLink>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-qualities {
  position: relative;
  margin-bottom: em(160);

  @include media-breakpoint-down(sm) {
    padding-bottom: em(40);
    margin-bottom: em(64);
  }

  .background {
    position: absolute;
    top: em(120);
    bottom: 0;
    right: 0;
    width: em(632);
    background: linear-gradient(310deg, #c30044 4.96%, #040714 93.21%);

    @include media-breakpoint-down(sm) {
      top: em(152);
      width: em(325);
    }

    html[dir='rtl'] & {
      right: auto;
      left: 0;
      transform: scaleX(-1);
    }
  }

  .main {
    position: absolute;
    top: em(102);
    left: 0;
    width: auto;
    height: em(731);

    @include media-breakpoint-down(sm) {
      width: 100%;
      height: auto;
      left: 0;
      top: auto;
    }

    html[dir='rtl'] & {
      left: auto;
      right: 0;
      transform: scaleX(-1);

      @include media-breakpoint-down(sm) {
        right: 0;
        left: auto;
      }
    }
  }

  .gradient {
    position: absolute;
    top: em(102);
    right: 0;
    width: auto;
    height: em(328);
    pointer-events: none;

    @include media-breakpoint-down(sm) {
      height: em(166);
      bottom: 0;
      left: 0;
      transform: scaleX(-1);
      top: auto;
    }

    html[dir='rtl'] & {
      right: auto;
      left: 0;
      transform: scaleX(-1);

      @include media-breakpoint-down(sm) {
        right: 0;
        left: auto;
        transform: scaleX(1);
      }
    }
  }

  .content {
    position: relative;
    z-index: 1;

    .heading {
      padding-bottom: em(10);
      display: inline-block;

      .heading-text {
        font-size: em(90);
        font-weight: $font-weight-semi-bold;
        line-height: 1; /* 67.2px */

        @include media-breakpoint-down(sm) {
          font-size: em(32);
          line-height: 1.1;

          html[lang='vi'] & {
            font-size: em(25);
            line-height: 1.3;
          }
        }
      }

      .square-dot {
        width: em(50);
        height: em(50);
        margin-left: em(12);

        @include media-breakpoint-down(sm) {
          width: em(16);
          height: em(16);
          margin-left: em(6);
        }

        html[dir='rtl'] & {
          margin-left: 0;
          margin-right: em(12);

          @include media-breakpoint-down(sm) {
            margin-right: em(6);
          }
        }
      }
    }

    .text {
      margin-top: em(24);

      @include media-breakpoint-down(sm) {
        margin-top: em(4);
      }

      span {
        color: $color-black-999;
        font-size: em(48);
        font-weight: $font-weight-semi-bold;
        line-height: 1;

        @include media-breakpoint-down(sm) {
          font-size: em(20);
          line-height: 1.15;
        }
      }
    }

    .swiper {
      position: relative;
      overflow: visible;
      width: 100%;
      margin-top: em(56);
      margin-bottom: em(100);

      @include media-breakpoint-down(sm) {
        width: auto;
        padding: 0 em(20) 0 em(20);
        margin: em(54) em(-20) em(30);
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: em(-16);
        width: em(508);
        transform: translateX(-100%);
        background: linear-gradient(204deg, #040714 25.5%, #287361 84.4%);

        @include media-breakpoint-down(sm) {
          display: none;
        }

        html[dir='rtl'] & {
          left: auto;
          right: em(-16);
          transform: translateX(100%);
          background: linear-gradient(156deg, #040714 25.5%, #287361 84.4%);
        }
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: em(-100);
        right: em(-16);
        width: em(508);
        transform: translateX(100%);
        background: linear-gradient(40deg, #040714 40.02%, #287361 77.92%);

        @include media-breakpoint-down(sm) {
          display: none;
        }

        html[dir='rtl'] & {
          right: auto;
          left: em(-16);
          transform: translateX(-100%);
          background: linear-gradient(320deg, #040714 40.02%, #287361 77.92%);
        }
      }

      :deep(.swiper-wrapper) {
        height: auto;
      }

      .slide {
        width: em(388);
        height: auto;

        @include media-breakpoint-down(sm) {
          width: em(223);
        }

        &:not(:last-child) {
          margin-right: em(15);

          @include media-breakpoint-down(sm) {
            margin-right: em(10);
          }

          html[dir='rtl'] & {
            margin-left: em(15);
            margin-right: 0;

            @include media-breakpoint-down(sm) {
              margin-left: em(10);
            }
          }
        }

        .card {
          width: 100%;
          min-height: em(292);

          @include media-breakpoint-down(sm) {
            min-height: em(256);
            height: 100%;
          }
        }
      }
    }

    .bonus {
      display: flex;
      flex-direction: column;
      gap: em(5);
      justify-contetn: center;
      align-items: center;
      max-width: em(373);

      & span {
        font-size: em(18);
        font-weight: $font-weight-regular;
      }

      @include media-breakpoint-down(sm) {
        & a {
          font-size: em(14);
          color: $color-white;
        }
      }
    }
  }
}
</style>
