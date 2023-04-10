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
<script lang="ts">
  import { defineComponent, computed } from 'vue'
  export default defineComponent({
    name: 'Button',
    props: {
      // 按钮类型
      type: {
        type: String,
        default: 'default' // default, info, primary,success, warning, danger
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
      // 是否禁止点击
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
