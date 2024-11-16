import { populatePosts } from "./ui-utils.js";

const posts = [
    { title: "My First Post", file: "post1.md", summary: "Introduction to my blog.", tags: ["Introduction", "Personal"] },
    { title: "Understanding Algorithms", file: "post2.md", summary: "Basics of algorithm design.", tags: ["Algorithms", "Coding"] }
];


document.addEventListener("DOMContentLoaded", async () => {
    const postContainer = document.getElementById("posts");
    const tagContainer = document.getElementById("tag-container");


    const uniqueTags = [...new Set(posts.flatMap(post => post.tags))]; // Get unique tags
    uniqueTags.forEach(tag => {
        const tagLink = document.createElement("a");
        tagLink.href = `tags.html?tag=${tag}`;
        tagLink.classList.add("tag");
        tagLink.innerText = tag;
        tagContainer.appendChild(tagLink);
        tagContainer.appendChild(document.createElement("br")); // New line for each tag
    });

    // If viewing a specific tag
    const urlParams = new URLSearchParams(window.location.search);
    const tagFilter = urlParams.get('tag');

    if (tagFilter) {
        postContainer.innerHTML = "";
        const filteredPosts = posts.filter(post => post.tags.includes(tagFilter));
        populatePosts(filteredPosts);
    }
})