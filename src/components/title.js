class Title extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    static get observedAttributes () {}
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
        /*html*/`
        <style>

        .title h1{
            font-family: Roboto, "Helvetica Neue", Arial;
            margin: 0;
        }

        </style>
        <section class="title">
            <h1>Pedidos</h1>
        </section>
        `
    }
  }
  
  customElements.define('title-component', Title)