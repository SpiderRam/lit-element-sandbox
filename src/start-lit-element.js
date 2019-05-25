import { LitElement, html } from 'lit-element';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/paper-slider/paper-slider.js';
import '@polymer/paper-spinner/paper-spinner.js';
import './paper-slider.js';
import './paper-tabs.js';
import './lib-element';

export class StartLitElement extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      pie: { type: Boolean }
    };
  }

  constructor() {
    super();

    this.loadComplete = false;
    this.message = 'Hello World from LitElement';
    this.pie = false;
  }

  render() {
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }

        

        .item1 { 
          grid-area: header; 
          background-color: white;
        }
        .item2 { 
          grid-area: menu; 
          background-color: white;
        }
        .item3 { 
          grid-area: main;
          background-color: white;
        }
        .item4 { 
          grid-area: right; 
          background-color: white;
          min-height: 250px;
        }
        .item5 { 
          grid-area: slider; 
          background-color: white;
        }
        .item6 { 
          grid-area: footer; 
          background-color: skyblue;
          min-height: 600px;
        }

        .grid-container {
          display: grid;
          grid-template-areas:
            'header header header header header header'
            'menu main main main right right'
            'menu slider slider slider footer footer';
          grid-gap: 1px;
          background-color: #2196F3;
          padding: 10px;
        }

        .grid-container > div {
          text-align: center;
          padding: 20px 0;
          font-size: 30px;
        }

        h1 {
          margin-bottom: 10px;
          color: blue;
        }

        h6 {
          margin-top: 0;
        }

        #flexContainer {
          display: flex;
          justify-content: space-evenly;
        }

        .list {
          display: block;
          color: blue;
          font-size: 1em; 
        }

        #second {
          border-left: 1px solid blue;
          border-right: 1px solid blue;
          padding: 0px 10%;
        }

        ul {
          list-style: none;
          color: black;
          text-shadow: none;
          text-align: left;
        }


      <custom-style>
        <style is="custom-style">
          paper-spinner.multi {
            --paper-spinner-layer-1-color: var(--google-yellow-500);
            --paper-spinner-layer-2-color: var(--google-green-500);
            --paper-spinner-layer-3-color: var(--google-yellow-500);
            --paper-spinner-layer-4-color: var(--google-blue-500);
          }
        </style>
      </custom-style>

      <div class="grid-container">
        <div class="item1">
          <h1>${this.message}</h1>
          <h6>*Function over form, don't judge.</h6>
          <div id="flexContainer">

            <div id="first" class="list">
              LitElement Features:
              <ul>
                <li>shouldUpdate</li>
                <li>update</li>
                <li>render</li>
                <li>firstUpdated</li>
                <li>template literals</li>
              </ul>
            </div>

            <div id="second" class="list">
              paper-elements:
              <ul>
                <li>paper-button</li>
                <li>paper-input</li>
                <li>paper-slider</li>
                <li>paper-spinner</li>
                <li>paper-tabs</li>
              </ul>
            </div>

            <div id="third" class="list">Extras
              <ul>
                <li>jQuery</li>
                <li>CSS Grid</li>
                <li>Flexbox</li>
                <li>CSS Animations</li>
                <li><a href="https://www.iconfinder.com/iconsets/letters-and-numbers-1">Iconfinder</a></li>
              </ul>
            </div>

          </div>          
        </div>
        <div class="item2">
          <poly-lib-element></poly-lib-element>
        </div>
        <div class="item3">
          <h4>Paper Spinner:</h4>
          <paper-spinner active class="multi"></paper-spinner>
        </div>  
        <div class="item4">
          <h4>This is straight from the LitElement starter project, a conditional render:</h4>
          <div id="flexWrapper">
            <input name="myinput" id="myinput" type="checkbox" ?checked="${this.pie}" @change="${this.togglePie}">
            <label for="myinput">I like pie.</label>          
            ${this.pie ? html`<lazy-element></lazy-element>` : html``}
          </div>
        </div>
        <div class="item5">
          <poly-paper-slider></poly-paper-slider>
        </div>
        <div class="item6">
          <poly-paper-tabs></poly-paper-tabs>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this.loadLazy();

    const myInput = this.shadowRoot.getElementById('myinput');
    myInput.focus();
  }

  togglePie(e) {
    this.pie = !this.pie;
    this.loadLazy();
  }

  
  async loadLazy() {
    console.log('loadLazy');
    if(this.pie && !this.loadComplete) {
      return import('./lazy-element.js').then((LazyElement) => {
        this.loadComplete = true;
        console.log("LazyElement loaded");
      }).catch((reason) => {
        this.loadComplete = false;
        console.log("LazyElement failed to load", reason);
      });
    }
  }
}

// Register the element with the browser
customElements.define('start-lit-element', StartLitElement);
