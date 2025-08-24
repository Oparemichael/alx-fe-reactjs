import { useParams, Link } from 'react-router-dom'

const blogPosts = {
  'post-1': {
    title: 'Understanding React Router',
    content: 'React Router is a powerful routing library for React applications...',
    author: 'John Doe'
  },
  'post-2': {
    title: 'Advanced Routing Techniques',
    content: 'Learn about nested routes, protected routes, and dynamic routing...',
    author: 'Jane Smith'
  }
}

function BlogPost() {
  const { postId } = useParams()
  const post = blogPosts[postId]

  if (!post) {
    return (
      <div className="card">
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="card">
      <h1>{post.title}</h1>
      <p style={{ color: '#666', fontStyle: 'italic' }}>By {post.author}</p>
      <p>{post.content}</p>
      <div style={{ marginTop: '2rem' }}>
        <h3>More Blog Posts:</h3>
        <ul>
          {Object.keys(blogPosts).map((id) => (
            <li key={id}>
              <Link to={`/blog/${id}`}>{blogPosts[id].title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BlogPost