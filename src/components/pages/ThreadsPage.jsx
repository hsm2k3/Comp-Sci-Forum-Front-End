import React, {Component, Fragment} from 'react';
import PostsList from '../PostsList';
import SectionsPageHeader from "./SectionsPage";
// import PropTypes from 'prop-types';

class ThreadsPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			thread: [],
			hasErrored: false,
			isLoading: false
		};
	}


	componentDidMount() {
		const thread = this.props.match.params.thread;
		
		this.fetchThreadData(thread);	
		{console.log('before mount', thread)}
	}

	componentDidUpdate(prevProps) {
		const thread = this.props.match.params.thread;
		const prevThread = prevProps.match.params.thread;
		if(thread !== prevThread) {
			this.fetchThreadData(thread);
		}
	}

	fetchThreadData = (searchValue) => {
		this.setState({isLoading: true});
		fetch(`/api/threads/id/${searchValue}`)
			
			.then( res => {
				if(!res.ok)
					throw Error(res.statusText);
				this.setState({isLoading:false});
				return res.json();
			})
			
			.then(data => {
				let thread = {...this.state.thread};
				this.setState({thread : data });
				
			})
			.catch(() => {
			console.error('ThreadsPage: unable to fetch data');
			this.setState({hasErrored:true});
			});

	};

	getCurrentState = () => {
		let thread = {...this.state.thread};
		return thread;
	};

		render(){
			const thread = this.getCurrentState();

			return(

				<div id={"ThreadsPage"}>
					{
						thread &&
							<Fragment>
								<SectionsPageHeader section={section}/>
								<ul className={'PostsList'}>
									{
										thread.Posts && <PostsList posts={thread.Posts} />
									}
								</ul>
							</Fragment>
					}
				</div>
			);
		};
}


export default ThreadsPage;