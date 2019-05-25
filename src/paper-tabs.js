import { LitElement, html } from 'lit-element';
// import '@polymer/iron-pages';
import '@polymer/paper-tabs';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/paper-button';
import '@polymer/iron-pages';
import './slotted-img';
import './shuffled-img';
import 'jquery';
 
window.jQuery = $;
window.$ = $;

export class PolyPaperTabs extends LitElement {

    static get properties() {
        return { 
            slotOneFilled: Boolean,
            slotTwoFilled: Boolean,
            slotThreeFilled: Boolean,
        };
      }

    constructor() {
        super();
        this.slotOneFilled = false;
        this.slotTwoFilled = false;
        this.slotThreeFilled = false;
    }

    render() {
        return html`
        
            <style>
                paper-tab {
                    border: 3px solid lightyellow;
                }

                paper-tabs {
                    background-color: dodgerblue;
                } 

                .row {
                    margin-top: 50px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                }

               .tabOneImg {
                   margin: 5%;
               }

                paper-button {
                    min-width: 224px;
                    max-width: 224px;
                    flex-grow: 1;
                    flex-shrink: 0;
                    flex-basis: 33.3333%;
                    flex-basis: 400px;
                    display: flex;
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid black;   
                    background-color: dodgerblue;                 
                }

                paper-button:hover {
                    background-color: transparent;
                }

                .blank {
                    height: 224px;
                    width: 224px;
                    background-color: red;
                    margin: 2%;
                }

                .slottedImage {
                    height: 224px;
                    width: 224px;
                    margin: 2%;
                }

            </style>

            <div id="wrapper">
                <h4>Paper Tabs:</h4>
                <paper-tabs selected="0">
                    <paper-tab>Static Images</paper-tab>
                    <paper-tab>Slotted Images</paper-tab>
                    <paper-tab>Shuffled Images</paper-tab>
                </paper-tabs>
                <iron-pages selected="{{selected}}">
                    <div class="tabContent">
                       <img src="/src/assets/polymer-logo.png" alt="" class="tabOneImg">
                       <img src="/src/assets/polymer-logo.png" alt="" class="tabOneImg">
                       <img src="/src/assets/polymer-logo.png" alt="" class="tabOneImg">
                    </div>
                    <div class="tabContent">
                        <div>
                            <poly-slotted-images class="column">
                                <img id="slot1" >
                                <img id="slot2" >
                                <img id="slot3" >
                            </poly-slotted-images>
                        </div>
                        <div class="row">
                            <paper-button id="tabButton1" class="column">Click</paper-button>
                            <paper-button id="tabButton2" class="column">Click</paper-button>
                            <paper-button id="tabButton3" class="column">Click</paper-button>
                        </div>
                    </div>
                    <div class="tabContent">
                        <poly-shuffled-images></poly-shuffled-images>
                    </div>
                </iron-pages>
            </div>



        `;
    }

    firstUpdated() {
        var self = this;
        var pages = this.shadowRoot.querySelector('iron-pages');
        var tabs = this.shadowRoot.querySelector('paper-tabs');

        tabs.addEventListener('iron-select', function() { 
            pages.selected = tabs.selected;
        });

        const btn1 = this.shadowRoot.querySelector("#tabButton1");
        const btn2 = this.shadowRoot.querySelector("#tabButton2");
        const btn3 = this.shadowRoot.querySelector("#tabButton3");

        btn1.addEventListener('click', function() {
            self.slotOneFilled = !self.slotOneFilled            
        });

        btn2.addEventListener('click', function() {
            self.slotTwoFilled = !self.slotTwoFilled;
        });

        btn3.addEventListener('click', function() {
            self.slotThreeFilled = !self.slotThreeFilled;
        });
    }

    updated() {
        var self = this;

        const slot1 = this.shadowRoot.querySelector("#slot1");
        const slot2 = this.shadowRoot.querySelector("#slot2");
        const slot3 = this.shadowRoot.querySelector("#slot3");
        
        if (self.slotOneFilled) {
            $(slot1).attr('src', '../src/assets/vue-logo.png');
            $(slot1).attr('class', 'slottedImage');
            $(slot1).attr('slot', 'imgOne');
        } else {
            $(slot1).attr('src', '');
            $(slot1).attr('class', 'blank');
            $(slot1).attr('slot', '');
        }

        if (self.slotTwoFilled) {
            $(slot2).attr('src', '../src/assets/web-comp-logo.png');
            $(slot2).attr('class', 'slottedImage');
            $(slot2).attr('slot', 'imgTwo');
        } else {
            $(slot2).attr('src', '');
            $(slot2).attr('class', 'blank');
            $(slot2).attr('slot', '');
        }

        if (self.slotThreeFilled) {
            $(slot3).attr('src', '../src/assets/udemy-logo.png');
            $(slot3).attr('class', 'slottedImage');
            $(slot3).attr('slot', 'imgThree');
        } else {
            $(slot3).attr('src', '');
            $(slot3).attr('class', 'blank');
            $(slot3).attr('slot', '');
        }

    }

    

}

customElements.define('poly-paper-tabs', PolyPaperTabs);
