const mapToDataResponse = param => {
  return {
    success: param.success === false ? false : true,
    ...param.payload && { payload: Array.isArray(param.payload) ? { data: param.payload } : param.payload },
    ...param.message && { message: param.message },
    ...param.error && { error: param.error },
    ...param.metadata && { metadata: param.metadata },
  };
};

module.exports = {
  mapToDataResponse,
};
