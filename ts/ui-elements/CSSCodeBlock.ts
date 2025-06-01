import { FragmentContainer } from "../UIContainer.js";

export class CSSCodeBlock extends FragmentContainer{

    htmlPanel: HTMLElement;
    cssPanel: HTMLElement;
    codeOutput: HTMLElement;
    selectCode: HTMLElement;
    htmlSelect: HTMLElement;
    cssSelect: HTMLElement;

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

    private setupEventListeners() {
        // Add click event for HTML select
        const {htmlSelect,cssSelect,htmlPanel,cssPanel} = this;

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

    public setHTMLCode(code: string) {
        // Use Prism.js to highlight HTML code and retain indentation
        const highlighted = (window as any).Prism
            ? (window as any).Prism.highlight(code, (window as any).Prism.languages.html, 'html')
            : code;
        this.htmlPanel.innerHTML = `<pre class="language-html"><code>${highlighted}</code></pre>`;
    }
    public setCSSCode(code: string) {
        // Use Prism.js to highlight CSS code and retain indentation
        const highlighted = (window as any).Prism
            ? (window as any).Prism.highlight(code, (window as any).Prism.languages.css, 'css')
            : code;
        this.cssPanel.innerHTML = `<pre class="language-css"><code>${highlighted}</code></pre>`;
    }
    public setCodeOutput(code: string) {
        this.codeOutput.innerHTML = code;
    }

}