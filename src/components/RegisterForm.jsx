import { useState } from 'react';
import { register } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input type="text " name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        email:
        <input
          type="email "
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        password:
        <input
          type="password "
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};
