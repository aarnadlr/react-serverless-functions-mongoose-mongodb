require('dotenv').config();

module.exports = (req, res) => {

  res.json({
		value: `Value from ${req.query.name}`,
		// reqQuery: req.query.age,
		// reqCookies: req.cookies,
		// reqBody: req.body?true:false

  });
};
