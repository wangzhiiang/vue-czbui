<template>
  <div class="feed-back-page page">
    <!-- 导航条 -->
    <Toolbar>
      <span slot="title">操作反馈</span>
      <a href slot="right"></a>
    </Toolbar>

    <div class="button-sp-area">
      <button type="button" class="weui-btn weui-btn_default" @click="showLoading">显示Loading</button>

      <button
        type="button"
        class="weui-btn weui-btn_primary"
        @click="showToastSuccess"
      >显示Toast(success)</button>
      <button type="button" class="weui-btn weui-btn_warn" @click="showToastWarn">显示Toast(error)</button>
    </div>

    <div class="button-sp-area">
      <button type="button" class="weui-btn weui-btn_default" @click="showAlert">alert</button>
      <button type="button" class="weui-btn weui-btn_default" @click="showConfim">confim</button>
    </div>
    <div class="button-sp-area">
      <button type="button" class="weui-btn weui-btn_default" @click="showActionSheet">ActionSheet</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'feedback',
  data () {
    return {
    }
  },
  mounted () {
    setTimeout(() => {
      // 隐藏加载中
      this.$store.commit('toggleLoaingStatus', false)
    }, 500)
  },
  methods: {
    /**
     * 显示加载中
     */
    showLoading () {
      this.$loading.show({
        type: 'loading',
        msg: '加载中'
      })
      setTimeout(() => {
        // 隐藏加载中
        this.$loading.hide()
      }, 2000)
    },
    /**
     * 显示成功提示
     */
    showToastSuccess () {
      this.$toast({
        type: 'success',
        msg: '成功提示',
        timeout: '1500'
      })
    },
    /**
     * 显示警告提示
     */
    showToastWarn () {
      this.$toast({
        type: 'error',
        msg: '错误提示',
        timeout: '1500'
      })
    },
    /**
     * 显示alert
     */
    showAlert () {
      this.$dialog({
        title: '',
        msg: '操作成功',
        isShowCancel: false,
        confirmSure: function () {
          console.log('点击了确定')
        }
      })
    },
    /**
     * 显示confim
     */
    showConfim () {
      this.$dialog({
        title: '系统提示',
        msg: '提示消息',
        isShowCancel: true,
        confirmSure: function () {
          console.log('点击了确定')
        }
      })
    },
    /**
     * 显示选择框
     */
    showActionSheet () {
      var that = this
      that.$actionsheet({
        title: '请选择支付方式',
        lists: [
          {
            id: 1,
            label: '微信支付',
            icon: './../assets/wx.png'
          },
          {
            id: 2,
            label: '支付宝支付',
            icon: './../assets/zfb.png'
          }
        ],
        sureChecked: function () {
          console.log(this.activeItem)
        }
      })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='less' scoped>
.button-sp-area {
  padding: 15px;
}
</style>
