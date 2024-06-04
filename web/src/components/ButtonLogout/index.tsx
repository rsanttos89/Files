import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import './styles.css'; // Importe seu arquivo de estilos CSS

const ButtonLogout = () => {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => { logout() };

  return (
    <footer className="footer">
      <button 
        onClick={() => handleLogout()} 
        className="button"
      >logout</button>
    </footer>
  );
};

export default ButtonLogout;