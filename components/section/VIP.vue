<script setup>
const { getRegisterLink } = useRegisterLink();
import links from '@/constants/links';
</script>

<template>
  <section class="section-vip">
    <CPicture
      src="/images/vip/trader.png"
      alt=""
      loading="lazy"
      class="trader"
    />
    <div class="container">
      <div class="content">
        <CPicture
          src="/images/vip/back.jpg"
          alt=""
          loading="lazy"
          class="back"
          :sources="{ sm: '/images/vip/back-sm.jpg' }"
        />
        <div class="main">
          <div class="heading">
            <span v-html="$t('vipSection.title')" />
          </div>
          <div class="text">
            <span v-html="$t('vipSection.text')" />
          </div>

          <div class="global__media">
            <CPicture
              v-for="item in 5"
              :key="item"
              :src="`/images/vip/global-media/${item}.svg`"
              alt=""
              loading="lazy"
              class=""
              :sources="{ sm: `/images/vip/global-media/${item}.svg` }"
            />
          </div>

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
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-vip {
  position: relative;
  margin-bottom: em(160);
  height: em(900);
  z-index: 2;

  @include media-breakpoint-down(sm) {
    height: em(700);
    margin-bottom: em(80);
  }

  .trader {
    position: absolute;
    top: em(-80);
    right: em(-24);
    width: em(964);
    height: em(1040);

    @include media-breakpoint-down(sm) {
      top: auto;
      bottom: em(-42);
      height: em(480);
      width: em(416);
      right: em(0);
    }

    html[dir='rtl'] & {
      transform: scaleX(-1);
      right: auto;
      left: em(-24);

      @include media-breakpoint-down(sm) {
        left: em(-8);
      }
    }
  }

  .content {
    margin-top: em(32);
    position: relative;

    @include media-breakpoint-down(sm) {
      margin-top: em(20);
      position: static;
    }

    .back {
      position: absolute;
      width: em(1600);
      height: em(727);
      z-index: -1;

      @include media-breakpoint-down(sm) {
        left: 0;
        width: 100%;
        height: 100%;
        top: 0;
      }

      html[dir='rtl'] & {
        transform: scaleX(-1);
      }
    }

    .main {
      max-width: em(860);
      padding-top: em(132);
      padding-left: em(60);

      @include media-breakpoint-down(sm) {
        padding: 0;
        max-width: 100%;
      }

      html[dir='rtl'] & {
        padding-left: 0;
        padding-right: em(60);

        @include media-breakpoint-down(sm) {
          padding: 0;
        }
      }

      .heading {
        margin-bottom: em(48);

        @include media-breakpoint-down(sm) {
          margin-bottom: em(24);
          text-align: center;
        }

        span {
          color: $color-white;
          font-size: em(96);
          font-weight: $font-weight-semi-bold;
          line-height: 1;

          @include media-breakpoint-down(sm) {
            display: inline;
            font-size: em(32);
          }
        }
      }

      .text {
        margin-bottom: em(24);

        @include media-breakpoint-down(sm) {
          margin-bottom: em(28);
        }

        span {
          color: $color-white;
          font-size: em(24);
          font-weight: $font-weight-regular;
          line-height: 1;
          letter-spacing: -0.01em;

          @include media-breakpoint-down(sm) {
            display: block;
            font-size: em(16);
            letter-spacing: 0;
            text-align: center;
            font-weight: $font-weight-light;
          }
        }
      }

      & .global__media {
        display: flex;
        justify-content: space-between;
        margin-bottom: em(60);

        @include media-breakpoint-down(sm) {
          gap: 1rem;
          margin-bottom: em(22);
        }
      }

      & .bonus {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-width: em(373);

        & span {
          text-align: center;
          font-size: em(18);
          font-weight: $font-weight-regular;
          color: $color-white;
        }

        @include media-breakpoint-down(sm) {
          & a {
            font-size: em(14);
          }
        }
      }
    }
  }
}
</style>
