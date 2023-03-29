<template>
  <button :disabled="disabled" :class="getClass">
    <span class="pvue-button__content"><slot /></span>
  </button>
</template>
<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue'
  export default defineComponent({
    name: 'Button',
    props: {
      // 按钮类型
      type: {
        type: String as PropType<'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'>,
        default: 'default'
      },
      // 按钮尺寸
      size: {
        type: String as PropType<'small' | 'middle' | 'large'>,
        default: 'middle'
      },
      // 是否可点击
      disabled: {
        type: Boolean
      },
      // 是否是文字按钮
      text: {
        type: Boolean,
        default: false
      },
      // 文字按钮是否带背景
      bg: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const { type, size, disabled, text, bg } = props
      /** 组装样式 */
      const getClass = computed(() => {
        const tempList = ['pvue-button', `pvue-button--${type}`, `pvue-button--${size}`]
        if (disabled) tempList.push(`pvue-button--disabled`)
        if (text) tempList.push(`pvue-button--text`)
        if (bg) tempList.push(`pvue-button--bg`)
        return tempList.join(' ')
      })
      return { getClass }
    }
  })
</script>
<style>
  button {
    color: red;
  }
</style>
