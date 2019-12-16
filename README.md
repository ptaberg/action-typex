# Action Typex
**ActionTypex** is a library which helps you generate action types in your flux architecture. It contains high-order functions and functions which get your arguments and return an object with required values which contain action types into your project.

This library is very good for legacy project with pure Redux, where thousands strings of action types.

## configureActionTypes
```javascript
// Import all functions from NPM package
import { configureActionTypes } from 'action-typex';

export const actionTypes = configureActionTypes({
  postfix: ['SUCCESS', 'ERROR', 'LOADING'], 
  separator: '/'
});
```

## createActionTypesGroup
```javascript
import { createActionTypesGroup } from 'action-typex';
import { actionTypes } from './path/to/actions';

const actionTyper = createActionTypesGroup(actionTypes);

export const paymentTypes = actionTyper('MAKE_PAYMENT', 'GET_TOKEN');
```

## createStaticActions
```javascript
import { createStaticActions } from 'action-typex';

const profileTypes = createStaticActions('SET_VISABILITY', 'GET_NAME');
```

## combineActionTypes
```javascript
// actionsTypes.js

import { combineActionTypes } from 'action-typex';
import { paymentTypes } from './path/actionTypers/payment';
import { profileTypes } from './path/staticActions/profile;

const actionTypes = combineActionTypes(
  paymentTypes,
  profileTypes
)

export default actionTypes;
```

As result of *combineActionTypes* you can see:
```javascript
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
