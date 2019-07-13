const {
    configureActionTypes,
    createActionTypesGroup,
    combineActionTypes,
    createStaticActions
} = require('../');

const resultOfConfigure = configureActionTypes();
const resultOfGroup = createActionTypesGroup(resultOfConfigure)('REQUEST');
const resultOfStatic = createStaticActions('SET', 'GET');
const resultOfCombined = combineActionTypes(resultOfGroup, resultOfStatic);

describe('configureActionTypes', () => {
    it('should return the function', () => {
      expect(typeof configureActionTypes()).toBe('function');
    });
});

describe('createActionTypesGroup', () => {
    it('should return the object with action types', () => {
        expect(typeof resultOfGroup).toBe('object');
    });
    it('should return action types number equals to initial config', () => {
        expect(Object.keys(resultOfGroup).length).toBe(3);
    });
});

describe('createStaticActions', () => {
    it('should return an object with number of keys equals number of arguments', () => {
      expect(Object.keys(resultOfStatic).length).toBe(2);
    });
});

describe('combineActionTypes', () => {
    it('should return an object', () => {
      expect(typeof resultOfCombined).toBe('object');
    });
    it('should return a number of keys equals a sum number of keys of arguments', () => {
        expect(Object.keys(resultOfCombined).length).toBe(5);
      });
});