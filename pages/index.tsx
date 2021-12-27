import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import PageHeader from '../components/PageHeader';
import ChangesLayout from '../components/ChangesLayout';
import EditorLayout from '../components/EditorLayout';
import { useState } from 'react';

let initial = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit. Cras convallis posuere sapien tristique massa eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit. Cras convallis posuere sapien tristique massa eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit. Cras convallis posuere sapien tristique massa eget",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit. Cras convallis posuere sapien tristique massa eget.",
    "This is a Document Comparision",
]

let final = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing ell, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit. Cras consuere sapien tristique massa eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. NEC purus enim. Massa eleifend mattis blandit vitae elit. Cras convallis posuere sapien tristique massa eget.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit.",
    "Vel, auctor aliquet duis dapibus. Tellus cursus faucibus vitae nunc nec purus enim. Massa eleifend mattis blandit vitae elit. Cras convallis posuere sapien tristique massa eget.",
    "This is an intelligent Document Comparision Algorithm",
    "It can be used in live text based collaborations!"
]

const Home: NextPage = () => {

    const [currentMode, updateMode] = useState('view')

    const toggleState = () => {
        if (currentMode == "view") {
            updateMode("edit");
        }
        else {
            const editorInitial = document.getElementById("editor-initial");
            const editorFinal = document.getElementById("editor-final");
            initial = editorInitial?.innerText?.split("\n") || [];
            final = editorFinal?.innerText?.split("\n") || [];
            updateMode("view");
        }

    }

    return (
        <div className={styles.container}>
            <Head>
                <title>DocFlow - Document Changes Tracker</title>
                <meta name="description" content="DocFlow - Document Changes Tracker" />
            </Head>

            {
                currentMode == 'view'
                ? <PageHeader buttonText="Edit" click={toggleState} />
                : <PageHeader buttonText="Compare" click={toggleState} />
            }
            
            <main className={styles.main}>
                {
                    currentMode == 'view'
                    ? <ChangesLayout initial={initial} final={final} />
                    : <EditorLayout initial={initial} final={final} />
                }
            </main>
        </div>
    )
}

export default Home
