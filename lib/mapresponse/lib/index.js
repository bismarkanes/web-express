const mapToDataResponse = ({ data = null, status, error = null }) => {
  if (Array.isArray(data)) {
    return {
      data,
      status,
      error: error ? (error.message ? error.message : error) : null
    };
  }

  return {
    data: [data],
    status,
    error: error ? (error.message ? error.message : error) : null
  };
};

module.exports = {
  mapToDataResponse,
};
