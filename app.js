document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const gridContainer = document.querySelector('.grid-container');

    postForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        if (title && content) {
            // Create a new blog post element
            const gridItem = document.createElement('article');
            gridItem.className = 'grid-item';

            gridItem.innerHTML = `
                <div class="blog-post">
                    <h4>${title}</h4>
                    <p>${content}</p>
                </div>
                <footer>
                    <h3>Author: You</h3>
                    <h4>Last posted: ${new Date().toLocaleDateString()}</h4>
                </footer>
            `;

            // Add the new post to the grid
            gridContainer.prepend(gridItem);

            // Optionally, reset the form
            postForm.reset();
        } else {
            alert('Please fill in both fields.');
        }
    });
});
