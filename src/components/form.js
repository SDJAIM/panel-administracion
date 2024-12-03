class Form extends HTMLElement {
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
        .form{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .form-header{
            align-items: center;
            background-color: hsl(0, 0%, 100%);
            display: flex;
            justify-content: space-between;
            height: 2rem;
        }

        .form-header-tabs ul{
            display: flex;
            height: 2rem;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .form-header-tabs ul li{
            align-items: center;
            background-color: hsl(240, 50%, 40%);
            display: flex;
            font-family: Roboto, "Helvetica Neue", Arial;
            height: 100%;
            padding: 0 0.5rem;
        }

        .form-header-tabs ul li:hover{
            cursor: pointer;
        }

        .form-header-tabs ul li.active{
            background-color:hsl(271, 100%, 66%);
        }

        .form-header-buttons{
            align-items: center;
            display: flex;
            gap: 0.5rem;
            padding: 0.2rem;
        }

        .form-header-buttons > div:hover {
            cursor: pointer;
        }

        .form-header-buttons svg{
            fill: hsl(240, 50%, 40%);
            width: 1.8rem;
        }

        .form-header-buttons > div:hover svg {
            fill: hsl(271, 100%, 66%);
        }


        .form-body form{
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(4, 1fr);
        }

        .form-element{
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
        }

        .form-element-label label{
            font-family: Roboto, "Helvetica Neue", Arial;
            font-size: 0.9rem;
        }

        .form-element-input input{
            font-family: Roboto, "Helvetica Neue", Arial;
            height: 1.5rem;
            outline: none;
            width: 100%;
        }

        .form-element-input select{
            font-family: Roboto, "Helvetica Neue", Arial;
            height: 2rem;
            width: 100%;
        }

        </style>
        <section class="form">
        <div class="form-header">
            <div class="form-header-tabs">
                <ul>
                    <li class="active">General</li>
                    <li>Imagenes</li>
                </ul>
            </div>
            <div class="form-header-buttons">
                <div class="clean-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>
                </div>
                <div class="save-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
                </div>
            </div>
        </div>
        <div class="form-body">
            <form>
                <div class="form-element">
                    <div class="form-element-label">
                        <label for="categoria">Categoría</label>
                    </div>
                    <div class="form-element-input">
                        <select id="categoria">
                            <option value="agua">agua</option>
                        </select>            
                    </div>
                </div>
                <div class="form-element">
                    <div class="form-element-label">
                        <label for="nombre">Nombre</label>
                    </div>
                    <div class="form-element-input">
                        <input type="text" id="nombre">
                    </div>
                </div>
                <div class="form-element">
                    <div class="form-element-label">
                        <label for="referencia">Referencia</label>
                    </div>
                    <div class="form-element-input">
                        <input type="text" id="referencia">
                    </div>
                </div>
                <div class="form-element">
                    <div class="form-element-label">
                        <label for="precio">Precio (€)</label>
                    </div>
                    <div class="form-element-input">
                        <input type="number" id="precio">
                    </div>
                </div>
                <div class="form-element">
                    <div class="form-element-label">
                        <label for="unidades">Unidades</label>
                    </div>
                    <div class="form-element-input">
                        <input type="number" id="unidades">
                    </div>
                </div>
                <div class="form-element">
                    <div class="form-element-label">
                        <label for="unidadMedida">Unidad de Medida</label>
                    </div>
                    <div class="form-element-input">
                        <select id="unidadMedida">
                            <option value="gr">gr</option>
                            <option value="ml">ml</option>
                            <option value="u">ud.</option>
                        </select>
                    </div>
                </div>
                <div class="form-element">
                    <div class="form-element-label">
                        <label for="medida">Medida</label>
                    </div>
                    <div class="form-element-input">
                        <input type="number" id="medida">
                    </div>
                </div>
                <div class="form-element">
                    <div class="form-element-label">
                        <label for="visible">Visible</label>
                    </div>
                    <div class="form-element-input">
                        <select id="visible">
                            <option value="1">Sí</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    </section>
    `
    }
}
        
customElements.define('form-component', Form)