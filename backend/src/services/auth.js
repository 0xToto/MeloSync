const argon2 = require("argon2");

const HashPassword = async (req, res, next) => {
  try {
    const hash = await argon2.hash(req.body.password, {
      type: argon2.argon2id,
      memoryCost: 2 ** 16,
      hashLength: 50,
    });

    // res.body.password = req.body.password;
    req.body.password = hash;
    

    next();
  } catch (err) {
    console.info(err);
  }
};


const checkPassword = async (req, res, next) => {
  console.info(req.body, res.body)
  argon2.verify(
    req.body.password,
    req.body.password,
    {
      type: argon2.argon2id,
      memoryCost: 2 ** 16,
      hashLength: 50,
    },
    function (err, match) {
      if (err) {
        console.error(err);
      }
      if (match) {
        console.info("password match");
        next();
      } else {
        console.info("password doesn't match");
      }
    }
  );
};


module.exports = { HashPassword, checkPassword };
