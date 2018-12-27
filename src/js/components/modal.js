const styles = require('@scss/main.scss');

import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

class Modal extends Component {
  static propTypes = {
    modal: Proptypes.object,
  }

  closeModal = () => {
    console.log('closing modal');
  }

  renderModal = () => {

    return (
      <div>
        <div onClick={this.closeModal()}>Close Button</div>
        rendering a modal
      </div>
    );
  }

  render() {
    const {
      modal,
    } = this.props;

    return modal ? this.renderModal() : <span />;
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
  };
}

export default connect(
  mapStateToProps, null
)(Modal);
