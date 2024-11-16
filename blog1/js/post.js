document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postFile = urlParams.get('post');
    if (postFile) {
        let content = await getPostContent(postFile);
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = marked.parse(content)
    }
})

async function getPostContent(postFile){
    let response = await fetch(`posts/${postFile}`)
        .then(response => response.text())
    return response;
}