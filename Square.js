import React from 'react';

export default class Square extends React.Component {
  constructor(data){
    super(data)
    this.state = data.data;
  }
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        &nbsp;{this.state.label}&nbsp;
      </button>
    );
  }
}