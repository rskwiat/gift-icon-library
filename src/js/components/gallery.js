const styles = require('@scss/main.scss');

import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { loadIcons, openModal } from '../actions';

class Gallery extends Component {
  static propTypes = {
    loadIcons: Proptypes.func,
    openModal: Proptypes.func,
    gallery: Proptypes.array,
  }

  componentDidMount() {
    this.props.loadIcons();
  }

  loadGallery = (gallery) => {
    return gallery.map((content, i) =>
      <li key={`${i}-${content.name}`}
        onClick={() => this.props.openModal(content)}
      >
        <img
          src={content.svgURL}
          alt={content.name}
          width="45px"
          height="45px"
        />
      </li>
    );
  }

  render() {
    const {
      gallery,
    } = this.props;

    return (
      <div className={`container ${styles['gallery']}`}>
        <h3>Gallery Icons</h3>
        <ul>
          {this.loadGallery(gallery)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.gallery,
  };
}

export default connect(
  mapStateToProps, { loadIcons, openModal }
)(Gallery);
