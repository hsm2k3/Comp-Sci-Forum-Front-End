import React from 'react';


const ThreadsList = props => (
    props.threads.map( thread => {
        return <li className={'ThreadsListItem'} key={thread.id} >
            <div className={"ThreadsListItemHead"}>
                <div className={"ThreadsListItemTitle"}>
                    <h5>{ thread.title }</h5>
                </div>
                <div className={"ThreadsListItemAuthor"}>
                    <p>Posted by {thread.user_id}</p>
                </div>
            </div>
            <div className={"ThreadsListItemContent"}>
                <p>{ thread.content }</p>
            </div>
        </li>
    })
);


export default ThreadsList;