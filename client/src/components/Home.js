import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react'
// import Cards, { Card } from 'react-swipe-card';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setHeaders} from '../reducers/headers';

class Home extends Component {
  state = {friends: [] }

  componentDidMount() {
    axios.get('api/posts')
    .then(res => {
      this.props.dispatch(setHeaders(res.headers))
      this.setState({friends: res.data})
    })
  }



  render() {
    return (
      <div>
        <Card className="cards-root">
          { this.state.friends.map( friends =>
            <Card 
              key={friends.id}
              // onSwipeLeft={() => this.swipeLeft(cat.id) }
              // onSwipeRight={() => this.swipeRight(cat.id) }
            >
                <h2>{friends.title}</h2>
                <Image src={friends.avatar} />
                <h3>{friends.body}</h3>
              </Card>
            )
          }
        </Card>
        <Link to="/my_friend">My Friends</Link>
      </div>
    );
  }
}


{/* <Card>
    <h2>{friends.title}</h2>
    <Image src={friends.avatar} />
    <h3>{friends.body}</h3>
    <Card.Content>
    { this.state.friends.map( friends =>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card> */}

export default connect()(Home);
