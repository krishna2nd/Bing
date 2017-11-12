import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import {
  PlaneLayout,
  ToolBarLayout,
} from '../../components';

class DashBoard extends React.Component {
  render() {
    return (
      <ToolBarLayout >
          <div className="ms-Grid">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col">
              </div>
            </div>
          </div>
      </ToolBarLayout>
    )
  }
}

export default DashBoard;