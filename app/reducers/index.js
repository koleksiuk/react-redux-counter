import { combineReducers } from 'redux'
import counter from './counter.js'

const counterApp = combineReducers({
  counter
})

module.exports = counterApp
