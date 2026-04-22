export default {
  devmode : process.env.NODE_ENV == 'development',
  apiUrl  : "/test/ajax",


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

    return await fetch(`${this.apiUrl}/get-sections.php`)
  },


  async getSectionItems (sectoinId) {
    if (this.devmode) {
      return await fetch("/mocks/sectionData.json")
    }

    let link = `${this.apiUrl}/get-section-items.php?section_id=${sectoinId}`
    return await fetch(link)
  },


  async getProduct (pid) {
    if (this.devmode) {
      return await fetch("/mocks/mockItem.json")
    }

    return await fetch(`${this.apiUrl}/get-item.php?id=${pid}`)
  },


  async getFilter (pid) {
    if (this.devmode) {
      return await fetch("/mocks/mockFilter.json")
    }
    
    return await fetch(`${this.apiUrl}/get-filter.php?id=${pid}`)
  },


  async addToBasket (pid, quantity) {
    if (this.devmode) { return true }

    const link = `${this.apiUrl}/add-to-basket.php?offerId=${pid}&quantity=${quantity}`
    return await fetch(link)
  }
}