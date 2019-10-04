import React from 'react';
import UserCard from '../UserCard/UserCard';

const Followers = (props) => {
    console.log('Followers Props', props)
    return(<>
        {props.followers.map(i => <UserCard key={i.login} {...i} />)}
         </>
        )
}

export default Followers;