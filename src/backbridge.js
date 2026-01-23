export default {
  apiUrl: "https://belbeton.ru",
  // apiUrl: ".",

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
    let link = `${this.apiUrl}/test/ajax/get-sections.php`
    return await this.getReqest(link)
  },

  async getSectionItems (sectoinId) {
    let link = `${this.apiUrl}/test/ajax/get-section-items.php?section_id=${sectoinId}`
    return await this.getReqest(link)
  },

  async getProduct (pid) {
    let link = `${this.apiUrl}/test/ajax/get-item.php?id=${pid}`
    return await this.getReqest(link)
  },
}