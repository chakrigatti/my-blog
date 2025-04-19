import { BlogLiElem } from "./ui-elements/BlogListElems.js"
export class BlogListUI{

    renderBlogList(posts){
        const blogListContainer = document.querySelector(".blog-list");
        blogListContainer.innerHTML = ""; // Clear existing content
        posts.forEach(post => {
            const blogLiElem = new BlogLiElem(post);
            blogListContainer.appendChild(blogLiElem);
        }
        );
    }
}