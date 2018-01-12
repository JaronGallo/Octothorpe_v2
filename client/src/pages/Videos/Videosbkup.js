import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

console.log("running client/src/pages/Videos/Videos.js");

class Videos extends Component {
  state = {
    videos: [],
    videoId: "",
    title: "",
    url: "",
    description: "",
    img: ""
  };
  componentDidMount() {
    this.loadVideos();
  }
  loadVideos = () => {
    API.getVideos()
      .then(res =>
        this.setState({ videos: res.data, 
          videoId: " ", 
          title: "", 
          url: "", 
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
    if (this.state.title && this.state.video) {
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
  render() {
     return (
      <Container fluid>
        <Row>
          <Col size="md-8">
            <Jumbotron>
              <h1>select videos?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.videoId}
                onChange={this.handleInputChange}
                name="videoId"
                placeholder="Video (required)"
              />
              <Input
                value={this.state.titler}
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
            </form>
          </Col>
          <Col size="md-4 sm-12">
            <Jumbotron>
              <h1>Videos On My List</h1>
            </Jumbotron>
            {this.state.videos.length ? (
              <List>
                {this.state.videos.map(video => (
                  <ListItem key={video._id}>
                    <Link to={"/videos/" + video._id}>
                      <strong>
                        {video.title}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteVideo(video._id)} />
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