<template>
  <el-menu :default-openeds="opens"
           class="el-menu-vertical-demo"
           default-active="2"
           mode="vertical"
           background-color="#304156"
           text-color="#bfcbd9"
           active-text-color="#409EFF"
           unique-opened
           v-show="!collapsed">
    <template v-for="n in models.data">
      <NavbarSubItem v-if="n.nodes && n.nodes.length" :node="n"></NavbarSubItem>
      <el-menu-item v-else :index="n.id" :route="n.href">{{n.text}}</el-menu-item>
    </template>
  </el-menu>
</template>

<script>

  import NavbarSubItem from '@/views/layout/NavbarSubItem'

  export default {
    name: 'Navbar',
    components: {
      NavbarSubItem: NavbarSubItem
    },
    data () {
      return {
        models: {
          data: [{
            'href': '#',
            'icon': 'fa fa-windows',
            'id': 1,
            'isOpen': false,
            'text': 'Dashboard',
            'nodes': [{
              'href': '/EDI',
              'icon': 'fa fa-envelope',
              'id': 2,
              'isOpen': false,
              'nodes': null,
              'state': {'Checked': false, 'disabled': true, 'expanded': true, 'selected': false},
              'text': 'EDI'
            }, {
              'href': '/Home',
              'icon': 'fa fa-paper-plane',
              'id': 4,
              'isOpen': false,
              'nodes': null,
              'state': {'Checked': false, 'disabled': true, 'expanded': true, 'selected': false},
              'text': 'Home'
            }, {
              'href': '/Tables',
              'icon': 'fa fa-paper-plane',
              'id': 9,
              'isOpen': false,
              'nodes': null,
              'state': {'Checked': false, 'disabled': true, 'expanded': true, 'selected': false},
              'text': 'Tables'
            }]
          }, {
            'href': '#',
            'icon': 'fa fa-address-card',
            'id': 5,
            'isOpen': false,
            'nodes': [{
              'href': '/Ticketing/TicketingEdit',
              'icon': null,
              'id': 6,
              'isOpen': true,
              'nodes': null,
              'state': {'Checked': false, 'disabled': true, 'expanded': true, 'selected': false},
              'text': 'MCN'
            }],
            'state': {'Checked': false, 'disabled': true, 'expanded': true, 'selected': false},
            'text': 'Shipping'
          }, {
            'href': '#',
            'icon': 'fa fa-windows',
            'id': 7,
            'isOpen': false,
            'nodes': [{
              'href': '/Ticketing/TicketingEdit',
              'icon': null,
              'id': 8,
              'isOpen': true,
              'nodes': null,
              'state': {'Checked': false, 'disabled': true, 'expanded': true, 'selected': false},
              'text': 'MCN'
            }],
            'state': {'Checked': false, 'disabled': true, 'expanded': true, 'selected': false},
            'text': 'Setting'
          }],
          opens: [1]
        }
      }
    }
  }

</script>

<style scoped>

</style>
