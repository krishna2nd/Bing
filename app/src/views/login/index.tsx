import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import {
  PlaneLayout
} from '../../components';
import  './index.css';

class LoginView extends React.Component {
  render() {
    return (
      <PlaneLayout >
          <div className="ms-Grid">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col">
                <div className="middle" >
                  <div className="login">
                    <br/>
                    <div className='icon-wraper'>
                      <Icon iconName='Contact' className='user-profile' />
                    </div>
                    <br/>
                    <br/>
                    <div className="fb-login-button" data-width="370px" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
                    <div className="or" >
                      OR
                    </div>
                    <div className='userId'>
                      <TextField
                        placeholder='Email id'
                        iconProps={ { iconName: 'Contact' } }
                        onChanged={ this._onChanged }
                      />
                    </div>
                    <div className='userPwd'>
                      <TextField
                        placeholder='Password'
                        iconProps={ { iconName: 'More' } }
                        onChanged={ this._onChanged }
                      />
                    </div>
                    <DefaultButton
                      className="login-btn"
                      primary={ true }
                      data-automation-id='login'
                      disabled={ false }
                      checked={ false }
                      text='LOGIN'
                      onClick={ this._loginUser }
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
      </PlaneLayout>
    )
  }
  @autobind
  private _onChanged(text: string) {
    console.log(text);
  }
  @autobind
  private _loginUser(e: any) {
    console.log(e);
  }
}

export default LoginView;