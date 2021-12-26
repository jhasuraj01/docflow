import type { NextPage } from 'next';
import align from '../libs/Align';
import styles from '../styles/ChangesLayout.module.scss';

interface Props {
    initial: string[],
    final: string[]
}


const ChangesLayout: NextPage<Props> = ({ initial, final }) => {

    const changes = align(initial, final);

    return (
        <div>
            {
                changes.map((change, index) => {
                    return (
                        <div key={index} className={styles.changeBlock}>
                            <p className={[styles.initial, styles[change.type]].join(" ")}>{change.initial}</p>
                            <p className={[styles.final, styles[change.type]].join(" ")}>{change.final}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChangesLayout
