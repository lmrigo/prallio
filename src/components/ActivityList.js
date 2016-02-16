import React, {PropTypes} from 'react';
import { Activity } from '../components/Activity';

class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.store.getState();
  }
  
  componentDidMount() {
    let subs = this.props.store.subscribe(() => {
      this.setState(this.props.store.getState());
       //this.forceUpdate();
    });
  }
  render() {    
      console.log("Rendering actv list");
      let totalSum = 0;
      let list = this.state.activities.map(act => {
          totalSum += act.hours * act.price;
          return <Activity name={act.name} hours={act.hours} price={act.price}  />;
        });
      
      
      return (
        <div className="inline"> 
          <table className="activityList">
          <tbody>
            <tr className="activity">
              <th>Member</th>
              <th>Hours</th>
              <th>Price</th>
              <th className="right">Total</th>
            </tr>
            {list}
            <tr className="activity">
              <td></td>
              <td></td>
              <td></td>
              <td className="right">Total: <span className="totalSum"> ${totalSum} </span></td>
            </tr>
            
          </tbody>
         </table>
       </div>
     );
   }
 }


export default {ActivityList};