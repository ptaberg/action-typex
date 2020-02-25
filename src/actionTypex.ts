interface Config {
  postfix: string[],
  separator: string
}

type ActionType = string;

const initialConfig: Config = {
  postfix: ['SUCCESS', 'ERROR', 'LOADING'], 
  separator: '/'
}

const configureActionTypes = ({postfix, separator}: Config = initialConfig) => 
  (actionType: ActionType) => {
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

const createStaticActions = (...actionsTypes: ActionType[]) => {
  let result = {};

  actionsTypes.map(action => result[action] = action);

  return result;
}

const combineActionTypes = (...actionTypes: ActionType[]): Object => {
  let result = {};

  actionTypes.map(actionType => result = {...result, ...actionType: ActionType[]});

  return result;
}
  
export default {
  initialConfig,
  configureActionTypes,
  createActionTypesGroup,
  combineActionTypes,
  createStaticActions
}
