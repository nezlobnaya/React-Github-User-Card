import React from 'react';
import styled from 'styled-components';
import '../../index.css'


const Card = styled.div`
    background: papayawhip;
    margin: 10px;
    padding: 25px; 
    width: 300px;
    text-align: center;
    border-radius: 0.75rem;
    box-shadow: 10px 10px 5px grey;
`

const Thumbnail = styled.img`
    height: 100px;
    border-radius: 80%`


 const UserCard = props => {
    console.log('UserCard', props)
    return (
        <Card>
            <div class='List'>
                <Thumbnail src={props.avatar_url} alt='UserImage' />
                <h2>{props.name}</h2>
                <h2>{props.login}</h2>
                <a href={props.html_url}>Click for details</a>
            </div>
        </Card>
    )
}

export default UserCard