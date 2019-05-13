import React, {Component} from 'react';
import { connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {Button, FormControl} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import {addThread} from "../redux/actionCreators/threads_actionCreators";


class ThreadsListNewItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            title_input: null,
            content_input: null
        }
    }

    handleChange_title = event => {
        event.preventDefault();
        this.setState({title_input: event.target.value})
    };

    handleChange_content = event => {
        event.preventDefault();
        this.setState({content_input: event.target.value})
    };

    handleSubmit = event => {
        const {currentSection, addThread} = this.props;
        const {title_input,content_input} = this.state;

        event.preventDefault();
        addThread(title_input,content_input,1,currentSection.id); // todo: remove hard-coded user_id and replace with logged in user once login works

    };

    render(){
        const {props} = this;

        return(
            <form onSubmit={event => this.handleSubmit(event)} className={props.class ? props.class : `ThreadsListNewItem`}>
                <div className={"ThreadsListNewItemButton"}>
                    <Button variant="dark" type="submit">
                        <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                </div>
                <div className={"ThreadsListItemBody"}>
                    <div className={"ThreadsListItemHead"}>
                        <div className={"ThreadsListItemTitle"}>
                            <FormControl onChange={(event) => this.handleChange_title(event)} type="text" placeholder="Thread Title..." className="mr-sm-2" />
                        </div>
                    </div>
                    <div className={"ThreadsListItemContent"}>
                        <FormControl onChange={(event) => this.handleChange_content(event)} type="text" placeholder="Description..." className="mr-sm-2" />
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentSection: state.sections.currentSection,
        threadsLoading: state.threads.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addThread: (title, content, user_id, section_id) => {dispatch(addThread(title,content,user_id,section_id))}
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ThreadsListNewItem));