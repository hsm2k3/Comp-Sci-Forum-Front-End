import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { setCurrentThread } from '../../redux/actionCreators/threads_actionCreators';
import PostsList from '../PostsList';
import SectionsPageHeader from "../SectionsPageHeader";
import ThreadsListItem from '../ThreadsListItem';
// import PropTypes from 'prop-types';

class ThreadsPage extends Component {

	componentDidMount() {
		const thread = this.props.match.params.thread;
		const { setCurrentThread } = this.props;

		if(thread)
			setCurrentThread(thread);
	}

	componentDidUpdate(prevProps) {
		const thread = this.props.match.params.thread;
		const prevThread = prevProps.match.params.thread;
		const { setCurrentThread } = this.props;

		if(thread !== prevThread) {
			setCurrentThread(thread);
		}
	}


	render(){
		const { currentSection, currentThread } = this.props;

		return(

			<div id={"ThreadsPage"}>
				{
					currentSection && currentThread &&
						<Fragment>
							<SectionsPageHeader section={currentSection}/>
							<ThreadsListItem class={"ThreadsListItem-NoHover"} title={currentThread.title}
                                             user_id={currentThread.user_id} content={currentThread.content}/>
							 <div className="orangeBorder">
								 <ul className={'PostsList'}>
									 {
										 currentThread && <PostsList posts={currentThread.Posts} />
									 }
								 </ul>
							 </div>
						</Fragment>
				}
			</div>
		);
	};
}

const mapStateToProps = state => {
	return {
		currentSection: state.sections.currentSection,
		currentThread: state.threads.currentThread
	}
};

const mapDispatchToProps = dispatch => {
	return {
		setCurrentThread: (threadId) => dispatch(setCurrentThread(threadId))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadsPage);