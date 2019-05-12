import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ThreadsListItem from './ThreadsListItem';
import { getUser} from "../redux/actionCreators/users_actionCreators";
import {FETCH_USER_FAILURE, FETCH_USER_SUCCESS} from "../redux/actions/users_actions";


class ThreadsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }

    getUserName = (user_id) => {
        fetch(`/api/users/id/${user_id}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                let name = `${data.first_name} ${data.last_name}`;
                console.log("getUserName: ", name);
                return name;
            })
            .catch(error => {
                console.log(error);
            })
    };

    renderThreadsList = () => {
        const { currentSection } = this.props;

        return currentSection.Threads.map( thread => {
            const user_name = this.getUserName(thread.user_id);
            console.log("user name: ",user_name);
            return <NavLink className={"ThreadsListItem-Link"} key={thread.id}
                            to={`/sections/${currentSection.code ? currentSection.code : currentSection.title}/${thread.id}`}>
                { <ThreadsListItem title={thread.title} user_name={this.getUserName(thread.user_id)} content={thread.content}/>}
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
    }
};

export default connect(mapStateToProps)(ThreadsList);