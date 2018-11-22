<template>
  <div class="main-container">
    <el-row>
      <el-col :span="24">
        <!--<el-button-->
        <!--size="small"-->
        <!--@click="addTab(editableTabsValue2)"-->
        <!--&gt;-->
        <!--add tab-->
        <!--</el-button>-->
        <el-tabs v-model="editableTabsValue2" closable @tab-remove="removeTab">
          <el-tab-pane
            v-for="(item, index) in editableTabs2"
            :key="item.name"
            :label="item.title"
            :name="item.name">

            <transition name="fade"
                        mode="out-in">
              <keep-alive :include="cacheViews">
                <router-view :key="key">

                </router-view>
              </keep-alive>
            </transition>

          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        editableTabsValue2: '2',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    computed: {
      cacheViews () {
        return this.$store.state.tagsView.cachedViews
      },
      key () {
        return this.$route.fullPath
      }
    },
    methods: {
      addTab (targetName) {
        let newTabName = ++this.tabIndex + ''
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        })
        this.editableTabsValue2 = newTabName
      },
      removeTab (targetName) {
        let tabs = this.editableTabs2
        let activeName = this.editableTabsValue2
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }

        this.editableTabsValue2 = activeName
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
      }
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
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */
  {
    opacity: 0;
  }
</style>
