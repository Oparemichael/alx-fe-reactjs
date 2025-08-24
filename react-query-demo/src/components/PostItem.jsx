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
  const cachedPost = posts?.find((post) => post.id === postId)

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetchPostDetails(postId),
    initialData: cachedPost,
    enabled: !cachedPost,
  })

  if (isLoading && !post) {
    return (
      <div>
        <button onClick={onBack}>
          ← Back to List
        </button>
        <div>Loading post details...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div>
        <button onClick={onBack}>
          ← Back to List
        </button>
        <div>Post not found</div>
      </div>
    )
  }

  return (
    <div>
      <button onClick={onBack}>
        ← Back to List
      </button>
      
      <div>
        <h2>{post.title}</h2>
        <div>
          <span>Post ID: {post.id}</span>
          <span>User ID: {post.userId}</span>
        </div>
        <p>{post.body}</p>
      </div>

      <div>
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