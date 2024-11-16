
export function populatePosts(posts){
    const postContainer = document.getElementById("posts");
    postContainer.innerHTML = "";
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