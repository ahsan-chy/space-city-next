import Image from 'next/image'
import styles from './page.module.css'
import Signup from './Signup/page'

export default function Home() {
  return (
    <main className={styles.main}>
      Space City Next App with Firebase 
      <Signup/>
    </main>
  )
}
