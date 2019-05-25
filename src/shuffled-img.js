import { LitElement, html } from 'lit-element';
import '@polymer/paper-button';

class ShuffledImg extends LitElement {
    static get properties() {
        return {
            imgSrcArray: Array,
            arrayWatcher: Array
        };
    }
    constructor() {
        super();
        this.imgSrcArray = [
            "/src/assets/iconfinder_number_1_blue_1553030.png",
            "/src/assets/iconfinder_number_2_blue_1553043.png",
            "/src/assets/iconfinder_number_3_blue_1553079.png",
            "/src/assets/iconfinder_number_4_blue_1553097.png",
            "/src/assets/iconfinder_number_5_blue_1553045.png"
        ];
    }

    render() {
        return html`

        <style>
            #imgWrapper {
                margin-top: 50px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
            }

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
        </style>

        <div id="imgWrapper">
            <img id="one">
            <img id="two">
            <img id="three">
            <img id="four">
            <img id="five">
        </div>
        <paper-button @click="${() => this.arrayWatcher = this.shuffleImgSrcArray()}">Click</paper-button>
    `;
    }

    firstUpdated() {
        var self = this;
        const img1 = this.shadowRoot.querySelector('#one');
        const img2 = this.shadowRoot.querySelector('#two');
        const img3 = this.shadowRoot.querySelector('#three');
        const img4 = this.shadowRoot.querySelector('#four');
        const img5 = this.shadowRoot.querySelector('#five');

        img1.setAttribute('src', self.imgSrcArray[0]);
        img2.setAttribute('src', self.imgSrcArray[1]);
        img3.setAttribute('src', self.imgSrcArray[2]);
        img4.setAttribute('src', self.imgSrcArray[3]);
        img5.setAttribute('src', self.imgSrcArray[4]);
    }

    shuffleImgSrcArray() {
        var self = this;
        const img1 = this.shadowRoot.querySelector('#one');
        const img2 = this.shadowRoot.querySelector('#two');
        const img3 = this.shadowRoot.querySelector('#three');
        const img4 = this.shadowRoot.querySelector('#four');
        const img5 = this.shadowRoot.querySelector('#five');

        this.shuffle(this.imgSrcArray);

        for (var i = 0; i <self.imgSrcArray.length; i++) {
            img1.setAttribute('src', self.imgSrcArray[0]);
            img2.setAttribute('src', self.imgSrcArray[1]);
            img3.setAttribute('src', self.imgSrcArray[2]);
            img4.setAttribute('src', self.imgSrcArray[3]);
            img5.setAttribute('src', self.imgSrcArray[4]);
        }

    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


}
customElements.define('poly-shuffled-images', ShuffledImg);