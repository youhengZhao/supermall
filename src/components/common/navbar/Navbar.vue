<template>
  <div class="navbar">
     <div class="left"><slot name="left"></slot></div>
     <div class="center"><slot name="center"></slot></div>
     <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
    display: flex;
    height: 1.1733rem;
    line-height: 1.1733rem;
    text-align: center;
    box-shadow: 0 .0267rem .0267rem rgb(100, 100, 100,.1);
}

.left .right{
    width: 1.6rem;
}

.center{
    flex: 1;
}
</style>