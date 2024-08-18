import Button from "./Button"


const App = () => {

  const name = 'Ubaid';
  const email = 'Ubaid@gmail.com';
  const age = 15;
  const address = 'L5625C3-NorthKarachi';

  return (
    <div>
      <h1>React App</h1>
      <h1>User Profile</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Age: {age} </p>
            <p>Address: {address} </p>
      <Button />
    </div>


  )
}

export default App