import type { NextComponentType } from 'next'
import styles from '../styles/PageHeader.module.scss'

const PageHeader: NextComponentType = () => {
  return (
    <header className={styles.header}>
        <h1>GITSIM</h1>
    </header>
  )
}

export default PageHeader
