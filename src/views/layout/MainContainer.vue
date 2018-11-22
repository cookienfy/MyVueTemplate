<template>
  <div class="main-container">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="item in $route.meta.routeList" :to="item.path" :key="item.name">
            {{item.title}}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <transition name="fade"
                mode="out-in">
      <keep-alive>
        <router-view>

        </router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        realList: []
      }
    },
    mounted () {
      this.realList = this.$route.meta.routeList
    },
    methods: {
      getRoutePath () {
        this.realList = this.$route.meta.routeList
      }
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.realList = to.meta.routeList
      })
    }
  }
</script>

<style lang="scss" scoped>
  .main-container {
    top: 60px;
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: 230px;
    position: relative;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */
  {
    opacity: 0;
  }
</style>
