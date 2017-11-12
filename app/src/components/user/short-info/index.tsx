import * as React from 'react';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import {
  Persona,
  PersonaSize,
  PersonaPresence
} from 'office-ui-fabric-react/lib/Persona';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { Label } from 'office-ui-fabric-react/lib/Label';

const personalDetais = {
  imageUrl: 'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/20915449_10155767642135086_3517480515076442985_n.jpg?oh=8e03e25dc2b56d6955b1b6755a4dd5c6&oe=5A96FAEA',
  primaryText: 'Krishna Kumar',
  secondaryText: 'Bangalore, Karnataka',
  tertiaryText: 'Verified',
  optionalText: 'The car dealer'
};

export default class UserShortInfo extends React.Component<React.Props<UserShortInfo>, { renderPersonaDetails?: boolean; }> {
  constructor(props: any) {
    super(props);
    this.state = {
      renderPersonaDetails: true
    };
  }

  public render() {
    let { renderPersonaDetails } = this.state;

    return (
      <div>
        <Persona
          { ...personalDetais }
          hidePersonaDetails={ !renderPersonaDetails }
          presence={ PersonaPresence.online }
        />
      </div >
    );
  }
}
