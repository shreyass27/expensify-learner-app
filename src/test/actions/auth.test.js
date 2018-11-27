import { login, logOut  } from '../../actions/auth';

test('should return login action object', () => {
  const uid = 'abc123';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should return logout action object', () => {
  const action = logOut();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});