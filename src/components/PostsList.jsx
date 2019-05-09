import React from 'react';
import PostsListItem from './PostsListItem'


const PostsList = props => (
    props.posts.map( post => {
        return <PostsListItem id={post.id} content={post.content} />

    })
);


export default PostsList;