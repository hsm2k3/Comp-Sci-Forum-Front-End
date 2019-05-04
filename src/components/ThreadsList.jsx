import React from 'react';
import { NavLink } from 'react-router-dom';




const ThreadsList = props => (
    props.threads.map( thread => {
        return <NavLink className={'ThreadsListLink'} key={thread.id} to={`/threads/${thread.id}`}>
        	<li className={'ThreadsListItem'}>
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
    </NavLink>
    })
);





export default ThreadsList;