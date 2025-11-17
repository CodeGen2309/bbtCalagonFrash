export default {
  pathList: {
    getSections: "/test/ajax/get-sections.php",
    getSectionItems: "/test/ajax/get-section-items.php",
    getItem: "/test/ajax/get-item.php",
  },

  getReqest: async function (url) {
    return await fetch(url)
  },

  postRequest: async function (url, body) {
    let opts = {
      method  : 'POST', 
      headers : { "Content-type": "application/json" },
      body    : JSON.stringify(body),
    }

    return await fetch(url, opts)
  },

  getSections: async function () {
    return await this.getReqest(this.pathList.getSections)
  },

  getSectionItems: async function (sectoinId) {
    let link = this.pathList.getSectionItems + `?section_id=${sectoinId}`
    return await this.getReqest(link)
  },

  getProduct: async function (pid) {
    let link = this.pathList.getItem + `?id=${pid}`
    return await this.getReqest(link)
  },
}