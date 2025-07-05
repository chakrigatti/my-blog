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
    setHTMLAndCSSCode(htmlCode, cssCode) {
        this.setHTMLCode(htmlCode);
        this.setCSSCode(cssCode);
        this.setCodeOutput(`<style>${cssCode}</style>${htmlCode}`);
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
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.srcdoc = code;
        this.codeOutput.innerHTML = '';
        this.codeOutput.appendChild(iframe);
    }
}
