import * as React from 'react';

class PlainLayout extends React.Component {
  render() {
    return (
      <div className="container bing">
        {
          this.props.children
        }
      </div>
    )
  }
}

export default PlainLayout;