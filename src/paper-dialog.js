import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-button';
import '@polymer/neon-animation/animations/scale-up-animation.js';
import '@polymer/neon-animation/animations/fade-out-animation.js';

class PaperModal extends PolymerElement {
  static get template() {
    return html`
        <paper-button raised onclick="modal.open()">modal dialog</paper-button>
        <paper-dialog id="modal" modal>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="buttons">
                <paper-button dialog-confirm autofocus>Tap me to close</paper-button>
            </div>
        </paper-dialog>
    `;
  }
}
customElements.define('paper-modal', PaperModal);