import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Divider } from 'semantic-ui-react'
import axios from 'axios'
import { setHeaders } from '../reducers/headers';
import styled from 'styled-components';


const AppContainer = styled.div`
background: linear-gradient(to bottom right, white, purple);
`

class MyFriends extends React.Component {
  state = { friends: [] }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/add_friends')
      .then( ({ data, headers }) => {
        dispatch(setHeaders(headers))
        this.setState({ friends: data })
      })
  }

  render() {
    const { friends } = this.state
    return (
      <AppContainer>
        <Card.Group itemsPerRow={4}>
          { friends.map( friend =>
              <Card key={friend.id}>
                <Card.Content>
                  <Image src={friend.image} />
                  <Divider />
                  <Card.Header>
                    {friend.name}
                  </Card.Header>
                </Card.Content>
              </Card>
            )
          }
        </Card.Group>
      </AppContainer>
    )
  }
    
}

export default connect()(MyFriends)