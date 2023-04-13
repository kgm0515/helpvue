<template>
  <!-- 
  支持加载svg图片并修改尺寸和颜色
  import LoadSvg from '@components/load-svg/index.vue'
  <LoadSvg svgName="arrow-right" color="green"/>
 -->
  <div ref="divRef" class="load-svg" v-if="svgHtml" v-html="svgHtml" :style="getStyle"></div>
</template>
<script>
  import { defineComponent, onMounted, ref, watch, computed } from 'vue'
  const modules = import.meta.glob('./svg/*.svg')
  console.log(modules)
  export default defineComponent({
    props: {
      // svg的的名称
      svgName: {
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
        if (!props.svgName) return
        const data = modules[`./svg/${props.svgName}.svg`]
        data()
          .then((res) => {
            let tempDom = document.createElement('div')
            tempDom.innerHTML = res.default || ''
            let gDom = tempDom.querySelectorAll('g[fill]')
            gDom.forEach((item) => {
              const fill = item.getAttribute('fill')
              if (fill !== 'none') {
                item.setAttribute('fill', props.color)
              }
            })
            const innerHTML = tempDom.innerHTML
            svgHtml.value = innerHTML
            tempDom = gDom = null
          })
          .catch((err) => {
            console.error('LoadSvg组件加载svg图片失败', err)
          })
      }

      // 监听变化，修改颜色
      watch(() => [props.src, props.color], handleLoad)

      onMounted(() => {
        handleLoad()
      })
      return { svgHtml, divRef, getStyle }
    }
  })
</script>
<style lang="less" scoped>
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
