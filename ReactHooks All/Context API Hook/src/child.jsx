import { useContext } from "react"
import { AppContext } from "./useContext"

function child() {
  const userData = useContext(AppContext)
  console.log(userData);

  return (
    <div>
      <h2>Child Component</h2>
      <p>User Name: {userData.name}</p>
      <p>User Email: {userData.email}</p>
    </div>
  );
}

export default child