import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import MyFriends from './MyFriends';




class App extends Component {
  render() {
      return (
        <div>
          <NavBar />
          <Flash />
        <FetchUser>
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <ProtectedRoute exact path='/my_friend' component={MyFriends} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;



// const StyledCard = styled(Card)`
//   height: 100px;
// `

// render() {
//   return (
//     <AppContainer>
//       <Button onClick={this.getRepos}>See Friends!</Button>
//       <HeaderText size="large">Myspace Pretend</HeaderText>
//       <Segment as={Transparent}>
//         <SearchBox
//           onChange={this.search}
//           innerRef={ n => this.searchTerm = n }
//         />
//         <Grid>
//           <Grid.Row>
//             { this.state.visible.map( r => {
//                 const CardType = r.open_issues > 0 ? IssueCard : StyledCard 
//                 return (
//                   <Grid.Column key={r.id} width={4}>
//                     <CardType>
//                       <Card.Content>
//                         <Card.Header>
//                           <Truncated>
//                             { r.full_name }
//                           </Truncated>
//                         </Card.Header>
//                         <Card.Meta>
//                           { r.description }
//                         </Card.Meta>
//                         { r.stargazers_count > 0 &&
//                           <Star>
//                             <Glower name="star" />
//                           </Star>
//                         }
//                       </Card.Content>
//                       <Card.Content extra>
//                         <ButtonLink
//                           href={r.html_url}
//                           target="_blank"
//                           rel="noopener norefferer"
//                         >
//                           View
//                         </ButtonLink>
//                       </Card.Content>
//                     </CardType>
//                   </Grid.Column>
//                 )
//               })
//             }
//           </Grid.Row>
//         </Grid>
//       </Segment>
//       <Segment as={Transparent}>
//         <HeaderText size="small">Contact</HeaderText>
//       </Segment>
//     </AppContainer>
//   )
// }

