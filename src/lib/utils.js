```javascript
export function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

export function sortPosts(posts) {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
```