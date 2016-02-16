import React, {PropTypes} from 'react';
import * as managementActions from '../actions/managementActions';

  
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  /*
  handleClick(e) {
    console.log("clicked on "+e.currentTarget.className);
    if(e.currentTarget.className == "name" && !this.state.isEditingName) {
      this.setState({ isEditingName: true });
      this.myTextInput.focus();

    } else if(e.currentTarget.className == "subname" && !this.state.isEditingSubname) {
      this.setState({ isEditingSubname: true });
    } else if(!this.state.isEditingPrice){
      this.setState({ isEditingPrice: true });
    }
  }
  loseFocus(e) {
    console.log("blur on" );
    console.log(e)
    if(e.currentTarget.className == "name-input") {
      this.setState({ isEditingName: false });
    } else if(e.currentTarget.className == "subname-input") {
      this.setState({ isEditingSubname: false });
    } else {
      this.setState({ isEditingPrice: false });
    }

  }
  */
  
  
  render() {
    /*let renderedName =  this.state.isEditingName ? 
      <p className="name"> <input type="text" ref={(ref) => this.myTextInput = ref} className="name-input" value={this.state.name} onBlur={this.loseFocus.bind(this)}/></p> :
      <p className="name" onClick={this.handleClick.bind(this)}> {this.props.name} </p>;
      */
    
    return (
      <div className="profile">
        <a href="#" onClick={e => {e.preventDefault; this.props.onclick(e)} }><img className="circled" id={this.props.id} src="https://avatars3.githubusercontent.com/u/6303966?v=3&s=460" title={this.props.name} 
        /></a>
        <p className="name"> {this.props.name} </p>
        <p className="subname"> {this.props.subname} </p>
        <p className="price"> ${this.props.price}/h</p>
      </div>
    );
  }
}

Profile.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  subname: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default {Profile};
