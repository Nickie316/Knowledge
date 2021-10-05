import Vue from 'vue'

export const baseApiUrl = 'http://localhost:3000'

export function showError(e) {
   if(e && e.response && e.response.data) {
      Vue.tosted.global.defaultError({ msg : e.response.data })
   } else if(typeof e === 'string') {
      Vue.tosted.global.defaultError()
   }
}

export default { baseApiUrl, showError }