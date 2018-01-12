import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import logo from "../../octothorpeAsset-2.png";
import logo2 from "../../octothorpeAsset-3.png";
import "../../App.css";


console.log("running client/src/pages/Videos/Videos.js");

class Videos extends Component {
	state = {
		videos: [],
		video: {},
		videoId: "",
		title: "",
		url: "",
		description: "",
		img: "",
		notes: ["This is an example note.", "This is another example note.", "This is a really long example note. There are tons of words in it to test how a really long note might look. This could be very long and useless, but it's sole purpose is to test the limits of the comment box and make sure you can put extrememly long notes inside of it."],
	};
	componentDidMount() {
		this.loadVideos();
	}
	loadVideos = () => {
		API.getVideos()
			.then(res =>
				this.setState({
					videos: res.data,
					videoId: " ",
					title: "08 16 describes JSON format and usage",
					url: "https://www.youtube.com/embed/KjKQ_mpwebo",
					description: "",
					img: "",
				})
			)
			.catch(err => console.log(err));
	};

	deleteVideo = id => {
		API.deletevideo(id)
			.then(res => this.loadVideos())
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.title && this.state.description) {
			API.saveBook({
				videoId: this.state.videoId,
				title: this.state.title,
				url: this.state.url,
				description: this.state.description,
				img: this.state.img,
			})
				.then(res => this.loadBooks())
				.catch(err => console.log(err));
		}
	};

	getVideo = id => {
		API.getVideo(this.props.match.params.id)
			.then(res => this.setState({ video: res.data }))
			.catch(err => console.log(err));
	};
	handleSelectedVideo = (title, url) => {
		// event.preventDefault();
		console.log("videoSelected");
		let videoURL = url;
		let videoTitle = title;
		console.log('Title: ', videoTitle);
		console.log('URL: ', videoURL);
		this.setState({
			url: videoURL,
			title: videoTitle
		})
	}

	render() {
		console.log(this.state);

		return (
			<Container fluid>

			<div className="App">
				<header className="App-header">
				<Row>
					<br />
					<Col size="md-2"></Col>
					<Col size="md-2">
					<div className="logo-box text-center">
					<img src={logo} className="App-logo" alt="logo" />
					</div>
					</Col>
					<Col size="md-6">
					<img src={logo2} className="App-logo2" alt="logo" />
					</Col>
					<Col size="md-2"></Col>
					<br />
				</Row>
				</header>
				</div>
				<br />
				<br />

				<Row>
					<Col size="md-8">
						<Row>
							<Col size="md-12">
								<VideoPlayer info={this.state} />
							</Col>
						</Row>

						{/*} <form>
							<Input
								value={this.state.title}
								onChange={this.handleInputChange}
								name="title"
								placeholder="Title (required)"
							/>
							<TextArea
								value={this.state.description}
								onChange={this.handleInputChange}
								name="description"
								placeholder="Description (Optional)"
							/>
							<FormBtn
								disabled={!(this.state.videoId && this.state.title)}
								onClick={this.handleFormSubmit}
							>
								Submit Book
							</FormBtn>
						</form> */}
					</Col>
					<Col size="md-4 sm-12">
							<h1 className="text-center">Video List</h1>
						{this.state.videos.length ? (
							<List>
							
								{this.state.videos.map(video => (
									<ListItem key={video._id}>

										{/*} <Link to={"/videos/" + video._id}>
											<strong>
												{video.title}
											</strong>
										</Link> */}

										<p onClick={() => this.handleSelectedVideo(video.title, video.url)}>
											{video.title}

										</p>
									</ListItem>
								))}
							</List>
						) : (
								<h3>No Results to Display</h3>
							)}
					</Col>
				</Row>
			</Container>
		);
	}
}
export default Videos;