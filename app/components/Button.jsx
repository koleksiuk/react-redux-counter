var React = require('react');
var { connect } = require('react-redux');

class Button extends React.Component {
  render() {
    return <button
      onClick={e => {
        e.preventDefault
        this.props.onClick()
      }}
    >
      {this.props.value}
    </button>
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: ownProps.type })
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Button)
