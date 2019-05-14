import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ThreadsListItem from './ThreadsListItem';
import {getThreads,resetThreadAddedFlag} from "../redux/actionCreators/threads_actionCreators";


class ThreadsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        const {currentSection, getThreads} = this.props;

        getThreads(currentSection.id);

    }

    componentDidUpdate(prevProps) {
        const {currentSection, getThreads, threadAddedFlag, resetThreadAddedFlag} = this.props;

        if(threadAddedFlag){
            getThreads(currentSection.id);
            resetThreadAddedFlag();
        }
    }

    getUserName = (user_id) => {
        fetch(`/api/users/id/${user_id}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                let name = `${data.first_name} ${data.last_name}`;
                // console.log("getUserName: ", name);
                return name;
            })
            .catch(error => {
                console.log(error);
            })
    };


    render(){
        const {isThreadsLoading, currentSection, threads} = this.props;
        console.log(threads);

        return(
            <Fragment>
                {
                        !isThreadsLoading && threads &&
                            threads.map( thread => {
                                // const user_name = this.getUserName(thread.user_id);
                                // console.log("user name: ",user_name);
                                return <NavLink className={"ThreadsListItem-Link"} key={thread.id}
                                                to={`/sections/${currentSection.code ? currentSection.code : currentSection.title}/${thread.id}`}>
                                    { <ThreadsListItem title={thread.title} user_name={""} content={thread.content}/>}
                                </NavLink>
                            })
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state =>{
    return {
        currentSection: state.sections.currentSection,
        threads: state.threads.threads,
        isThreadsLoading: state.threads.loading,
        threadAddedFlag: state.threads.threadAddedFlag
    }
};

const mapDispatchToProps = dispatch => {
    return{
        getThreads: (section_id) => {dispatch(getThreads(section_id))},
        resetThreadAddedFlag: () => {dispatch(resetThreadAddedFlag())}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ThreadsList);