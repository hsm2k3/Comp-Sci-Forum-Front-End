import React from 'react';
import { NavLink } from 'react-router-dom';


const PostsList = props => (
    props.posts.map( post => {
        return <li className={"PostsListItem"} key={post.id}>
            <div className={'PostListItemContent'}>
                <p>{post.content}</p>
            </div>
        </li>

    })
);


export default PostsList;