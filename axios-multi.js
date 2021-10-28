
const apis = [
  {
    requestUrl: 'https://test.api.jd.co.th/a',
    param: {}
  },
  {
    requestUrl: 'https://test.api.jd.co.th/b',
    param: {}
  },
  {
    requestUrl: 'https://test.api.jd.co.th/b',
    param: {}
  }
]
async function syncCallback(apis) {
  let promises = apis.map(
    api => axios.get(api.requestUrl, {
      params: api.param
    })
  )

  let results = await Promise.all(promises)
  console.log('results>>>', results)
}

// test
// syncCallback(apis)