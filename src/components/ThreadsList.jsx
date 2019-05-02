import React from 'react';


const ThreadsList = props => (
    <div id={'ThreadsList'}>
        <h1>Threads for {props.sectionName} go here!</h1>
        <div> {JSON.stringify(props.sectionThreads)} </div>
    </div>
);


export default ThreadsList;