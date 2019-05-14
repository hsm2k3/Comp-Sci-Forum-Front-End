import React from 'react';


const ThreadsListItem = props => {


    return(
        <li className={props.class ? props.class : `ThreadsListItem`}>
            <div className={"ThreadsListItemHead"}>
                <div className={"ThreadsListItemTitle"}>
                    <h5>{props.title}</h5>
                </div>
                <div className={"ThreadsListItemAuthor"}>
                    <p>Posted by <span>{props.user_name ? props.user_name : "some dude"}</span></p>
                </div>
            </div>
            {props.class ? null : <div className={'accents'}>() => (</div>}
            <div className={"ThreadsListItemContent"}>
                <p>{props.content}</p>
            </div>
            {props.class ? null : <div className={'accents'}>)</div>}
        </li>
    )
};


export default ThreadsListItem;