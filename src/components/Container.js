import React, {PropTypes} from 'react';
import {ProfileList} from "./ProfileList";
import {ActivityList} from "./ActivityList"; 
import {Header} from "./Header";


class Container extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return( 
      <div>
        <Header />
        <ProfileList {...this.props} />
        <ActivityList {...this.props} /> 
      </div>
    );
  }
}


export default {Container};