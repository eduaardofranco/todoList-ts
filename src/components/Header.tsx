import styles from './Header.module.css'
import rocktLogo from '../assets/rocket.svg'

export function Header() {
    return(
        <header className={styles.mainHeader}>
            <div>
                <img src={rocktLogo} alt="ToDo Logo" />
                <h1>to<span>do</span></h1>

            </div>
      </header>
    )
}