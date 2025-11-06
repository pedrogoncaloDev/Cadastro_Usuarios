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
