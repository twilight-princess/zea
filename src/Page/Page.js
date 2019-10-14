import React, { useState } from 'react';
import PropTypes from 'prop-types';

class Page extends React.Component {
  state = {
    component: this.props.component
  }
  render() {
    return (
      <div className="Page">
        {this.state.component}
      </div>
    )
  }
}

Page.propTypes = {
  component: PropTypes.element.isRequired
}

export default Page