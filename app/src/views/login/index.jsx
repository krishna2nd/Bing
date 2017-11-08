import React from 'react';
import {
  PlaneLayout
} from '../../components'
import './index.css'
class LoginView extends React.Component {
  render() {
    return (
      <PlaneLayout>
          <div className="ms-Grid bing-login-bg">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col">
                <div className="ms-textAlignCenter bing-middle" >
                  <div className="bing-login">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
      </PlaneLayout>
    )
  }
}

export default LoginView;;