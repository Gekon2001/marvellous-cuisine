import _pick from 'lodash/pick';
import User from '../models/user';
import { jwt } from '../utils';

export default function(app) {
  app.post('/user/signin', (req, res) => {
    const { email, phone, password } = req.body;
    User.find({
      email,
      phone,
      password,
    }).exec(function(err, user) {
      if (err) return console.error(err);
      if (!user) return res.status(404).send({error: 'User not found'});
      const userData = _pick(user,  ['firstName', 'lastName', 'logo']);
      jwt.sign({userData}).then((token) => {
        res.status(200).send(Object.assign(userData, { token }));
      }).catch((err) => {
        res.status(500).send({ error: err, })
      });
      res.status(200).send();
    });
  });

  app.post('/user/signup', (req, res) => {
    const userData = _pick(req.body, ['firstName', 'lastName', 'email', 'password', 'phone', 'logo']);
    const user = new User(userData);
    user.save(function(err, saved) {
      if (err) return console.error(err);
      const savedData = _pick(saved,  ['email', 'phone', 'logo', 'firstName', 'lastName']);
      jwt.sign(savedData).then((token) => {
        savedData.token = token;
        res.status(200).send(savedData);
      }).catch((error) => {
        res.status(500).send({error});
      });
    });
  });
}
