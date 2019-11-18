import React from 'react'
import {Redirect} from "react-router-dom";

export const RedirectContainer = (ComponentName, isAuth) => {
  return class extends React.Component{
      render = () => {
          if (!isAuth) {
              return(<Redirect to={'/login'}/>)
          }
          return(<>
              <ComponentName {...this.props}/>
              </>
          )
      }
  }
};