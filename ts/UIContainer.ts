export class FragmentContainer extends DocumentFragment{
	constructor(templateId) {
		super();
		if(!templateId){
			return;
        }
        const template = document.getElementById(templateId) as HTMLTemplateElement;
        this.append(template.content.cloneNode(true));
	}

	select<T extends HTMLElement>(selector: string) {
		return this.querySelector(selector) as T;
    }

    selectAll<T extends HTMLElement>(selector: string) {
		return this.querySelectorAll(selector) as NodeListOf<T>;
    }
}