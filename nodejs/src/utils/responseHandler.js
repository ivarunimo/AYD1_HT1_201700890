export const responseHandler = (res, status, data) => {
  res.status(status).send({ status, data });
};
