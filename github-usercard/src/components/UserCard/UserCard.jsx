import React from 'react';


 const UserCard = props => {
    console.log('UserCard', props)
    return (
        <div>
            <img src={props.avatar_url} alt='UserImage' />
            <h2>{props.name}</h2>
            <h2>{props.login}</h2>
            <a href={props.html_url}>Profile link></a>
        </div>
    )
}

export default UserCard