const styles = require('@scss/main.scss');

import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal } from '@src/actions';

import CloseButton from './closeButton';
import Icon from './Icon';

class Modal extends Component {
  static propTypes = {
    modal: Proptypes.object,
    closeModal: Proptypes.func,
  }

  closeModal = () => {
    this.props.closeModal();
  }

  renderModal = (modal) => {
    return (
      <div className={styles['overlay']}>
        <CloseButton
          onClick={() => this.closeModal()}
        />
        <Icon
          name={modal.name}
          svg={modal.svgURL}
        />
      </div>
    );
  }

  render() {
    const {
      modal,
    } = this.props;

    return modal ? this.renderModal(modal) : <span />;
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
  };
}

export default connect(
  mapStateToProps, { closeModal }
)(Modal);
