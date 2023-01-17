import jwt from '../utils/jwt.js';

export default (req, res, next) => {
  try {
    if (req.method != 'GET' && req.url != '/admin') {
      let token = req.headers.token;
      jwt.verify(token);
    }
    next();
  } catch (error) {
    res.sendStatus(401);
  }
}