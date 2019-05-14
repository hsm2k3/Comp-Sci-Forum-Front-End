import React from 'react';


const PostsListItem = props => (
    <li className={"PostsListItem"} key={props.id}>
        <div className="PostsListItemHead">
            <h5>{props.user ? props.user : "some dude"}</h5>
        </div>
        <div className={'PostsListItemBody'}>
            <p>{props.content}</p>
        </div>
    </li>
);


export default PostsListItem;