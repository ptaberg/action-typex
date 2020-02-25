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

describe('combineActionTypes', () => {
    it('should return an object', () => {
      expect(typeof resultOfCombined).toBe('object');
    });
    it('should return a number of keys equals a sum number of keys of arguments', () => {
        expect(Object.keys(resultOfCombined).length).toBe(5);
      });
});
