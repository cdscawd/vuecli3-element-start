
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.interceptors.response.use(
  res => {
    if (res.status == 200) {
      return res.data
    }
  },
  error => {
    console.log('err' + error)
  }
)
// export default axios

export default window.axios = axios


