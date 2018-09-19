<template>
  <el-row>

    <div class="grid-content bg-purple-light">
      <el-col :span="24">
        <el-input size="small" placeholder="Name" style="width:180px;margin-left: 10px"></el-input>
        <el-input size="small" placeholder="Name" style="width:180px;margin-left: 10px"></el-input>
        <el-button size="small" type="primary" plain>Search</el-button>
      </el-col>

    </div>
    <el-table
      :data="tableData"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      :header-cell-style="'background:#e5e9f2'"
      style="width: 100%">
      <el-table-column
        fixed="left"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button @click="RowDetail(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="EditRow(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        v-if="true">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

  </el-row>

</template>

<script>

export default {
  name: 'Index.vue',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    EditRow (row) {
      this.$router.push({path: '/EDI/Edit'})
      // this.$route.redirectedFrom('Home')
    },
    RowDetail (row) {
      console.log(row)
      console.log(row.name)
    }
  }

}
</script>

<style scoped>

</style>
