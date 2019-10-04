import React from 'react';
import './App.css';
import UserCard from './components/UserCard/UserCard';
import Followers from './components/Followers/Followers';


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
          <h1>GitHub UserCards</h1>
          <UserCard key={this.state.userData.login} {...this.state.userData} />
          <Followers followers={this.state.followers} />
       </>
    )
  }
}


export default App;
