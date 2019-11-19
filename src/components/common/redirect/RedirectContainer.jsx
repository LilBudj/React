import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export const RedirectContainer = (ComponentName) => {
  class FirstContainer extends React.Component{
      render = () => {
          if (!this.props.isAuth) {
              return(<Redirect to={'/login'}/>)
          }
          return(<>
              <ComponentName {...this.props}/>
              </>
          )
      }
  }
  return connect(mapStateToProps)(FirstContainer)
};