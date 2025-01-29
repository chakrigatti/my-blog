// Sample blog posts data
let posts = [];

// Navigation handling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        showSection(sectionId);
        window.location.hash = sectionId;
    });
});

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Handle initial hash
function handleHash() {
    const hash = window.location.hash.substring(1) || 'home';
    showSection(hash);
}

window.addEventListener('load', () => {
    handleHash();
    loadPosts(); // Changed from direct renderPosts() call
});
window.addEventListener('hashchange', handleHash);

async function loadPosts() {
    try {
        // Load post metadata
        const response = await fetch('posts.json');
        const data = await response.json();
        
        // Load content for each post
        posts = await Promise.all(data.posts.map(async post => {
            const contentResponse = await fetch(post.contentPath);
            post.content = await contentResponse.text();
            return post;
        }));
        
        renderPosts();
        renderTags();
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

// Update renderPosts function
function renderPosts(filterTag = null) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    const filteredPosts = filterTag 
        ? posts.filter(post => post.tags.includes(filterTag))
        : posts;

    filteredPosts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.className = 'post';
        postEl.innerHTML = `
            ${post.content}
            <div class="tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        postsContainer.appendChild(postEl);
    });
}

// Render tags
function renderTags() {
    const tagsContainer = document.getElementById('tags-container');
    const allTags = [...new Set(posts.flatMap(post => post.tags))];
    
    tagsContainer.innerHTML = `
        <span class="tag" data-filter="all">All</span>
        ${allTags.map(tag => `
            <span class="tag" data-filter="${tag}">${tag}</span>
        `).join('')}
    `;

    tagsContainer.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const filter = tag.dataset.filter;
            renderPosts(filter === 'all' ? null : filter);
        });
    });
}

// Initial render
renderPosts();
renderTags();