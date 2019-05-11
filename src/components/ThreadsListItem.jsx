import React from 'react';


const ThreadsListItem = props => (
    <li className={props.class ? props.class : `ThreadsListItem`}>
        <div className={"ThreadsListItemHead"}>
            <div className={"ThreadsListItemTitle"}>
                <h5>{ props.title }</h5>
            </div>
            <div className={"ThreadsListItemAuthor"}>
                <p>Posted by {props.user}</p>
            </div>
        </div>
        {props.class ? null : <div className={'accents'}>() => (</div>}
        <div className={"ThreadsListItemContent"}>
            <p>{ props.content }</p>
        </div>
        {props.class ? null : <div className={'accents'}>)</div>}
    </li>
);


export default ThreadsListItem;