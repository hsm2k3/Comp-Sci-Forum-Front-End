import React, { Fragment } from 'react';
import {NavLink} from "react-router-dom";


const ThreadsListItem = props => (
    <div className={'ThreadsListItem'}>
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