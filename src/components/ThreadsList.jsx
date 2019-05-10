import React from 'react';
import { NavLink } from 'react-router-dom';
import ThreadsListItem from './ThreadsListItem';


const ThreadsList = props => (
    props.threads.map( thread => {
        return <NavLink className={"ThreadsListItem-Link"} key={thread.id}
                        to={`/sections/${props.section.code ? props.section.code : props.section.title}/${thread.id}`}>
            <ThreadsListItem title={thread.title} user_id={thread.user_id} content={thread.content}/>
    </NavLink>
    })
);


export default ThreadsList;