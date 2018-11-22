<template>

  <el-row>
    <el-col :span='6'>
      <el-button @click="GetPut()" :loading="btnLoading">Put</el-button>
      <el-button @click="GetPost()" :loading="btnLoading">Post</el-button>
      <el-input v-model="valueForApi"></el-input>
      <el-button @click="GetVuex()">Vuex Test</el-button>
      <el-button @click="GetToken()">GetToken</el-button>
      <el-button @click="GetTable()">GetTable</el-button>
    </el-col>

  </el-row>


</template>

<script>


  import ajax from '../../api/ajax'

  import qs from 'qs'

  export default {
    name: 'edit',
    data () {
      return {
        valueForApi: '',
        btnLoading: false
      }
    },
    methods: {
      GetVuex () {
        this.valueForApi = this.$store.state.token

      },
      GetPost () {

        let params = {
          id: 1,
          value: this.valueForApi
        }

        // this.$http.interceptors.request.use(config=>{
        //
        // })

        this.$http
          .post('/api/values', params)
          .then(r => {
            this.valueForApi = r.data
            this.btnLoading = false
            this.$message({
              showClose: true,
              message: 'This is a message that can be deleted',
              type: 'success'
            })
          })
          .catch(e => {
            console.log(e)
          }).finally(() => {

        })

      },
      GetPut () {
        this.btnLoading = true
        // this.$http
        //   .get('/api/values/5')
        //   .then(r => {
        //     this.valueForApi = r.data
        //   })
        //   .catch(e => {
        //     console.log(e)
        //   })
        let params = {
          id: 1,
          value: this.valueForApi
        }

        // this.$http.interceptors.request.use(config=>{
        //
        // })


        this.$http
          .put('/api/values/5', params)
          .then(r => {
            this.valueForApi = r.data
            this.btnLoading = false
            this.$message({
              showClose: true,
              message: 'This is a message that can be deleted',
              type: 'success'
            })
          })
          .catch(e => {
            console.log(e)
          }).finally(() => {

        })

      },
      GetToken () {
        let params = {
          Username: 'AngelaDaddy',
          Password: '123456'
        }
        let $this = this
        this.$http
          .post('/api/values/Token', params)
          .then(r => {
            $this.$store.commit('setToken', r.data.token)
            this.$message({
              showClose: true,
              message: 'This is a message that can be deleted',
              type: 'success'
            })
          })
          .catch(e => {
            console.log(e)
          }).finally(() => {

        })
      },
      GetTable(){

        this.$http
          .get('/api/table/5')
          .then(r => {
            debugger
            this.valueForApi = r.data
            this.btnLoading = false

          })
          .catch(e => {
            console.log(e)
          }).finally(() => {

        })
      }
    }
  }
</script>

<style scoped>

</style>
