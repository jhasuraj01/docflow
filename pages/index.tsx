import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import PageHeader from '../components/PageHeader';
import ChangesLayout from '../components/ChangesLayout';

const initial = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit. Cras convallis posuere sapien tristique massa eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit. Cras convallis posuere sapien tristique massa eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit. Cras convallis posuere sapien tristique massa eget",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit. Cras convallis posuere sapien tristique massa eget.",
    "This is a Smart Document Comparision",
]

const final = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit. Cras convallis posuere sapien tristique massa eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. NEC purus enim. Massa eleifend mattis blandit vitae elit. Cras convallis posuere sapien tristique massa eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit.",
    "Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit. Cras convallis posuere sapien tristique massa eget.",
    "This is  Smart Document Comparision Algorithm",
]

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>DocFlow - Document Changes Tracker</title>
                <meta name="description" content="DocFlow - Document Changes Tracker" />
            </Head>
            <PageHeader />
            <main>
                <ChangesLayout initial={initial} final={final} />
            </main>
        </div>
    )
}

export default Home
