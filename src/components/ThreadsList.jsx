import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ThreadsListItem from './ThreadsListItem';


const ThreadsList = props => (
    props.threads.map( thread => {
        return <NavLink className={"ThreadsListItem-Link"} key={thread.id}
                        to={`/sections/${props.section.code ? props.section.code : props.section.title}/${thread.id}`}>
            <ThreadsListItem title={thread.title} user={thread.user} content={thread.content}/>
    </NavLink>
    })
);


const mapDispatchToProps = dispatch => {
  return {

  }
};

export default connect(mapDispatchToProps)(ThreadsList);