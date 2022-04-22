const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  let token ="" ;
  let headers="";
  try {
     headers=req.headers.authorization;
     token =headers.split(' ')[1];
    const decodedToken = jwt.verify(token, 'tnDigital');
    const user = decodedToken.user;
    if (!user) {
      throw 'Invalid user ID';
    } else {
      req.user=user;
      next();
    }
  } catch (error) {
    res.status(401).json({
      error: error.message
    });
  }
};