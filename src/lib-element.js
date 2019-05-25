import { LitElement, html } from 'lit-element';
import '@polymer/paper-button';
import '@polymer/paper-input/paper-input.js';
import 'jquery';
 
window.jQuery = $;
window.$ = $;

class LibElement extends LitElement {
    static get properties() {
        return {
            input: { type: String }
        };
    }
    constructor() {
        super();
        this.input = '';
    }

    render() {
        return html`
        <style>
            paper-button {
                min-width: 224px;
                max-width: 224px;
                margin: 50px auto;
                border: 1px solid black;   
                background-color: dodgerblue;                 
            }

            paper-button:hover {
                background-color: transparent;
            }

            paper-input {
                width: 90%;
                margin: 50px auto 0px auto;
            }

            paper-input, paper-textarea { 
                --paper-input-container-focus-color: navy;
                --paper-input-container-color: dodgerblue;
            }

            .sentence{
                color: dodgerblue;
                font-size: 1.2em; 
                text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;             
            }

            .popEffect span{
                transform-origin: left top;
                animation-name: pop-in;
                animation-duration: .3s;
                animation-iteration-count: 1;
                animation-timing-function: ease;
                animation-fill-mode: forwards;
                color: dodgerblue;
                opacity: 0;
                overflow: hidden;
                text-align: center;
            }

            @keyframes pop-in {
                0% { opacity: 0; transform: scale(0.7); }
                100% { opacity: 1; transform: scale(1); }
            }
            

        </style>
        
        <h2 class="sentence">LitElement is....<br>
            <div class="popEffect"></div>
        </h2>
        <paper-input label="Enter adjective" id="inputField"></paper-input>
        <br>
        <paper-button @click="${() => this.input = this.change()}">Click</paper-button>
    `;
    }

    shouldUpdate(changedProperties) {
        return changedProperties.has('input');
    }

    change() {
        const userInput = this.shadowRoot.querySelector('#inputField');
        const spanList = this.shadowRoot.querySelector('.popEffect');
        this.input = $(userInput).val();
        $(spanList).html('');
        $(spanList).append(`<span>${this.input}</span>`);
        $(userInput).val('');
        $(userInput).focus();
        return this.input;
    }

   
}
customElements.define('poly-lib-element', LibElement);
