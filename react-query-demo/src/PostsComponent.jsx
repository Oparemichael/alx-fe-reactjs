import { useState } from 'react'
import { useQuery } from 'react-query'
import PostItem from './PostItem'


// API service functions
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  return response.json()
}

const PostsComponent = () => {
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [showDetails, setShowDetails] = useState(false)

  // Using React Query to fetch posts
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    select: (data) => data.slice(0, 10), // Only show first 10 posts for demo
  })

  // Function to handle post selection
  const handlePostSelect = (postId) => {
    setSelectedPostId(postId)
    setShowDetails(true)
  }

  // Function to handle going back to list
  const handleBackToList = () => {
    setShowDetails(false)
    setSelectedPostId(null)
  }

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading posts...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="error-container">
        <h2>Error loading posts</h2>
        <p>{error.message}</p>
        <button onClick={refetch} className="retry-button">
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="posts-container">
      <div className="header">
        <h2>Posts List</h2>
        <div className="controls">
          <button
            onClick={refetch}
            disabled={isFetching}
            className="refresh-button"
          >
            {isFetching ? 'Refreshing...' : 'Refresh Data'}
          </button>
          <span className="cache-info">
            {isFetching ? 'Updating...' : 'Data is cached'}
          </span>
        </div>
      </div>

      {showDetails && selectedPostId ? (
        <PostItem
          postId={selectedPostId}
          onBack={handleBackToList}
          posts={posts}
        />
      ) : (
        <div className="posts-list">
          {posts.map((post) => (
            <div
              key={post.id}
              className="post-card"
              onClick={() => handlePostSelect(post.id)}
            >
              <h3>{post.title}</h3>
              <p>{post.body.substring(0, 100)}...</p>
              <div className="post-meta">
                <span>Post ID: {post.id}</span>
                <span>User ID: {post.userId}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="demo-info">
        <h3>React Query Demo Features:</h3>
        <ul>
          <li>✅ Automatic caching of fetched data</li>
          <li>✅ Background refetching capabilities</li>
          <li>✅ Loading and error states handling</li>
          <li>✅ Stale-while-revalidate pattern</li>
          <li>✅ DevTools integration for cache inspection</li>
        </ul>
        <p>
          <strong>Try this:</strong> Navigate away and come back to see cached data load instantly!
        </p>
      </div>
    </div>
  )
}

export default PostsComponent