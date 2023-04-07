<template>
  <button :class="getClass">
    <div class="pvue-btn__content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  import { defineComponent, onMounted, ref, watch, computed } from 'vue'
  export default defineComponent({
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
      }
    },
    setup(props) {
      const getClass = computed(() => {
        const classList = ['pvue-btn']
        classList.push(`pvue-btn--${props.type}`)
        classList.push(`pvue-btn--${props.size}`)
        props.round && classList.push(`pvue-btn--round`)
        props.ghost && classList.push(`pvue-btn--ghost`)
        return classList
      })
      return { getClass }
    }
  })
</script>
<style lang="less" scoped>
  .pvue-btn {
    @h-sm: 26px;
    @h-md: 30px;
    @h-lg: 34px;
    @h-xl: 38px;
    @px-sm: 8px;
    @px-md: 12px;
    @px-lg: 14px;
    @px-xl: 18px;
    @border-default-color: rgba(0, 0, 0, 0.2);
    --height: @h-md;
    --paddingX: @px-md;
    --fontColor: var(--fc-black);
    --background: var(--bg-default);
    --borderColor: @border-default-color;
    --borderRadius: var(--round-md);
    --bgOpacity: var(--bg-opacity);
    --fontSize: var(--fz-md);
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    color: var(--fontColor);
    border-radius: var(--round-md);
    height: var(--height);
    padding: 0 var(--paddingX);
    font-size: var(--fontSize);
    position: relative;
    overflow: hidden;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.15s linear;
    * {
      font-size: inherit;
    }
    &::after {
      content: '';
      width: 100%;
      box-sizing: border-box;
      height: inherit;
      position: absolute;
      background-color: var(--background);
      z-index: -1;
      opacity: var(--bgOpacity);
      border: 1px solid var(--borderColor);
      border-radius: var(--round-md);
    }
    &:hover {
      &::after {
        --bgOpacity: var(--bg-opacity-8);
      }
    }
    &:active {
      &::after {
        --bgOpacity: var(--bg-opacity-9);
      }
    }
    &--default {
      --fontColor: var(--fc-black);
      --background: var(--bg-default);
      --borderColor: @border-default-color;
      &:hover {
        color: var(--fc-primary);
        &::after {
          opacity: var(--bg-opacity-lg);
          --background: var(--bg-primary);
          --borderColor: var(--bg-primary);
        }
      }
      &:active {
        color: var(--fc-primary);
        &::after {
          opacity: var(--bg-opacity-1);
          --background: var(--bg-primary);
          --borderColor: var(--bg-primary);
        }
      }
    }
    &--primary {
      --fontColor: var(--fc-white);
      --background: var(--bg-primary);
      --borderColor: var(--bg-primary);
    }
    &--success {
      --fontColor: var(--fc-white);
      --background: var(--bg-success);
      --borderColor: var(--bg-success);
    }
    &--warning {
      --fontColor: var(--fc-white);
      --background: var(--bg-warning);
      --borderColor: var(--bg-warning);
    }
    &--info {
      --fontColor: var(--fc-white);
      --background: var(--bg-info);
      --borderColor: var(--bg-info);
    }
    &--danger {
      --fontColor: var(--fc-white);
      --background: var(--bg-danger);
      --borderColor: var(--bg-danger);
    }
    &--small {
      --height: @h-sm;
      --borderRadius: var(--round-sm);
      --paddingX: @px-sm;
      --fontSize: var(--fz-sm);
    }
    &--middle {
      --height: @h-md;
      --borderRadius: var(--round-md);
      --paddingX: @px-md;
      --fontSize: var(--fz-md);
    }
    &--large {
      --height: @h-lg;
      --borderRadius: var(--round-lg);
      --paddingX: @px-lg;
      --fontSize: var(--fz-lg);
    }
    &--extra {
      --height: @h-xl;
      --borderRadius: var(--round-xl);
      --paddingX: @px-xl;
      --fontSize: var(--fz-xl);
    }
    &--round {
      --round-sm: 100px;
      --round-md: 100px;
      --round-lg: 100px;
      --round-xl: 100px;
      --borderRadius: 100px;
    }
    &--ghost {
      --background: transparent;
      &:hover {
        &::after {
          --background: var(--bg-primary);
          opacity: var(--bg-opacity-1);
          // --background: rgb(236, 236, 236);
        }
      }
      &:active {
        &::after {
          --background: var(--bg-primary);
          opacity: var(--bg-opacity-1);
          // --background: rgb(236, 236, 236);
        }
      }
    }
    &--ghost&--default {
      --fontColor: var(--fc-black);
    }
    &--ghost&--primary {
      --fontColor: var(--bg-primary);
    }
    &--ghost&--success {
      --fontColor: var(--bg-success);
    }
    &--ghost&--warning {
      --fontColor: var(--bg-warning);
    }
    &--ghost&--info {
      --fontColor: var(--bg-info);
    }
    &--ghost&--danger {
      --fontColor: var(--bg-danger);
    }
    &--link {
      --background: transparent;
      &:hover {
        opacity: var(--bg-opacity-8);
        --background: rgb(245, 245, 245);
      }
      &:active {
        &::after {
          opacity: var(--bg-opacity-9);
          --background: rgb(236, 236, 236);
        }
      }
    }
    &--link&--default {
      --fontColor: var(--fc-black);
    }
    &--link&--primary {
      --fontColor: var(--bg-primary);
    }
    &--link&--success {
      --fontColor: var(--bg-success);
    }
    &--link&--warning {
      --fontColor: var(--bg-warning);
    }
    &--link&--info {
      --fontColor: var(--bg-info);
    }
    &--link&--danger {
      --fontColor: var(--bg-danger);
    }
  }
</style>
