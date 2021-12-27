import type { NextComponentType, NextPage } from 'next'
import styles from '../styles/PageHeader.module.scss'

interface Props {
    buttonText: string;
    click: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PageHeader: NextPage<Props> = ({ buttonText, click }) => {
  return (
    <header className={styles.header}>
        <h1>Docflow</h1>
        <button onClick={click}>{buttonText}</button>
    </header>
  )
}

export default PageHeader
