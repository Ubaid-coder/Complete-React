import { useRouteError } from "react-router-dom"


function error() {

  const error = useRouteError();
  console.log(error)

  return (
    <>
      <h1>{error.data}</h1>
    </>
  )
}

export default error
