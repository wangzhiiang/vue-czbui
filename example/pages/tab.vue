
<template>
  <div class="tab-page page">
    <!-- 导航条 -->
    <Toolbar>
      <span slot="title">tab切换</span>
      <a href slot="right"></a>
    </Toolbar>

    <Tab
      :tabList="tabList"
      @checkTab="checkTab"
      :activeTabIndex="activeTabIndex"
      :activeColor="activeColor"
    ></Tab>

    <div class="content">{{content}}</div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  components: {

  },
  data () {
    return {
      // 高亮颜色
      activeColor: '#1aad19',
      // tab 列表
      tabList: [
        {
          id: 1,
          label: '选项一'
        },
        {
          id: 2,
          label: '选项二'
        },
        {
          id: 3,
          label: '选项三'
        }
      ],
      // 选中tab index
      activeTabIndex: 0,
      // 选中tab
      activeTab: {
        id: 1,
        label: '选项一'
      },
      // 内容
      content: '我是选项一对应的内容'
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    /**
     * tab切换
     */
    checkTab (opts) {
      this.activeTabIndex = opts.index
      this.activeTab = opts.item
      this.$loading.show()
      this.getData()
    },
    /**
     * 获取数据
     */
    async getData () {
      await this.$http.get('/api', { params: {
        id: this.activeTab.id
      } })
      // 隐藏加载中
      this.$store.commit('toggleLoaingStatus', false)

      if (this.activeTab.id === 1) {
        this.content = '我是选项一对应的内容'
      } else if (this.activeTab.id === 2) {
        this.content = '我是选项二对应的内容'
      } else if (this.activeTab.id === 3) {
        this.content = '我是选项三对应的内容'
      }
      this.$loading.hide()
    }
  }
}

</script>

<style scoped>
.content {
  background: #fff;
  margin-top: 10px;
  height: calc(100vh - 106px);
  padding: 15px;
}
</style>
