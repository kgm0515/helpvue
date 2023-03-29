<script setup lang="ts">
  import { handleMinus } from '@helpvue/utils'
  const handleClick = () => {
    console.log(handleMinus(10, 2))
  }
</script>

<template>
  <div>
    <!-- <Button type="primary" @click="handleClick">click me</Button> -->
    <PvueButton type="info" @click="handleClick">click me</PvueButton>
    <pvue-button type="success" @click="handleClick">click me</pvue-button>
  </div>
</template>

<style scoped></style>
