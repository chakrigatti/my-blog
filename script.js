let posts = [];

async function init() {
    await loadPosts();
}

async function loadPosts() {
    try {
        const response = await fetch('posts.json');
        const data = await response.json();
        posts = data.posts;
        renderPosts();
        renderTags();
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

function renderPosts(filterTag = null) {
    const postsContainer = document.getElementById('posts-list-container');
    if (!postsContainer) return;

    const filteredPosts = filterTag ? posts.filter(post => post.tags.includes(filterTag)) : posts;

    postsContainer.innerHTML = '';
    const template = document.getElementById('post-template');

    filteredPosts.forEach(post => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('a').href = `posts/${post.slug}`;
        clone.querySelector('a').textContent = post.title;
        clone.querySelector('.date').textContent = post.date;
        clone.querySelector('p').textContent = post.excerpt;

        const tagsContainer = clone.querySelector('.tags');
        tagsContainer.innerHTML = '';
        post.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag';
            tagSpan.textContent = tag;
            tagSpan.setAttribute('data-tag', tag);
            tagsContainer.appendChild(tagSpan);
        });

        postsContainer.appendChild(clone);
    });
}

function renderTags() {
    const tagsContainer = document.getElementById('all-tags');
    if (!tagsContainer) return;

    const allTags = [...new Set(posts.flatMap(post => post.tags))];

    tagsContainer.innerHTML = '';
    allTags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tag;
        tagSpan.setAttribute('data-tag', tag);
        tagSpan.addEventListener('click', () => renderPosts(tag));
        tagsContainer.appendChild(tagSpan);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', init);