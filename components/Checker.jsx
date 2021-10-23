import { useState } from 'react'
import styles from '../styles/Checker.module.css'
import { DomainResults } from './DomainResults'
import { Input } from './Input'
import { SocialResults } from './SocialResults'

export const Checker = () => {
  const [name, setName] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.checker}>
      <Input name={name} onSubmit={handleSubmit} />
      <DomainResults />
      <SocialResults />
    </div>
  )
}