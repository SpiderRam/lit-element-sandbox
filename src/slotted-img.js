import { LitElement, html } from 'lit-element';

export class SlottedImages extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <style>
                #wrapper {
                    display: flex;
                    justify-content: space-evenly;
                    width: 100%;
                    margin: 0;
                }

                .blank {
                    height: 224px;
                    width: 224px;
                    background-color: lightyellow;
                    margin: 2%;
                }

                .blank p {
                    margin: 40% auto;
                }
            </style>
            <div id="wrapper">
                <slot name="imgOne">
                    <div class="blank">
                        <p>Slot</p>
                    </div>
                </slot>
                <slot name="imgTwo">
                    <div class="blank">
                        <p>Slot</p>
                    </div>
                </slot>
                <slot name="imgThree">
                    <div class="blank">
                        <p>Slot</p>
                    </div>
                </slot>
            </div>
        `;
    }


}

customElements.define('poly-slotted-images', SlottedImages);