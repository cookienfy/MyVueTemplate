<template>
  <el-container>
    <div class="sidebar-container">
      <navbar></navbar>
    </div>
    <div class="logo-container">
      <span>CMA CGM - Ticketing</span>
    </div>
    <el-container>
      <Header></Header>
      <main-container></main-container>
      <el-footer height="30">
        footer
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>

  import Navbar from '@/views/layout/Navbar'
  import Header from '@/views/layout/Header'
  import MainContainer from '@/views/layout/MainContainer'

  export default {
    data () {
      return {
        name: 'Layout'
      }
    },
    components: {
      Header,
      MainContainer,
      Header,
      Navbar
    }
  }
</script>

<style lang="scss" scoped>

  .logo-container {
    width: 220px !important;
    top: 0;
    left: 0;
    position: fixed;
    min-height: 60px;
    font-size: 20px;
    color: #FFFFFF;
    background-color: #46adff;
    box-sizing: content-box;
    -webkit-box-sizing: border-box;
    border-right: 1px solid #46adff;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }

  /*.el-aside {*/

  /*background-color: #304156;*/
  /*position: fixed;*/
  /*overflow-x: hidden;*/
  /*!*overflow-y: scroll;*!*/
  /*!*border-right: 1px solid #e4e5e7;*!*/
  /*height: 100%;*/
  /*min-height: 100%;*/

  /*}*/

  .sidebar-container {
    transition: width 0.28s;
    width: 220px !important;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 60px;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    //reset element-ui css
    .horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }
    .scrollbar-wrapper {
      height: calc(100% + 15px);
      .el-scrollbar__view {
        height: 100%;
      }
    }
    .is-horizontal {
      display: none;
    }

    .svg-icon {
      margin-right: 16px;
    }
    .el-menu {
      border: none;
      height: 100%;
      width: 100% !important;
    }
  }

  /*.el-footer {*/
  /*!*position: fixed;*!*/
  /*bottom: 0;*/
  /*right: 0;*/
  /*line-height: 200px;*/
  /*left: 220px;*/
  /*background: #304156;*/

  /*}*/

  .el-main {
    border: none;
    background: #ffebd6;
    /*border-left: 1px solid #e4e5e7;*/
    margin-left: 220px;
    height: 100%;
    position: relative;
  }

</style>
