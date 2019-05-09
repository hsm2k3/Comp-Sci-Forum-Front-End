import React from 'react';


const ThreadsListItem = props => (
    <div className={props.class ? props.class : `ThreadsListItem`}>
        <div className={"ThreadsListItemHead"}>
            <div className={"ThreadsListItemTitle"}>
                <h5>{ props.title }</h5>
            </div>
            <div className={"ThreadsListItemAuthor"}>
                <p>Posted by {props.user_id}</p>
            </div>
        </div>
        <div className={"ThreadsListItemContent"}>
            <p>{ props.content }</p>
        </div>
    </div>
);


export default ThreadsListItem;