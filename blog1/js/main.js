document.addEventListener("DOMContentLoaded", () => {
    const postContainer = document.getElementById("posts");
    const tagContainer = document.getElementById("tag-container");
    // Define posts array
    const posts = [
        { title: "My First Post", file: "post1.md", summary: "Introduction to my blog.", tags: ["Introduction", "Personal"] },
        { title: "Understanding Algorithms", file: "post2.md", summary: "Basics of algorithm design.", tags: ["Algorithms", "Coding"] }
    ];
    

    if (postContainer && !tagContainer) {
        posts.forEach(post => {
            const postCard = document.createElement("div");
            postCard.classList.add("post-card");
    
            // Display tags in each post card
            const tagLinks = post.tags.map(tag => `<a href="tags.html?tag=${tag}" class="tag">${tag}</a>`).join(", ");
    
            postCard.innerHTML = `
                <h2><a href="post.html?post=${post.file}">${post.title}</a></h2>
                <p>${post.summary}</p>
                <p>Tags: ${tagLinks}</p>
            `;
            postContainer.appendChild(postCard);
        });
    }
    
    

    if (tagContainer) {
        const uniqueTags = [...new Set(posts.flatMap(post => post.tags))]; // Get unique tags
        uniqueTags.forEach(tag => {
            const tagLink = document.createElement("a");
            tagLink.href = `tags.html?tag=${tag}`;
            tagLink.classList.add("tag");
            tagLink.innerText = tag;
            tagContainer.appendChild(tagLink);
            tagContainer.appendChild(document.createElement("br")); // New line for each tag
        });
    }

    // If viewing a specific tag
    const urlParams = new URLSearchParams(window.location.search);
    const tagFilter = urlParams.get('tag');

    if (tagFilter && postContainer) {
        postContainer.innerHTML = ""; // Clear homepage content
        const filteredPosts = posts.filter(post => post.tags.includes(tagFilter));

        filteredPosts.forEach(post => {
            const postCard = document.createElement("div");
            postCard.classList.add("post-card");
            postCard.innerHTML = `
                <h2><a href="post.html?post=${post.file}">${post.title}</a></h2>
                <p>${post.summary}</p>
                <p>Tags: ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join(", ")}</p>
            `;
            postContainer.appendChild(postCard);
        });
    }


    const postFile = urlParams.get('post');
    if (postFile) {
        fetch(`posts/${postFile}`)
            .then(response => response.text())
            .then(data => {
                const contentDiv = document.getElementById("content");
                contentDiv.innerHTML = marked.parse(data)
            });
    }
});
