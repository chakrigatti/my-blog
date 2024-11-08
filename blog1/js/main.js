document.addEventListener("DOMContentLoaded", () => {
    const postContainer = document.getElementById("posts");

    // Define posts array
    const posts = [
        { title: "My First Post", file: "post1.md", summary: "Introduction to my blog." },
        { title: "Understanding Algorithms", file: "post2.md", summary: "Basics of algorithm design." }
    ];

    // Load posts into the homepage
    if (postContainer) {
        posts.forEach(post => {
            const postCard = document.createElement("div");
            postCard.classList.add("post-card");
            postCard.innerHTML = `
                <h2><a href="post.html?post=${post.file}">${post.title}</a></h2>
                <p>${post.summary}</p>
            `;
            postContainer.appendChild(postCard);
        });
    }

    // Load individual post content
    const urlParams = new URLSearchParams(window.location.search);
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
