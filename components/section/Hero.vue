<script setup>
import { heroTips } from '@/configs/heroTips';
import links from '@/constants/links';

const { getRegisterLink } = useRegisterLink();
</script>

<template>
  <section class="section-hero">
    <div class="container">
      <div class="content">
        <CPicture
          src="/images/logo-light.svg"
          alt="SquaredFinancial Logo"
          class="logo"
          :sources="{
            sm: '/images/logo.svg',
          }"
        />
        <div class="main">
          <div class="heading">
            <span class="heading-text" v-html="$t('heroSection.title')" />
          </div>
          <div class="text">
            <span v-html="$t('heroSection.text')" />
            <span class="square-dot dot" />
          </div>
          <!--<div class="fund">
            <UiGradientText
              gradient="white-reverse"
              mobile-gradient="white"
              class="fund-text"
            >
              <span v-html="$t('heroSection.fundPre')" />
            </UiGradientText>
            <CPicture
              src="/images/hero/amount.svg"
              alt=""
              loading="lazy"
              class="amount"
            />
            <UiGradientText gradient="white" class="fund-text">
              <span v-html="$t('heroSection.fundPost')" />
            </UiGradientText>
          </div>-->
          <div class="button-wrapper">
            <div class="bonus">
              <UiButton
                theme="red"
                class="button"
                :to="getRegisterLink()"
                target="_blank"
                :text="$t('common.btnClaim')"
              />
              <span>
                <NuxtLink :to="links.TNC" target="_blank">{{
                  $t('common.TNC')
                }}</NuxtLink>
              </span>
            </div>
            <div class="trust">
              <CPicture
                src="/images/common/trust-sm.png"
                alt=""
                loading="lazy"
                class="trustpilot"
              />
              <div class="trust-stars">
                <div class="trust-text">
                  <span v-html="$t('common.trust')" />
                </div>
                <CPicture
                  src="/images/common/stars.png"
                  alt=""
                  loading="lazy"
                  class="stars"
                />
              </div>
            </div>
          </div>
          <div class="event">
            <div class="caption hidden-mobile">
              <span v-html="$t('heroSection.caption')" />
            </div>
            <ul class="list">
              <li class="item" v-for="(tip, idx) in heroTips" :key="idx">
                <CPicture :src="tip.icon" alt="" loading="lazy" class="icon" />
                <span v-html="$t(tip.text)" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="background">
        <CPicture
          src="/images/hero/main.jpg"
          :sources="{
            sm: '/images/hero/main-sm.jpg',
          }"
          loading="eager"
          fetch-priority="high"
          object-fit="cover"
          class="picture"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-hero {
  position: relative;
  overflow: visible;
  padding-top: em(60);
  margin-bottom: em(150);
  height: em(1053);

  @include media-breakpoint-down(sm) {
    overflow: hidden;
    padding: em(12) 0 0;
    margin-bottom: em(64);
    height: auto;
  }

  .content {
    @include media-breakpoint-down(sm) {
      margin-bottom: em(30);
    }

    .logo {
      width: em(404);
      height: em(40);

      @include media-breakpoint-down(sm) {
        width: em(303);
        height: em(30);
      }
    }

    .main {
      position: relative;
      margin-top: em(90);

      @include media-breakpoint-down(sm) {
        width: 100%;
        margin-top: em(36);
      }

      .heading {
        color: $color-white;

        @include media-breakpoint-down(sm) {
          background-image: linear-gradient(
            283deg,
            #d30044 34.11%,
            #fff 91.92%
          );
          color: transparent;
          background-clip: text;
          background-size: cover;
        }

        .heading-text {
          line-height: 115%;
          font-size: em(160);
          font-weight: $font-weight-semi-bold;

          @include media-breakpoint-down(sm) {
            font-size: em(60);
            font-weight: $font-weight-semi-bold;
            color: $color-white;
          }
        }

        .dot {
          width: em(46);
          height: em(46);
          flex-shrink: 0;
          margin-left: em(10);

          @include media-breakpoint-down(sm) {
            width: em(16);
            height: em(16);
            margin-left: em(5);
            margin-bottom: 0;
          }

          html[lang='ar'] & {
            margin-left: 0;
            margin-right: em(10);

            @include media-breakpoint-down(sm) {
              margin-right: em(5);
            }
          }
        }
      }

      .text {
        display: flex;
        align-items: flex-end;
        gap: em(8);
        color: $color-white;
        margin-top: em(20);

        @include media-breakpoint-down(sm) {
          margin-bottom: em(20);
        }

        span {
          display: block;
          width: fit-content;
          font-size: em(90);
          font-weight: $font-weight-medium;
          line-height: 115%;

          @include media-breakpoint-down(sm) {
            width: 68%;
            color: $color-white;
            font-size: em(32);
            line-height: 109.626%;
          }

          &:deep(strong) {
            font-weight: $font-weight-extra-bold;
          }
        }

        .dot {
          width: em(8);
          height: em(8);
          margin-bottom: em(3.5);
        }
      }

      .fund {
        margin-top: em(50);
        display: flex;
        align-items: center;
        gap: em(16);

        @include media-breakpoint-down(sm) {
          margin-top: em(22);
          display: inline-block;
        }

        .amount {
          margin-block: em(10);
          width: em(400);
          height: auto;

          @include media-breakpoint-down(sm) {
            width: em(156);
            height: auto;
            margin-block: 0;
          }
        }

        .fund-text {
          padding-bottom: em(6);

          @include media-breakpoint-down(sm) {
            padding-bottom: 0;
          }

          span {
            font-size: em(48);
            font-weight: $font-weight-semi-bold;
            line-height: 100%;

            @include media-breakpoint-down(sm) {
              font-size: em(18);
              line-height: 109.626%;
            }
          }
        }
      }

      .button-wrapper {
        display: flex;
        flex-direction: row;
        gap: em(16);
        justify-content: space-between;
        align-items: flex-end;
        margin-top: em(40);
        padding-bottom: em(36);
        border-bottom: em(1) solid $color-grey-400;

        @include media-breakpoint-down(sm) {
          flex-direction: column;
          gap: em(16);
          justify-content: flex-start;
          align-items: flex-start;
          border: none;
          margin-top: 0;
          padding-bottom: 0;
        }

        & .bonus {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          @include media-breakpoint-down(sm) {
            width: 100%;

            & a {
              font-size: em(14);
            }
          }

          & span {
            text-align: center;
            font-size: em(18);
            font-weight: $font-weight-regular;
            color: $color-white;
          }
        }

        .button {
          width: em(395);

          @include media-breakpoint-down(sm) {
            width: 100%;
            height: em(62);
            margin-top: em(27);
          }

          span {
            color: $color-white;
            font-size: em(18);
            font-weight: $font-weight-medium;
          }
        }

        .trust {
          width: em(544);

          @include media-breakpoint-down(sm) {
            width: 100%;
            border-top: em(1) solid #7b7b7b;
            padding-top: em(16);
          }

          .trustpilot {
            width: em(102);
            height: auto;
            margin-left: auto;

            @include media-breakpoint-down(sm) {
              width: em(64);
            }

            html[dir='rtl'] & {
              margin-left: 0;
              margin-right: auto;
            }
          }

          .trust-stars {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: em(10);
            margin-top: em(6);

            @include media-breakpoint-down(sm) {
              margin-top: em(5);
              justify-content: space-between;
            }

            .trust-text {
              text-align: right;

              @include media-breakpoint-down(sm) {
                width: em(144);
              }

              span {
                display: block;
                color: #040714;
                font-size: em(20);
                font-weight: $font-weight-regular;
                color: $color-white;

                @include media-breakpoint-down(sm) {
                  font-size: em(12);
                }

                &:deep(strong) {
                  font-weight: $font-weight-bold;
                }
              }
            }

            .stars {
              width: em(202);
              height: auto;

              @include media-breakpoint-down(sm) {
                width: em(147);
              }
            }
          }
        }
      }

      .event {
        display: flex;
        flex-direction: row;
        gap: em(16);
        justify-content: space-between;
        align-items: center;
        color: $color-white;
        padding-top: em(40);

        @include media-breakpoint-down(sm) {
          position: relative;
          top: 0;
          left: 0;
          width: auto;
          padding-top: em(30);
        }

        html[dir='rtl'] & {
          left: auto;
          right: em(744);

          @include media-breakpoint-down(sm) {
            left: auto;
            right: 0;
          }
        }

        .caption {
          span {
            font-size: em(32);
            font-weight: $font-weight-semi-bold;
            line-height: 1.096;

            @include media-breakpoint-down(sm) {
              font-size: em(16);
              font-weight: $font-weight-semi-bold;
              line-height: 1.096;
            }
          }
        }

        .list {
          position: relative;
          display: flex;
          flex-direction: row;
          gap: em(80);

          @include media-breakpoint-down(sm) {
            flex-direction: column;
            gap: em(24);
            width: 100%;
            padding: 0;
            margin-top: 0;
          }

          .item {
            color: $color-white;
            display: flex;
            flex-direction: row;
            gap: em(20);

            @include media-breakpoint-down(sm) {
              position: relative;
              flex-shrink: 0;
              color: rgba($color-grey-300, 0.8);
              flex-direction: row;
              gap: em(8);
            }

            @include media-breakpoint-up(sm) {
              &:nth-child(1) {
                order: 1;
              }

              &:nth-child(2) {
                order: 3;
              }

              &:nth-child(3) {
                order: 2;
              }
            }

            .icon {
              width: em(36);
              height: em(36);

              @include media-breakpoint-down(sm) {
                width: em(25);
                margin-top: em(-4);
                height: auto;
              }
            }

            span {
              font-size: em(20);
              line-height: normal;
              font-weight: $font-weight-light;

              @include media-breakpoint-down(sm) {
                color: rgba(197, 203, 213, 0.8);
                font-size: em(14);
                font-weight: $font-weight-light;
              }
            }
          }
        }
      }

      .form {
        position: absolute;
        top: em(20);
        right: em(16);

        @include media-breakpoint-down(sm) {
          margin-top: em(24);
          position: relative;
          top: 0;
          right: 0;
        }

        html[dir='rtl'] & {
          right: auto;
          left: em(16);

          @include media-breakpoint-down(sm) {
            left: 0;
          }
        }
      }
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: em(1053);

    @include media-breakpoint-down(sm) {
      margin-top: em(52);
      height: em(580);
      width: 100%;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: em(4);
        transform: translateY(100%);
        width: 100%;
        height: em(196);
        background: $color-black-999;
      }
    }

    .picture {
      width: 100%;
      height: 100%;

      @include media-breakpoint-down(sm) {
        height: 100%;
      }

      html[dir='rtl'] & {
        transform: scaleX(-1);
      }
    }
  }
}
</style>
