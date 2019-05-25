import { LitElement, html } from 'lit-element';
import '@polymer/paper-slider/paper-slider.js';

export class PolyPaperSlider extends LitElement {
  
  render() {
    return html`
        <style>
            :host { 
                display: block; 
            }
            :host([hidden]) { display: none; }

            .caption {
            padding-left: 12px;
            color: #a0a0a0;
            }
            
            #grade {
            --paper-slider-secondary-color: var(--paper-red-a200);
            }

            paper-slider {
                width: 90%;
                margin: 0 auto 20px auto;
            }

        </style>
        <body>
            <h4>Paper Slider:</h4>
            <div>Brightness</div><br>
            <paper-slider pin value="20"></paper-slider>
            <div>Ratings: <span id="ratingsLabel" class="caption"></span></div><br>
            <paper-slider id="ratings" pin snaps max="10" max-markers="10" step="1" value="5"></paper-slider>
            <div>Grade: <span id="gradeLabel" class="caption"></span></div><br>
            <paper-slider id="grade" pin value="20" secondary-progress="70"></paper-slider>
        </body>
    `;
  }

  firstUpdated() {
    const ratingsDiv = this.shadowRoot.querySelector('#ratings');
    const ratingsLabel = this.shadowRoot.querySelector('#ratingsLabel');
    ratingsLabel.textContent = ratingsDiv.value;

    const gradeDiv = this.shadowRoot.querySelector('#grade');
    const gradeLabel = this.shadowRoot.querySelector('#gradeLabel');
    var label = (gradeDiv.value < gradeDiv.secondaryProgress) ? "Fail" : "Pass" ;
    gradeLabel.textContent = gradeDiv.value + " (" + label + ")";
  }

  updated() {   
    const ratingsDiv = this.shadowRoot.querySelector('#ratings');
    const ratingsLabel = this.shadowRoot.querySelector('#ratingsLabel');
    ratingsDiv.addEventListener('value-change', function() {
      ratingsLabel.textContent = ratingsDiv.value;
    });

    const gradeDiv = this.shadowRoot.querySelector('#grade');
    const gradeLabel = this.shadowRoot.querySelector('#gradeLabel');
    gradeDiv.addEventListener('value-change', function() {
      var label = (gradeDiv.value < gradeDiv.secondaryProgress) ? "Fail" : "Pass" ;
      gradeLabel.textContent = gradeDiv.value + " (" + label + ")";
    });
  }

}
// Register the element with the browser
customElements.define('poly-paper-slider', PolyPaperSlider);
