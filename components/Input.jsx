export const Input = ({ name, onSubmit }) => {
  return (
    <div>
      <form method="post" onSubmit={onSubmit}>
        <input type="text" placeholder="Escriba el nombre a buscar aquí" />
      </form>
    </div>
  )
}