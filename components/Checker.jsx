import { useState } from 'react'
import styles from '../styles/Checker.module.css'
import { DomainResults } from './DomainResults'
import { Input } from './Input'
import { SocialResults } from './SocialResults'
import {checkAllSocials, isUserExists} from './utils'

export const Checker = () => {
  const [name, setName] = useState("RagnarokReinier")
  const [socialStatus, setSocialStatus] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get 
    setSocialStatus(await checkAllSocials(name))
  }

  return (
    <div className={styles.checker}>
      <h1 className={styles.title}>Comprueba tu nombre deseado</h1>
      <Input name={name} setName={setName} onSubmit={handleSubmit} />
      {socialStatus && 
        <div>
          <DomainResults name={name} />
          <SocialResults name={name} socialStatus={socialStatus} />
        </div>
      }
    </div>
  )
}