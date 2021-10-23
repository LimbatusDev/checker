import styles from '../styles/Input.module.css'

export const Input = ({ name, setName, onSubmit }) => {
  return (
    <div>
      <form method="post" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Escriba el nombre a buscar aquí"
          className={styles.input}
          value={name}
          onChange={e => setName(e.target.value)}
          select="true"
        />
      </form>
    </div>
  )
}