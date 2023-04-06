<template>
  <div ref="divRef" class="load-svg" v-if="svgHtml" v-html="svgHtml" :style="getStyle"></div>
</template>
<script>
  import { defineComponent, onMounted, ref, watch, computed } from 'vue'

  // src的转换规则
  const srcRepRegular = (url) => {
    const repList = [
      ['@assets', '/src/assets'],
      ['@comp', '/src/components'],
      ['@src', '/src']
    ]
    repList.forEach(([que, rep]) => (url = url.replace(que, rep)))
    return url
  }

  export default defineComponent({
    props: {
      // svg的地址
      src: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: '#000'
      },
      width: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: ''
      }
    },
    setup(props) {
      const svgHtml = ref('')
      const divRef = ref(null)

      // 获取样式
      const getStyle = computed(() => {
        const styleObj = {}
        if (props.width) styleObj.width = props.width
        if (props.height) styleObj.height = props.height
        return styleObj
      })

      // 异步加载svg
      const handleLoad = () => {
        if (!props.src) return
        const processSrc = srcRepRegular(props.src) + `?raw`
        console.log(props.src, processSrc)
        import(/*@vite-ignore*/ processSrc)
          .then((res) => {
            svgHtml.value = res.default || ''
            handleChange()
          })
          .catch((err) => {
            console.error('LoadSvg组件加载svg图片失败', err)
          })
      }

      const handleChange = async () => {
        setTimeout(() => {
          if (!divRef.value) return
          const gDom = document.body.querySelectorAll('g[fill]')
          gDom.forEach((item) => {
            const fill = item.getAttribute('fill')
            if (fill !== 'none') {
              item.setAttribute('fill', props.color)
            }
          })
        })
      }
      // 监听变化，修改颜色
      watch(() => [props.src, props.color], handleChange)

      onMounted(() => {
        handleLoad()
      })
      return { svgHtml, divRef, getStyle }
    }
  })
</script>
<style lang="less">
  .load-svg {
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    :deep(svg) {
      display: inline-block;
      height: 100%;
      width: 100%;
    }
  }
</style>
