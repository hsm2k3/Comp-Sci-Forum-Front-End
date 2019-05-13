import React, {Component} from 'react';
import { connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {Button, FormControl} from "react-bootstrap";
import {withRouter} from "react-router-dom";


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
        const {currentSection} = this.props;

        event.preventDefault();
        fetch("/api/threads", {
            method: "post",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                title: this.state.title_input,
                content: this.state.content_input,
                user_id: 1, // todo: remove hard-coded user_id and replace with logged in user once login works
                section_id: currentSection.id
            })
        })
            .then(response => {
                console.log(response);
                // return response.json();
            })
            .then(() => {
                this.props.history.push(`/sections/${currentSection.code ? currentSection.code : currentSection.title}`);
            })
            .catch(error => {
                console.log(error);
            })
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
        currentSection: state.sections.currentSection
    }
};

export default withRouter(connect(mapStateToProps)(ThreadsListNewItem));