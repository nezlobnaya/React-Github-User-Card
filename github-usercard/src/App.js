import React from 'react';
import UserCard from './components/UserCard/UserCard';
import Followers from './components/Followers/Followers';
import styled from 'styled-components';
import './index.css'


const UserList = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: space-between;
  justify-content: center;
 
`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      followers: []
   }
  }


  componentDidMount() {
    console.log('In CDM')
    this.fetchUser();
  }


  fetchUser = () => {
    const urls = [
      'https://api.github.com/users/nezlobnaya',
      'https://api.github.com/users/nezlobnaya/followers'
    ]
    Promise.all(urls.map(url => fetch(url)
        .then(res => res.json())
        .catch(err => console.error('Request failed', err))
    ))
    .then(data => this.setState({
      userData: data[0],
      followers: data[1]
    }))
    
  }




  render() {

    return (
      <>    
        <UserList>
          <div className='App'>
          <h1>GitHub UserCards</h1>
          <UserCard key={this.state.userData.login} {...this.state.userData} />
          <Followers followers={this.state.followers} />
          </div>
        </UserList>
        
       </>
    )
  }
}


export default App;
