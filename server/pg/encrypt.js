const bcrypt = require('bcryptjs');

var password = 'abc123!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt,(err, hash) => {
    console.log(hash);
  });
});

const hashedPassword = '$2a$10$iWcZOE472YNwqRguITiRxeCMMLlYHVsK4YMgp8ef2FybN6zqyxFqK';

bcrypt.compare(password, hashedPassword, (err, result) => {
  console.log(result);
});
