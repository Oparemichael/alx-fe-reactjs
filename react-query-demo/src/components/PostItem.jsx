import { useQuery } from 'react-query'

const fetchPostDetails = async (postId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch post details')
  }
  return response.json()
}

const PostItem = ({ postId, onBack, posts }) => {
  // Use cached data if available, otherwise fetch
  const cachedPost = posts?.find((post) => post.id === postId)

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetchPostDetails(postId),
    initialData: cachedPost, // Use cached data as initial data
    enabled: !cachedPost, // Only fetch if not in cache
  })

  if (isLoading && !post) {
    return (
      <div className="post-detail">
        <button onClick={onBack} className="back-button">
          ← Back to List
        </button>
        <div className="loading">Loading post details...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="post-detail">
        <button onClick={onBack} className="back-button">
          ← Back to List
        </button>
        <div className="error">Post not found</div>
      </div>
    )
  }

  return (
    <div className="post-detail">
      <button onClick={onBack} className="back-button">
        ← Back to List
      </button>
      
      <div className="post-content">
        <h2>{post.title}</h2>
        <div className="post-meta-detail">
          <span>Post ID: {post.id}</span>
          <span>User ID: {post.userId}</span>
        </div>
        <p className="post-body">{post.body}</p>
      </div>

      <div className="cache-note">
        {cachedPost ? (
          <p>✅ This data was loaded from cache instantly!</p>
        ) : (
          <p>⏳ This data was freshly fetched from the API</p>
        )}
      </div>
    </div>
  )
}

export default PostItem