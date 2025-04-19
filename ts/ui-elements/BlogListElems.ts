import { FragmentContainer } from "../UIContainer.js";

export class BlogLiElem extends FragmentContainer{
    constructor(post) {
        super("blog-li");
        this.fillData(post);
    }

    fillData(post){
        const title = this.select(".blog-title");
        const date = this.select(".blog-date");
        const alink = this.select<HTMLAnchorElement>(".blog-link");

        title.innerText = post.title;
        date.innerText = post.date;
        alink.href = `./posts/${post.slug}`
    }
    
}