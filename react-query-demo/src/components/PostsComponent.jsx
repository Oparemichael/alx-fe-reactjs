import { useState } from 'react'
import { useQuery } from 'react-query'

// API service function
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
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5

  // Using React Query to fetch posts with advanced options
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['posts', currentPage],
    queryFn: fetchPosts,
    select: (data) => data.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage),
    
    // Advanced React Query configurations
    cacheTime: 10 * 60 * 1000, // 10 minutes - how long to keep data in cache after unmount
    staleTime: 2 * 60 * 1000,  // 2 minutes - how long data is considered fresh
    refetchOnWindowFocus: true, // Refetch data when window regains focus
    keepPreviousData: true,     // Keep previous data while fetching new data
    
    // Additional options
    retry: 2,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  })

  const handlePostSelect = (postId) => {
    setSelectedPostId(postId)
    setShowDetails(true)
  }

  const handleBackToList = () => {
    setShowDetails(false)
    setSelectedPostId(null)
  }

  const nextPage = () => {
    if (!isPreviousData) {
      setCurrentPage(old => old + 1)
    }
  }

  const prevPage = () => {
    setCurrentPage(old => Math.max(old - 1, 1))
  }

  if (isLoading) {
    return (
      <div>
        <div>Loading posts...</div>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h2>Error loading posts</h2>
        <p>{error.message}</p>
        <button onClick={refetch}>
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div>
      <div>
        <h2>Posts List (Page {currentPage})</h2>
        <div>
          <button
            onClick={refetch}
            disabled={isFetching}
          >
            {isFetching ? 'Refreshing...' : 'Refresh Data'}
          </button>
          <span>
            {isFetching ? 'Updating...' : 'Data is cached'}
          </span>
        </div>
      </div>

      {/* Configuration Info */}
      <div>
        <h3>React Query Configuration:</h3>
        <div>
          <div>
            <span>cacheTime: </span>
            <span>10 minutes</span>
          </div>
          <div>
            <span>staleTime: </span>
            <span>2 minutes</span>
          </div>
          <div>
            <span>refetchOnWindowFocus: </span>
            <span>true</span>
          </div>
          <div>
            <span>keepPreviousData: </span>
            <span>true</span>
          </div>
        </div>
      </div>

      {showDetails && selectedPostId ? (
        <div>
          <button onClick={handleBackToList}>
            ← Back to List
          </button>
          <h3>Post Details</h3>
          <p>Post ID: {selectedPostId}</p>
          {/* Post details would be shown here */}
        </div>
      ) : (
        <>
          <div>
            {posts.map((post) => (
              <div
                key={post.id}
                onClick={() => handlePostSelect(post.id)}
                style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', cursor: 'pointer' }}
              >
                <h3>{post.title}</h3>
                <p>{post.body.substring(0, 100)}...</p>
                <div>
                  <span>Post ID: {post.id}</span>
                  <span>User ID: {post.userId}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div>
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Previous Page
            </button>
            <span>Page {currentPage}</span>
            <button
              onClick={nextPage}
              disabled={isPreviousData || !posts || posts.length < postsPerPage}
            >
              Next Page
            </button>
          </div>
        </>
      )}

      <div>
        <h3>React Query Demo Features:</h3>
        <ul>
          <li>✅ <strong>cacheTime</strong>: 10 minutes - Data stays in cache after component unmounts</li>
          <li>✅ <strong>staleTime</strong>: 2 minutes - Data is fresh for 2 minutes before refetching</li>
          <li>✅ <strong>refetchOnWindowFocus</strong>: true - Auto-refresh when window regains focus</li>
          <li>✅ <strong>keepPreviousData</strong>: true - Shows old data while fetching new data</li>
          <li>✅ Automatic caching and background updates</li>
          <li>✅ Loading and error states handling</li>
        </ul>
        
        <div>
          <h4>Try these interactions:</h4>
          <p>1. <strong>Navigate away and come back</strong> - See cached data load instantly!</p>
          <p>2. <strong>Change browser tabs and return</strong> - Watch auto-refresh on window focus!</p>
          <p>3. <strong>Click between pages</strong> - Notice smooth transitions with keepPreviousData!</p>
        </div>
      </div>
    </div>
  )
}

export default PostsComponent