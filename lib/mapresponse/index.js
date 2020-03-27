const { mapToDataResponse } = require('./lib');

module.exports = () => {
  return (req, res, next) => {
    res.JSON = (params) => res.json(mapToDataResponse(params));
    next();
  };
};
