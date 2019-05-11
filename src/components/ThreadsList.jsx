import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ThreadsListItem from './ThreadsListItem';
import { getUser} from "../redux/actionCreators/users_actionCreators";


class ThreadsList extends Component{

    renderThreadsList = () => {
        const { currentSection, getUser, user } = this.props;

        return currentSection.Threads.map( thread => {
            getUser(thread.user);

            return <NavLink className={"ThreadsListItem-Link"} key={thread.id}
                            to={`/sections/${currentSection.code ? currentSection.code : currentSection.title}/${thread.id}`}>
                <ThreadsListItem title={thread.title} user={user} content={thread.content}/>
            </NavLink>
        })
    };

    render(){
        return(
            <Fragment>
                {
                        this.renderThreadsList()
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state =>{
    return {
        currentSection: state.sections.currentSection,
        currentThread: state.threads.currentThread,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
  return {
      getUser: (user_id) => dispatch(getUser(user_id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadsList);