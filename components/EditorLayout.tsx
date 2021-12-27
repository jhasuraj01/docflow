import type { NextPage } from 'next';
import styles from '../styles/Editor.module.scss';

interface Props {
    initial: string[],
    final: string[]
}

const EditorLayout: NextPage<Props> = ({ initial, final }) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>Initial</div>
                <div id="editor-initial" className={styles.editor} contentEditable>
                    {initial.map((text, index) => <div key={index}>{text}</div>)}
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.header}>Final</div>
                <div id="editor-final" className={styles.editor} contentEditable>
                    {final.map((text, index) => <div key={index}>{text}</div>)}
                </div>
            </div>
        </div>
    )
}

export default EditorLayout