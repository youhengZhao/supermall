<template>
  <div class="tabControl">
    <div class="tabControl-item" v-for="(item,index) in titles" :key="index"
    :class="conditionIndex===index?'active':''"
    @click="changeCondition(index)"
    >

        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default() {
            return []
        }
    }
    },
  data() {
    return {
        conditionIndex:0
    }
    },
  methods: {
      changeCondition(index) {
          this.conditionIndex = index
          this.$emit('tabClick',index)
    }
  },
}
</script>

<style scoped>
.tabControl{
    display: flex;
    line-height: 1.0667rem;
    height: 1.0667rem;
    font-size: .46rem;
}

.tabControl-item{
    flex: 1;
    text-align: center;
}

.tabControl-item span{
    padding: .1333rem;
}

.active{
    color: var(--color-high-text);
}

.active span{
    border-bottom:.08rem solid var(--color-tint) ;
}
</style>