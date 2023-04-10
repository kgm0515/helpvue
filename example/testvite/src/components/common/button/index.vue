<template>
  <button :class="getClass" :disabled="disabled">
    <div class="pvue-button__content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  import { defineComponent, computed } from 'vue'
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
    @border-grey-color: rgba(0, 0, 0, 0.2);
    @bg-disabled: #e0e0e0;
    --height: @h-md;
    --paddingX: @px-md;
    --fontColor: var(--fc-black);
    --background: var(--bg-default);
    --borderColor: @border-grey-color;
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
    transition: all 0.1s linear;
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
      --borderColor: @border-grey-color;
      &:hover {
        --fontColor: var(--fc-primary);
        &::after {
          --borderColor: var(--fc-primary);
        }
      }
      &:active {
        --fontColor: var(--fc-primary);
        &::after {
          --borderColor: var(--fc-primary);
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
      &::after {
        opacity: var(--bg-opacity-8);
      }
    }
    &--ghost&--default {
      --fontColor: var(--fc-black);
      &:hover {
        &::after {
          --background: @color-gray-light;
          opacity: var(--bg-opacity-2);
        }
      }
      &:active {
        &::after {
          --background: @color-gray-medium;
          opacity: var(--bg-opacity-3);
        }
      }
    }
    &--ghost&--primary {
      --fontColor: var(--bg-primary);
      &:hover {
        &::after {
          --background: var(--bg-primary);
          opacity: var(--bg-opacity-2);
        }
      }
      &:active {
        &::after {
          --background: var(--bg-primary);
          opacity: var(--bg-opacity-3);
        }
      }
    }
    &--ghost&--success {
      --fontColor: var(--bg-success);
      &:hover {
        &::after {
          --background: var(--bg-success);
          opacity: var(--bg-opacity-2);
        }
      }
      &:active {
        &::after {
          --background: var(--bg-success);
          opacity: var(--bg-opacity-3);
        }
      }
    }
    &--ghost&--warning {
      --fontColor: var(--bg-warning);
      &:hover {
        &::after {
          --background: var(--bg-warning);
          opacity: var(--bg-opacity-2);
        }
      }
      &:active {
        &::after {
          --background: var(--bg-warning);
          opacity: var(--bg-opacity-3);
        }
      }
    }
    &--ghost&--info {
      --fontColor: var(--bg-info);
      &:hover {
        &::after {
          --background: var(--bg-info);
          opacity: var(--bg-opacity-2);
        }
      }
      &:active {
        &::after {
          --background: var(--bg-info);
          opacity: var(--bg-opacity-3);
        }
      }
    }
    &--ghost&--danger {
      --fontColor: var(--bg-danger);
      &:hover {
        &::after {
          --background: var(--bg-danger);
          opacity: var(--bg-opacity-2);
        }
      }
      &:active {
        &::after {
          --background: var(--bg-danger);
          opacity: var(--bg-opacity-3);
        }
      }
    }
    &--link {
      --background: transparent;
      &::after {
        --background: transparent !important;
        --borderColor: transparent !important;
      }
      &:hover {
        .pvue-button__content {
          text-decoration: underline;
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
    &--disabled {
      opacity: var(--bg-opacity-8);
      cursor: not-allowed;
      background-color: @bg-disabled;
      &::after {
        --bgOpacity: var(--bg-opacity-8);
      }
      &:hover {
        &::after {
          --bgOpacity: var(--bg-opacity-8);
        }
      }
      &:active {
        &::after {
          --bgOpacity: var(--bg-opacity-8);
        }
      }
    }
    &--disabled&--default {
      --fontColor: var(--fc-black);
      --borderColor: @border-grey-color;
      opacity: var(--bg-opacity-6);
      &:hover {
        --fontColor: var(--fc-black);
        &::after {
          --borderColor: @border-grey-color;
        }
      }
      &:active {
        --fontColor: var(--fc-black);
        &::after {
          --borderColor: @border-grey-color;
        }
      }
    }
  }
</style>
