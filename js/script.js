import { BlogListUI } from "./BlogListUI.js";
let posts = [];
async function init() {
    await addPosts();
}
async function addPosts() {
    const response = await fetch("posts.json");
    const json = await response.json();
    posts = json.posts;
    const blogListUI = new BlogListUI();
    blogListUI.renderBlogList(posts);
}
document.addEventListener('DOMContentLoaded', init);
