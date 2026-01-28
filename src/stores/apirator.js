import { reactive } from 'vue'

export default reactive({
  devmode : false,
  apiUrl  : "https://belbeton.ru",

  async getReqest (url) {
    return await fetch(url)
  },

  async postRequest (url, body) {
    let opts = {
      method  : 'POST', 
      headers : { "Content-type": "application/json" },
      body    : JSON.stringify(body),
    }

    return await fetch(url, opts)
  },

  async getSections () {
    if (this.devmode) {
      return await fetch("/mocks/sectionList.json")
    }

    let link = `${this.apiUrl}/test/ajax/get-sections.php`
    return await this.getReqest(link)
  },

  async getSectionItems (sectoinId) {
    if (this.devmode) {
      return await fetch("/mocks/sectionData.json")
    }

    let link = `${this.apiUrl}/test/ajax/get-section-items.php?section_id=${sectoinId}`
    return await this.getReqest(link)
  },

  async getProduct (pid) {
    if (this.devmode) {
      return await fetch("/mocks/mockItem.json")
    }

    let link = `${this.apiUrl}/test/ajax/get-item.php?id=${pid}`
    return await this.getReqest(link)
  },
})