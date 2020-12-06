const mapToDataResponse = param => {
  return {
    success: param.success === false ? false : true,
    payload: Array.isArray(param.payload) ? { data: param.payload } : param.payload,
    message: typeof param.message === 'string' ? param.message : undefined,
    error: param.error ? param.message : undefined,
    metadata: param.metadata ? param.metadata : undefined,
  };
};

module.exports = {
  mapToDataResponse,
};
