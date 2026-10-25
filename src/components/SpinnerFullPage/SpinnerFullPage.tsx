import styles from './styles.module.scss'

function SpinnerFullPage(){
    return <div className={styles.container}>
        <p className={styles.containerText}>Loading</p>
    </div>
}

export default SpinnerFullPage;