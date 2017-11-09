/*import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import {
  PlaneLayout
} from '../../components';
import './index.css';
class LoginView extends React.Component {
  @autobind
  private _onChanged(text: string) {
    console.log(text);
  }
  render() {
    return (
      <PlaneLayout>
          <div className="ms-Grid bing-login-bg">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col">
                <div className="bing-middle" >
                  <div className="bing-login">
                    <div className="ms-font-xl ms-textAlignLeft">Login
                    </div>
                    <div className='bing-login-id'>
                      <TextField
                        label='TextField with an icon'
                        iconProps={ { iconName: 'Calendar' } }
                        onChanged={ this._onChanged }
                      />
                    </div>
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
*/

import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

export default class LoginView extends React.Component<any, any> {
  public render() {
    return (
      <div className='ms-TextFieldExample'>
        <TextField
          label='TextField with an icon'
          iconProps={ { iconName: 'Calendar' } }
          onChanged={ this._onChanged }
        />
      </div>
    );
  }

  @autobind
  private _onChanged(text: string) {
    console.log(text);
  }
}