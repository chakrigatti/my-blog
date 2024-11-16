// Define posts array
import { populatePosts } from "./ui-utils.js";
const posts = [
    { title: "My First Post", file: "post1.md", summary: "Introduction to my blog.", tags: ["Introduction", "Personal"] },
    { title: "Understanding Algorithms", file: "post2.md", summary: "Basics of algorithm design.", tags: ["Algorithms", "Coding"] }
];

document.addEventListener("DOMContentLoaded", () => {
    populatePosts(posts);
});
