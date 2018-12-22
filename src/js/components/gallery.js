import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './loading';
import { loadIcons } from '../actions';

class Gallery extends Component {

  componentDidMount() {
    this.props.loadIcons();
  }

  loaded = () => {
    return 'llo';
  }

  render() {
    const {
      gallery,
    } = this.props;

    return gallery ? this.loaded() : <Loading />;
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.gallery,
  };
}

export default connect(
  mapStateToProps, { loadIcons }
)(Gallery);
