import React from 'react';

class PlainLayout extends React.Component {
  render() {
    return (
      <div className="container">
        {
          this.props.children
        }
      </div>
    )
  }
}

export default PlainLayout;