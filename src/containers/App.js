// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators, createStore } from 'redux';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import * as managementActions from '../actions/managementActions';
import managementAppState from '../reducers/management';

let store = createStore(managementAppState);
store.subscribe(() => {
  console.log(store.getState())
  
});


class App extends React.Component {
   
  render() {
    const { managementAppState, actions } = this.props;
    return(
      <div>
        <Container store={store} /> 
      </div>
    );          
  }
}

App.propTypes = { 
};

function mapStateToProps(state) {
  return {
    managementAppState: state.managementAppState 
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(managementActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
