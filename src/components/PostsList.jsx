import React from 'react';
import PostsListItem from './PostsListItem'


const PostsList = props => (
    props.posts.map( post => {
        return <PostsListItem
            key={post.id}
            id={post.id}
            content={post.content}
            user={""} />
    })
);


export default PostsList;