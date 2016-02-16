import React, {PropTypes} from 'react';

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    console.log("Rendering activity");
    let totalSum = this.props.hours * this.props.price;
      //<td className="name"> {this.props.name} </td>
    return( 
      <tr className="activity">
        <td className="name">
          <img className="circled" src="https://avatars3.githubusercontent.com/u/6303966?v=3&s=460" title={this.props.name} /> 
          <p>{this.props.name} </p> 
        </td>
        
        <td> {this.props.hours} </td>
        <td> ${this.props.price} </td>
        <td className="totalSum"> ${totalSum} </td>
        
      </tr>
      
    );
  }
}
Activity.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired
 };

export default {Activity};