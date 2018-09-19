<template>
  <el-header>
    <div class="header-dropdown">
      <el-dropdown>
              <span class="el-dropdown-link" style="color: white">
                <i class="el-icon-location">&nbsp;</i>Edwin Nie<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
        <el-dropdown-menu slot="dropdown">
          <router-link style="text-decoration: none" to="/Home">
            <el-dropdown-item>Home</el-dropdown-item>
          </router-link>
          <el-dropdown-item>My Profile</el-dropdown-item>
          <el-dropdown-item>Setting</el-dropdown-item>
          <el-dropdown-item command="e" divided>Exit</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>

  .el-header {
    background: #46adff;
    top: 0;
    bottom: 0;
    position: fixed;
    z-index: 100;
    /*overflow-y:scroll;*/
    /*overflow-x:hidden;*/
    left: 220px;
    width: 100%;
    .header-dropdown {
      height: 60px;
      /*display: inline-block;*/
      position: fixed;
      right: 30px;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      a {
        text-decoration: none;
      }
    }
    .tools {
      border-style: solid;
      border-right-color: #a9a9a9;
      border-left-color: #a9a9a9;
      border-right-width: 1px;
      border-left-width: 1px;
      width: 14px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }

  }
</style>
