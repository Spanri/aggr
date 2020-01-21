const middleware = {}

middleware['authFalse'] = require('../middleware/authFalse.js');
middleware['authFalse'] = middleware['authFalse'].default || middleware['authFalse']

middleware['authTrue'] = require('../middleware/authTrue.js');
middleware['authTrue'] = middleware['authTrue'].default || middleware['authTrue']

export default middleware
