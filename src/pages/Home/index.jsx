import { useEffect } from 'react';
import './style.css'
import api from '../../services/api';

function Home() {
  let users = []

  async function getUsers() {
    const { data } = await api.get('/usuarios');
    users = data;
  }

  useEffect(() => {
    getUsers();
  });

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>

        <input placeholder="nome" type="text" name="nome" />
        <input placeholder="idade" type="number" name="idade" />
        <input placeholder="email" type="email" name="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map(user => (
        <div className="card" key={user.id}>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>

          <button>
            <span class="mdi mdi-trash-can"></span>
          </button>
        </div>
      ))}

    </div>

  )
}

export default Home
