import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

const Success = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/')
    }, 2000);
  }, [history]);

  return (
    <div className="container">
      <FiCheckCircle size={48} color='#2FB86E' />
      <h2>Cadastro concluído!</h2>
    </div>
  );
};

export default Success;
