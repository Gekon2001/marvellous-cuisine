const user = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',///!!!
};

const auth = {
  showAuthModal: false,
  token: '',
};

const order = {

};

export default {
  loading: false,
  showAuth: false,
  user,
  auth,
  products: [],
  contacts: [],
  order,
};