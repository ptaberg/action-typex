# Action Typex
> **ActionTypes** is a library which helps you generate action types in your flux architecture. It contains high-order functions and functions which get your arguments and return an object with required values which contain action types into your project.

## Example
```javascript
// 1. Import all functions from NPM package
// P.S. Here is a CommonJS, but using with bundler you can use `import`
import {
  configureActionTypes,
  createActionTypesGroup,
  combineActionTypes,
  createStaticActions
} from 'action-typex';

// 2. Generate some function for generating your action types series using configureActionTypes()
// You can use initialConfig or your own config as object {postfix, separator}
const asyncThunkActionTypes = configureActionTypes();

// 3. createActionTypesGroup returns another function using HOF you get from configure,
// and you can set arguments for getting action types you need
createActionTypesGroup(asyncThunkActionTypes)('MAKE_PAYMENT', 'GET_TOKEN'),

// 4. createStaticActions returns an object with `key = value` using every argument
createStaticActions('SET_VISABILITY', 'GET_NAME')

// 5. And combineActionTypes helps you to combine all your generations into one object for export
combineActionTypes(
  createActionTypesGroup(asyncThunkActionTypes)('MAKE_PAYMENT', 'GET_TOKEN'),
  createStaticActions('SET_VISANILITY', 'GET_NAME') 
)
// {
//    MAKE_PAYMENT_SUCCESS: 'MAKE_PAYMENT/SUCCESS',
//    MAKE_PAYMENT_ERROR: 'MAKE_PAYMENT/ERROR',
//    MAKE_PAYMENT_LOADING: 'MAKE_PAYMENT/LOADING',
//    GET_TOKEN_SUCCESS: 'GET_TOKEN/SUCCESS',
//    GET_TOKEN_ERROR: 'GET_TOKEN/ERROR',
//    GET_TOKEN_LOADING: 'GET_TOKEN/LOADING',
//    SET_VISANILITY: 'SET_VISANILITY',
//    GET_NAME: 'GET_NAME'
// }
```
