class Table extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    static get observedAttributes () {}
  
    connectedCallback () {
        this.logData()
        this.render()
    }
  
    logData(){
        this.data = [
            {
                category: "fruta",
                name: "judias",
                price: 10
            },
            {
                category: "fruta",
                name: "manzana",
                price: 15
            },
            {
                category: "fruta",
                name: "pera",
                price: 5
            }
        ]
    }

    render () {
      this.shadow.innerHTML =
        /*html*/`
        <style>
        .table{
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .table-header{ 
            align-items: center;
            background-color: hsl(0, 0%, 100%);
            display: flex;
            justify-content: space-between;
            padding: 0.2rem 0.5rem;
            width: 100%;
        }
        
        .table-register-header-buttons{
            display: flex;
        }

        .table-header-buttons svg{
            fill: hsl(240, 50%, 40%);
            width: 1.5rem;
        }

        .table-header-buttons > div{
            cursor: pointer;
        }

        .table-header-buttons > div:hover svg{
            fill: hsl(271, 100%, 66%);
        }

        .table-register-header-buttons > div:hover{
            cursor: pointer;
        }

        .table-register-header-buttons svg{
            fill: hsl(240, 50%, 40%);
            width: 1.5rem;
        }


        .table-body{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin: 1rem 0;
            min-height: 70vh;
        }

        .table-register-header{
            align-items: center;
            background-color: hsl(0, 0%, 100%);
            display: flex;
            justify-content: flex-end;
            padding: 0.2rem;
        }

        .table-register-header-buttons{
            display: flex;
            gap: 0.5rem;
        }

        .edit-button svg{
            cursor: pointer;
            fill: hsl(240, 50%, 40%);
            width: 1.5rem
        }

        .edit-button svg{
            cursor: pointer;
            fill: hsl(240, 50%, 40%);
            width: 1.5rem
        }

        .edit-button:hover svg, .edit-button:hover svg{
            fill: hsl(271, 100%, 66%);
        }

        .table-register-body{
            background-color: hsl(0, 0%, 3%);
            padding: 0.5rem;
        }

        .table-register-body ul{
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .table-register-body ul li span::after {
            padding-right: .25rem;
            content: ":";
        }

        .table-footer{
            display: flex;
            gap: 1rem;
        }

        .table-footer-info span{
            font-family: Roboto, "Helvetica Neue", Arial;
        }

        .table-footer-pagination{
            display: flex;
            font-family: Roboto, "Helvetica Neue", Arial;
            gap: 0.5rem;
        }

        .table-footer-pagination-button{
            cursor: pointer;
        }
        </style>
        <section class="table">
              <div class="table-header">
                  <div class="table-header-buttons">
                      <div class="filter-button">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter</title><path d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" /></svg>
                      </div>
                  </div>
              </div>
              <div class="table-body"></div>
              <div class="table-footer">
                  <div class="table-footer-info">
                      <span>2 registros en total, mostrando 10 por página</span>
                  </div>
                  <div class="table-footer-pagination">
                      <div class="table-footer-pagination-button"><<</div>
                      <div class="table-footer-pagination-button"><</div>
                      <div class="table-footer-pagination-currentpage">
                          <span>1</span>
                      </div>
                      <div class="table-footer-pagination-button">></div>
                      <div class="table-footer-pagination-button">>></div>
                  </div>
              </div>
        </section>
`

        const tableBody = this.shadow.querySelector('.table-body')

        this.data.forEach(register => {

            const tableRegister = document.createElement('div')
            tableRegister.classList.add('table-register')
            tableBody.appendChild(tableRegister)

            const tableRegisterHeader = document.createElement('div')
            tableRegisterHeader.classList.add('table-register-header')
            tableRegister.appendChild(tableRegisterHeader)

            const tableRegisterHeaderButtons = document.createElement('div')
            tableRegisterHeaderButtons.classList.add('table-register-header-buttons')
            tableRegisterHeader.appendChild(tableRegisterHeaderButtons)

            const editButton = document.createElement('div')
            editButton.classList.add('edit-button')
            tableRegisterHeaderButtons.appendChild(editButton)
            editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>'

            const deleteButton = document.createElement('div')
            deleteButton.classList.add('delete-button')
            tableRegisterHeaderButtons.appendChild(deleteButton)
            deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>edit</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'
        
            const tableRegisterBody = document.createElement('div')
            tableRegisterBody.classList.add('table-register-body')
            tableRegister.appendChild(tableRegisterBody)

            const tableRegisterBodyList = document.createElement('ul')
            tableRegisterBody.appendChild(tableRegisterBodyList)

            const categoryLi = document.createElement('li')
            tableRegisterBodyList.appendChild(categoryLi)
            categoryLi.textContent = `Nombre: ${category}`

            const nameyLi = document.createElement('li')
            tableRegisterBodyList.appendChild(nameyLi)
            nameyLi.textContent = `Nombre: ${name}`

            const priceLi = document.createElement('li')
            tableRegisterBodyList.appendChild(priceLi)
            priceLi.textContent = `Precio: ${price}`
        }
        )
    
    }
}
        
customElements.define('table-component', Table)