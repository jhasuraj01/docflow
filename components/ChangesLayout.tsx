import type { NextPage } from 'next';
import compareText from '../libs/CompareText';
import styles from '../styles/ChangesLayout.module.scss';

interface Props {
    initial: string[],
    final: string[]
}

const ChangesLayout: NextPage<Props> = ({ initial, final }) => {

    const deepChanges = compareText(initial, final);

    return (
        <div>
            <div className={styles.changeBlock}>
                <div className={styles.container}>
                    <div className={styles.header}>Initial</div>
                </div>
                <div className={styles.container}>
                    <div className={styles.header}>Final</div>
                </div>
            </div>
 
            {
                deepChanges.map((change, index) => {
                    return (
                        <div key={index} className={styles.changeBlock}>
                            <div className={[styles.initial, styles[change.type]].join(" ")}>
                                {
                                    change.type == "deepcheck"
                                    ? change.changes
                                        ?.filter(({initial}) => Boolean(initial))
                                        .map(({initial, type}, index) => 
                                            <>
                                                <span key={index} className={styles[type]}>{initial}</span>
                                                {" "}
                                            </>
                                        )
                                    : change.initial
                                }
                            </div>
                            <div className={[styles.final, styles[change.type]].join(" ")}>
                                {
                                    change.type == "deepcheck"
                                    ? change.changes
                                        ?.filter(({final}) => Boolean(final))
                                        .map(({final, type}, index) =>
                                            <>
                                                <span key={index} className={styles[type]}>{final}</span>
                                                {" "}
                                            </>
                                        )
                                    : change.final
                                }
                                </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChangesLayout
