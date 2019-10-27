module.exports = {//指标
  key: '7098fcd9413e47c99a96256d7b58c7', // 输入您的key
  secret: '82e729b63063469089e16078ddc618', // 输入您的secret
  BASEURL: "https://api.fmex.com", // 请求的baseUrl地址。测试网需要修改为https://api.testnet.fmex.com
  guadan: { // 挂单程序的配置写在这里：
    minPercent: 0.06, // 挂单挖矿的下限，离最新价的百分比，如果是 1% 则填写 1，千万不要填写0.01
    maxPercent: 0.06, // 挂单挖矿的上限，离最新价的百分比，如果是 1% 则填写 1，千万不要填写0.01
    perAmount: 10, // 每个订单多少张，最多只能挂50个订单，自己算多少合适。
  }, 
  
  shishang: { // 市商/排序程序的配置写在这里
    perAmount: 5// 市商/排序单个订单大小
   
  }
}