import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Container from "../components/Container"

const Home: NextPage = () => {
  return (
    <Container>
      <div className={styles.home}>
        Hello Main
      </div>
    </Container>
  )
}

export default Home
