import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth';
import { ContextGlobal } from '../../context/global';

import './styles.css';

const UserLogin = () => {
  const { callAuth, loadingAuth } = useContext(AuthContext);
  const { setLoadingAPI } = useContext(ContextGlobal);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    setLoadingAPI(false);
    callAuth(email, pass);
  };
  
  return (
    <section id='body' className='flex'>
      <section id='form' className='flex'>
        <span className="icon flex">
          <span 
            className="material-symbols-outlined"
            style={{fontSize: 62, color: '#FFBF00'}}
          >account_circle</span>
        </span>

        <h1>sign in</h1>
        <p>Hello there! Sign in and start managing your Bank items</p>

        <form onSubmit={handleSubmit} className='flex'>
          <label htmlFor="email">E-mail</label>
          <input
            type="email" 
            name="email" 
            id="email"
            placeholder="exemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="pass">Password</label>
          <input 
            type="password" 
            name="pass" 
            id="pass"
            placeholder="********"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            minLength={6}
            maxLength={10}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
};

export default UserLogin;