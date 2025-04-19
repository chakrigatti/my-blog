export class FragmentContainer extends DocumentFragment {
    constructor(templateId) {
        super();
        if (!templateId) {
            return;
        }
        const template = document.getElementById(templateId);
        this.append(template.content.cloneNode(true));
    }
    select(selector) {
        return this.querySelector(selector);
    }
    selectAll(selector) {
        return this.querySelectorAll(selector);
    }
}
