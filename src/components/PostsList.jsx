import React from 'react';


const PostsList = props => (
    props.posts.map( post => {
        return <li className={"PostsListItem"} key={post.id}>
            <div className={'PostListItemContent'}>
                <p>{post.content}</p>
                {console.log('DEBUG:POSTS: ', post)}
            </div>
        </li>

    })
);


export default PostsList;