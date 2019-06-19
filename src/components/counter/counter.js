import React from 'react';
/**
 * Counter that holds the current count in state with methods to increment and decrement it.
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    e.preventDefault();
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = e => {
    e.preventDefault();
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
    } else if (count < 0) {
      polarity = 'negative';
    }
    this.setState({ count, polarity });
  }

  render() {
    let classes = ['count', this.state.polarity].join(' ');
    return (
      <section className="counter">
        <span className={classes}>{this.state.count}</span>
        <hr />
        <a href="/" className="down-clicker" onClick={this.handleDown}>
          -
        </a>
        <a href="/" className="up-clicker" onClick={this.handleUp}>
          +
        </a>
      </section>
    );
  }
}

export default Counter;
