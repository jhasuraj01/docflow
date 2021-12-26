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
            {
                deepChanges.map((change, index) => {
                    return (
                        <div key={index} className={styles.changeBlock}>
                            <p className={[styles.initial, styles[change.type]].join(" ")}>
                                {
                                    change.type == "deepcheck"
                                    ? change.changes
                                        ?.filter(({initial}) => Boolean(initial))
                                        .map(({initial, type}, index) => <span key={index} className={styles[type]}>{initial}</span>)
                                    : change.initial
                                }
                            </p>
                            <p className={[styles.final, styles[change.type]].join(" ")}>
                                {
                                    change.type == "deepcheck"
                                    ? change.changes
                                        ?.filter(({final}) => Boolean(final))
                                        .map(({final, type}, index) => <span key={index} className={styles[type]}>{final}</span>)
                                    : change.final
                                }
                                </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChangesLayout
