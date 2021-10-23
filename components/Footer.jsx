import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export const Footer = () => (
  <footer className={styles.footer}>
    <a
      href="https://ragnarok22.dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      Creado por Reinier Hernández{' '}
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
)