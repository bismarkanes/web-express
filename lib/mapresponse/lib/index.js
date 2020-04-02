const { isNil, } = require('lodash');

const mapToDataResponse = ({ data = null, status, error = null }) => {
  if (Array.isArray(data)) {
    return {
      data,
      status,
      error: error ? (error.message ? error.message : error) : null
    };
  }

  return {
    data: isNil(data) ? [] : [data],
    status,
    error: error ? (error.message ? error.message : error) : null
  };
};

module.exports = {
  mapToDataResponse,
};
