import React from 'react';


const ThreadsList = props => (
    props.threads.map( thread => {
        return <li className={'ThreadsListItem'} key={thread.id} >
            <h3>{thread.title}</h3>
        </li>
    })
);


export default ThreadsList;