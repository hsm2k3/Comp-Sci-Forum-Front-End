import React from 'react';


const PostsListItem = props => (
    <li className={"PostsListItem"} key={props.id}>
        <div className={'PostsListItemContent'}>
            <p>{props.content}</p>
        </div>
    </li>
);


export default PostsListItem;