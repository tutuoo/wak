const FMex = require('./FMex')
const userConfig = require('./config')

const $CONFIG = {
  perAmount: userConfig.shishang.perAmount, // 每个订单多少张，最多只能挂50个订单，自己算多少合适。
}

const fm = new FMex({
  key: userConfig.key, // 输入您的key
  secret: userConfig.secret, // 输入您的secret
  BASEURL: userConfig.BASEURL // 请求的baseUrl, 目前是模拟盘，正式还未规定。
})

// 主要程序
async function main()
{
  let ticker = await fm.getTicker('BTCUSD_P').then(res => res.ticker)//定义订单
  let lastPrice = ticker[0] // 最新价
  let buyPrice = ticker[2] // 最佳买一价格
  let sellPrice = ticker[4] // 最佳卖一价格
  if (lastPrice == buyPrice) {
    sellPrice = (buyPrice + 0.5).toFixed(1)
  }
  if (lastPrice == sellPrice) {
    buyPrice = (sellPrice - 0.5).toFixed(1)
  }
  fm.createOrder({//创建订单
    symbol: "BTCUSD_P",
    type: "LIMIT",
    direction: "LONG",//多单
    post_only: true,//现价委托
    price: buyPrice-0.5,//lastPrice = buyPrice:减少多单需要-0.5的倍数,duozhuankong
    quantity: $CONFIG.perAmount,
  })
  fm.createOrder({
    symbol: "BTCUSD_P",
    type: "LIMIT",
    direction: "SHORT",
    post_only: true,
    price: sellPrice+1,//增加多单持仓/同时减少空单持仓需要+0.5的倍数(kongzhuanduo)
    quantity: $CONFIG.perAmount,
  })
}
main()