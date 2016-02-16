import React, {PropTypes} from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import * as managementActions from '../actions/managementActions';

/* 
  TODO:
    - Adicionar filtro para procurar name ou subname
    - Adicionar botão "+" para criar novo membro
    - Campos editáveis
    - Drag and drop para campo de activity
*/
class ProfileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.store.getState();
    this.state.counter = 0;
   
  }
  

  
  pushMemberToActivity(id) {
    let member = this.props.store.getState().members.filter(m => m.id == id);
    this.props.store.dispatch(managementActions.addNewActivity({type: "ADD_NEW_ACTIVITY", member: member[0] }));
    this.setState(this.props.store.getState());
   }
  
  addMember(e) {
     let member = [{id: 0, name: "Jack", subname: "Developer", picture: "none", price: 40 , hours: 10},
     {id: 1, name: "John", subname: "Project Manager", picture: "none", price: 12 , hours: 18},
     {id: 2, name: "Bruce", subname: "Designer", picture: "none", price: 35 , hours: 20},
     {id: 3, name: "Walter", subname: "Outsourcer", picture: "none", price: 40 , hours: 30},
     {id: 4, name: "Roger", subname: "Developer", picture: "none", price: 18 , hours: 62}
      ];
     let action = managementActions.addNewMember({type: "ADD_NEW_MEMBER", member: member[this.state.counter % 5] });
     this.props.store.dispatch(action);
     this.setState(this.props.store.getState());
     this.setState({counter: this.state.counter+1});
   }
  render() {  
       var list = this.state.members.map(member => {
          return <Profile onclick={() => this.pushMemberToActivity(member.id)} id={member.id} 
                          name={member.name} subname={member.subname} 
                          picture={member.picture} price={member.price}/>;
        });
      return (
        <div className="profileList inline">
          <a href="#" className="icon icon-user-plus"
                   onClick={e => {
                     e.preventDefault()
                     this.addMember(e)
                   }}
                   ></a> 
          {list}
       </div>
     );
   }
 }
 
 export default {ProfileList};
//export default connect()(ProfileList)