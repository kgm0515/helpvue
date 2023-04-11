const mockjs = require('mockjs')

module.exports = [
  {
    method: 'post',
    url: '/api/users',
    response: (res) => {
      // console.log(res)
      // {
      //   url: '/api/users',
      //   body: { name: '匡光淼', age: 12 },
      //   query: [Object: null prototype] {},
      //   headers: {
      //     host: '127.0.0.1:5173',
      //     connection: 'keep-alive',
      //     'content-length': '29',
      //     'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
      //     'sec-ch-ua-platform': '"Windows"',
      //     'sec-ch-ua-mobile': '?0',
      //     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
      //     'content-type': 'application/json',
      //     accept: '*/*',
      //     origin: 'http://127.0.0.1:5173',
      //     'sec-fetch-site': 'same-origin',
      //     'sec-fetch-mode': 'cors',
      //     'sec-fetch-dest': 'empty',
      //     referer: 'http://127.0.0.1:5173/',
      //     'accept-encoding': 'gzip, deflate, br',
      //     'accept-language': 'zh-CN,zh;q=0.9'
      //   }
      // }
      return {
        code: 0,
        msg: 'ok',
        // [{ id: 1, age: 22, name: 'alice' },{ id: 2, age: 43, name: 'dlwaa' } ]
        data: mockjs.mock({
          'data|4': [
            {
              'id|+1': 1, // id自增
              name: '@cname', // 生成不同的中文名
              ename: '@name', // mockjs.Random.name(), // 生成不同的英文名
              time: '@time', // 生成随机时间
              date: '@date', // 生成随机日期
              avater: mockjs.Random.image('80x80', '#f4f7f9', '#FFF', '@name') // 生成随机图
            }
          ]
        }).data
      }
    }
  },
  {
    method: 'get',
    url: '/api/users',
    response: (res) => {
      // console.log(res)
      // {
      //   url: '/api/users?name=%E5%8C%A1%E5%85%89%E6%B7%BC&age=12',
      //   body: '',
      //   query: [Object: null prototype] { name: '匡光淼', age: '12' },
      //   headers: {
      //     host: '127.0.0.1:5173',
      //     connection: 'keep-alive',
      //     'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
      //     'sec-ch-ua-platform': '"Windows"',
      //     'sec-ch-ua-mobile': '?0',
      //     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
      //     'content-type': 'application/json',
      //     accept: '*/*',
      //     'sec-fetch-site': 'same-origin',
      //     'sec-fetch-mode': 'cors',
      //     'sec-fetch-dest': 'empty',
      //     referer: 'http://127.0.0.1:5173/',
      //     'accept-encoding': 'gzip, deflate, br',
      //     'accept-language': 'zh-CN,zh;q=0.9'
      //   }
      // }
      return {
        code: 0,
        msg: 'ok',
        // [{ id: 1, age: 22, name: 'alice' },{ id: 2, age: 43, name: 'dlwaa' } ]
        data: mockjs.mock({
          'data|4': [
            {
              'id|+1': 1, // id自增
              name: '@cname', // 生成不同的中文名
              ename: '@name', // mockjs.Random.name(), // 生成不同的英文名
              time: '@time', // 生成随机时间
              date: '@date', // 生成随机日期
              avater: mockjs.Random.image('80x80', '#f4f7f9', '#FFF', '@name') // 生成随机图
            }
          ]
        }).data
      }
    }
  }
]
