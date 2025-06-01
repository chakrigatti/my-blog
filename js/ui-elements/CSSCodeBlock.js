import { FragmentContainer } from "../UIContainer.js";
export class CSSCodeBlock extends FragmentContainer {
    htmlPanel;
    cssPanel;
    codeOutput;
    selectCode;
    htmlSelect;
    cssSelect;
    constructor() {
        super("html-css-code-template");
        this.htmlPanel = this.select('.htmlPanel');
        this.cssPanel = this.select('.cssPanel');
        this.codeOutput = this.select('.codeOutput');
        this.selectCode = this.select('.selectCode');
        this.htmlSelect = this.select('.htmlSelect');
        this.cssSelect = this.select('.cssSelect');
        this.setupEventListeners();
    }
    setupEventListeners() {
        const { htmlSelect, cssSelect, htmlPanel, cssPanel } = this;
        htmlSelect.onclick = () => {
            htmlSelect.classList.add('code-selected');
            cssSelect.classList.remove('code-selected');
            htmlPanel.classList.remove('displayNone');
            cssPanel.classList.add('displayNone');
        };
        cssSelect.onclick = () => {
            cssSelect.classList.add('code-selected');
            htmlSelect.classList.remove('code-selected');
            cssPanel.classList.remove('displayNone');
            htmlPanel.classList.add('displayNone');
        };
    }
    setHTMLCode(code) {
        const highlighted = window.Prism
            ? window.Prism.highlight(code, window.Prism.languages.html, 'html')
            : code;
        this.htmlPanel.innerHTML = `<pre class="language-html"><code>${highlighted}</code></pre>`;
    }
    setCSSCode(code) {
        const highlighted = window.Prism
            ? window.Prism.highlight(code, window.Prism.languages.css, 'css')
            : code;
        this.cssPanel.innerHTML = `<pre class="language-css"><code>${highlighted}</code></pre>`;
    }
    setCodeOutput(code) {
        this.codeOutput.innerHTML = code;
    }
}
