<template>
  <el-submenu v-if="node.nodes && node.nodes.length" :index="node.id">
    <template slot="title"><i :class="node.icon"></i>
      {{node.text}}
    </template>

    <NavbarSubItem v-for="sNode in node.nodes" :key="sNode.id" :node="sNode"></NavbarSubItem>
  </el-submenu>
  <div v-else-if="node.state.disabled===true">
    <router-link :to="node.href">
      <el-menu-item :index="node.id">
        {{node.text}}
      </el-menu-item>
    </router-link>
  </div>

</template>

<script>

  import NavbarSubItem from '@/views/layout/NavbarSubItem'

  export default {
    name: 'NavbarSubItem',
    props: ['node'],
    components: {
      NavbarSubItem: NavbarSubItem
    }
  }
</script>

<style scoped>
  a {
    display: inline-block;
    text-decoration: none;
    width: 100%;
    overflow: hidden;
  }

  i {
    margin-right: 5px;
  }
</style>
