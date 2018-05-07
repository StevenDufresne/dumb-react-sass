import React, { Component } from 'react';

export class Logo extends Component {

  render() {
    return (
      <a href={ this.props.href } className="c-logo" rel="home" { ...this.props }>
        <img className="c-logo__img" src={ this.props.src } alt={ this.props.alt } />
      </a>
    );
  }
}

