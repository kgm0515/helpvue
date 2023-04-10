<template>
  <button :class="getClass" :disabled="disabled">
    <div class="pvue-button__board">
      <div class="pvue-button__backg"></div>
      <div class="pvue-button__edge"></div>
    </div>
    <div class="pvue-button__main">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  import { defineComponent, computed } from 'vue'
  export default defineComponent({
    name: 'Button',
    props: {
      // 按钮类型
      type: {
        type: String,
        default: 'default' // default, info, primary, warning, danger
      },
      // 按钮大小
      size: {
        type: String,
        default: 'middle' // small, middle, large, extra
      },
      // 是否是圆形按钮
      round: {
        type: Boolean,
        default: false
      },
      // 是否是幽灵按钮
      ghost: {
        type: Boolean,
        default: false
      },
      // 是否是按钮链接
      link: {
        type: Boolean,
        default: false
      },
      // 是否是幽灵按钮
      disabled: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const getClass = computed(() => {
        const classList = ['pvue-button']
        classList.push(`pvue-button--${props.type}`)
        classList.push(`pvue-button--${props.size}`)
        props.round && classList.push(`pvue-button--round`)
        props.ghost && classList.push(`pvue-button--ghost`)
        props.link && classList.push(`pvue-button--link`)
        props.disabled && classList.push(`pvue-button--disabled`)
        return classList
      })
      return { getClass }
    }
  })
</script>
<style lang="less" scoped>
  :root {
    --backg-color: transparent;
    --backg-opacity: 1;
    --edge-color: transparent;
    --edge-opacity: 1;
    --main-color: var(--fc-black);
    --main-opacity: 1;
  }
  .pvue-button {
    @h-sm: 24px;
    @h-md: 30px;
    @h-lg: 36px;
    @h-xl: 40px;
    @px-sm: 8px;
    @px-md: 12px;
    @px-lg: 14px;
    @px-xl: 18px;
    @color-gray-light: #f0f0f0;
    @color-gray-medium: #dad8d8;
    @border-grey-color: rgb(231, 231, 231);
    @bg-disabled: #e0e0e0;
    height: @h-md;
    padding: 0 @px-md;
    border-radius: var(--round-md);
    font-size: var(--fz-md);
    color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.1s linear;
    background: transparent;
    &__main {
      font-size: inherit;
      color: inherit;
      opacity: var(--main-opacity);
    }
    &__board {
      width: 100%;
      height: inherit;
      position: absolute;
      z-index: -1;
      border-radius: inherit;
    }
    &__backg,
    &__edge {
      width: 100%;
      height: inherit;
      border-radius: inherit;
      position: absolute;
      box-sizing: border-box;
      border-radius: inherit;
    }
    &__backg {
      background: var(--backg-color);
      opacity: var(--backg-opacity);
      z-index: -2;
    }
    &__edge {
      border: 1px solid var(--edge-color);
      opacity: var(--edge-opacity);
      z-index: -1;
    }
    &:hover {
      --backg-opacity: var(--bg-opacity-8);
      --edge-opacity: var(--bg-opacity-0);
    }
    &:active {
      --backg-opacity: var(--bg-opacity-9);
    }
    /** 开始按钮 */
    &--default {
      --main-color: var(--fc-black);
      --backg-color: var(--bg-default);
      --edge-color: @border-grey-color;
      &:hover {
        --backg-color: var(--bg-primary);
        --edge-color: var(--bg-primary);
        --backg-opacity: var(--bg-opacity-md);
        --edge-opacity: var(--bg-opacity-5);
        --main-color: var(--fc-primary);
      }
      &:active {
        --backg-opacity: var(--bg-opacity-1);
      }
    }
    &--primary {
      --main-color: var(--fc-white);
      --backg-color: var(--bg-primary);
      --edge-color: var(--bg-primary);
    }
    &--success {
      --main-color: var(--fc-white);
      --backg-color: var(--bg-success);
      --edge-color: var(--bg-success);
    }
    &--warning {
      --main-color: var(--fc-white);
      --backg-color: var(--bg-warning);
      --edge-color: var(--bg-warning);
    }
    &--info {
      --main-color: var(--fc-white);
      --backg-color: var(--bg-info);
      --edge-color: var(--bg-info);
    }
    &--danger {
      --main-color: var(--fc-white);
      --backg-color: var(--bg-danger);
      --edge-color: var(--bg-danger);
    }
    &--small {
      height: @h-sm;
      border-radius: var(--round-sm);
      padding: 0 @px-sm;
      font-size: var(--fz-sm);
    }
    &--middle {
      height: @h-md;
      border-radius: var(--round-md);
      padding: 0 @px-md;
      font-size: var(--fz-md);
    }
    &--large {
      height: @h-lg;
      border-radius: var(--round-lg);
      padding: 0 @px-lg;
      font-size: var(--fz-lg);
    }
    &--extra {
      height: @h-xl;
      border-radius: var(--round-xl);
      padding: 0 @px-xl;
      font-size: var(--fz-xl);
    }
    &--round {
      border-radius: 100px;
    }
    &--ghost {
      --backg-color: transparent;

      &:hover {
        --backg-opacity: var(--bg-opacity-lg);
        --edge-opacity: var(--bg-opacity-10);
        --edge-color: @border-grey-color;
      }
      &:active {
        --backg-opacity: var(--bg-opacity-1);
      }
    }
    &--ghost&--default {
      --main-color: var(--fc-black);
      &:hover {
        --backg-color: var(--fc-black);
      }
    }
    &--ghost&--primary {
      --main-color: var(--bg-primary);
      &:hover {
        --edge-color: var(--bg-primary);
        --backg-color: var(--bg-primary);
      }
    }
    &--ghost&--success {
      --main-color: var(--bg-success);
      &:hover {
        --edge-color: var(--bg-success);
        --backg-color: var(--bg-success);
      }
    }
    &--ghost&--warning {
      --main-color: var(--bg-warning);
      &:hover {
        --edge-color: var(--bg-warning);
        --backg-color: var(--bg-warning);
      }
    }
    &--ghost&--info {
      --main-color: var(--bg-info);
      &:hover {
        --edge-color: var(--bg-info);
        --backg-color: var(--bg-info);
      }
    }
    &--ghost&--danger {
      --main-color: var(--bg-danger);
      &:hover {
        --edge-color: var(--bg-danger);
        --backg-color: var(--bg-danger);
      }
    }
    &--link {
      background: transparent;
      --backg-color: transparent;
      --edge-color: transparent;
      &:hover {
        --backg-color: transparent;
        --edge-color: transparent;
        text-decoration: underline;
      }
    }
    &--link&--default {
      --main-color: var(--fc-black);
    }
    &--link&--primary {
      --main-color: var(--bg-primary);
    }
    &--link&--success {
      --main-color: var(--bg-success);
    }
    &--link&--warning {
      --main-color: var(--bg-warning);
    }
    &--link&--info {
      --main-color: var(--bg-info);
    }
    &--link&--danger {
      --main-color: var(--bg-danger);
    }
    &--disabled {
      --backg-opacity: var(--bg-opacity-5);
      --edge-opacity: var(--bg-opacity-0);
      cursor: not-allowed;
      &:hover {
        --backg-opacity: var(--bg-opacity-5);
        --edge-opacity: var(--bg-opacity-0);
      }
      &:active {
        --backg-opacity: var(--bg-opacity-5);
      }
    }
    &--disabled&--default {
      --backg-color: var(--bg-disabled);
      --edge-opacity: var(--bg-opacity-0);
      --main-color: var(--fc-disabled);
    }
  }
</style>
