const createError = err => {
  if (err.response) {
    return {
      message: err.response.data.message || err.response.data.error_description,
      status: err.response.status,
      error: err
    };
  }
  return {
    message: err.message || "something went wrong",
    status: 500,
    error: err
  };
};

module.exports = {
  createError
};
