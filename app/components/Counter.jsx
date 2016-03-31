var React = require('react');
var { connect } = require('react-redux');

var Button = require('./Button.jsx')

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>

        <Button type="INCREMENT" value="+" />
        <Button type="DECREMENT" value="-" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.counter
  };
}

module.exports = connect(mapStateToProps, {})(Counter)
