import React, {Component} from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions/actions';

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput value={this.props.counter} />

        <CounterControl label="Increment" onClick={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" onClick={this.props.onDecrementCounter} />
        <CounterControl label="Add 10" onClick={this.props.onAddCounter} />
        <CounterControl label="Subtract 15" onClick={this.props.onSubtractCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map(storedResult => {
            return (
              <li
                key={storedResult.id}
                onClick={() => this.props.onDeleteResult(storedResult.id)}>
                {storedResult.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
    storedResults: state.results.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 10 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 15 }),

    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
