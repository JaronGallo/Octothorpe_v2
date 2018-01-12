import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

console.log("running client/src/pages/detail/detail.js");
class Detail extends Component {
  state = {
    video: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/videos/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getVideo(this.props.match.params.id)
      .then(res => this.setState({ video: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            
              <h3>
                {this.state.video.title} 
              </h3>
              <h4>{this.state.video.description} </h4>
             
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            
            <div className="video-detail col-md-8">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={this.state.video.url}></iframe>
              </div>
              <div className="details">
                <div>{this.state.video.description}</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Videos Lists</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Detail;