import React from 'react';
import PostsListItem from './PostsListItem'


const PostsList = props => (
    props.posts.map( post => {
        console.log(props);
        return <PostsListItem
            key={post.id}
            id={post.id}
            content={post.content}
            user={post.user_id} />
    })
);


export default PostsList;