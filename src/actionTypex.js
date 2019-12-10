const initialConfig = {
  postfix: ['SUCCESS', 'ERROR', 'LOADING'], 
  separator: '/'
}

const configureActionTypes = ({postfix, separator} = initialConfig) => actionType => {
  let resultObject = {};

  postfix.map(pf => resultObject[`${actionType}_${pf}`] = `${actionType}${separator}${pf}`);

  return resultObject;
}

const createActionTypesGroup = (actionTypeCreator) => (...actionTypes) => {
  let resultObject = {};

  actionTypes.map(actionType => {
    resultObject = {
      ...resultObject,
      ...actionTypeCreator(actionType)
    };
  })

  return resultObject;
}

const createStaticActions = (...actionsTypes) => {
  let result = {};

  actionsTypes.map(action => result[action] = action);

  return result;
}

const combineActionTypes = (...actionTypes) => {
  let result = {};

  actionTypes.map(actionType => result = {...result, ...actionType});

  return result;
}
  
module.exports = {
  initialConfig,
  configureActionTypes,
  createActionTypesGroup,
  combineActionTypes,
  createStaticActions
}
