const mockjs = require('mockjs')

module.exports = [
  {
    method: 'post',
    url: '/api/users',
    response: (res) => {
      console.log(res.query, '-----', res.body, '---')
      // 请求体
      return {
        code: 0,
        msg: 'ok',
        // [{ id: 1, age: 22, name: 'alice' },{ id: 2, age: 43, name: 'dlwaa' } ]
        data: mockjs.mock({
          'data|10': [
            {
              'id|+1': 1, // id自增
              name: '@cname', // 生成不同的中文名
              ename: '@name', // mockjs.Random.name(), // 生成不同的英文名
              time: '@time', // 生成随机时间
              date: '@date', // 生成随机日期
              avatar: mockjs.Random.image('250x250', '#00405d', '#FFF', '@name') // 生成随机图
            }
          ]
        }).data
      }
    }
  }
]
