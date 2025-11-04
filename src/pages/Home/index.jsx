import './style.css'

function Home() {
  const users = [
    {
      id: 1,
      name: 'João Silva',
      age: 28,
      email: 'joao.silva@example.com'
    },
    {
      id: 2,
      name: 'Maria Oliveira',
      age: 34,
      email: 'maria.oliveira@example.com'
    }
  ]

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>

        <input type="text" name='nome' />
        <input type="number" name='idade' />
        <input type="email" name='email' />
        <button type="button">Cadastrar</button>
      </form>

      { users.map(user => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
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
