import Post from './post/post'

const Timeline = ( {posts} ) => {
    return (
        <div className='dashboard-timeline'>
            {posts.map(post => (<Post key={post.id} post={post} />))}
        </div>
    )
}

export default Timeline