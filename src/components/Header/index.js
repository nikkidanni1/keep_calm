import React from 'react'
import styles from './Header.module.css'

const Header = () => (
    <header className={styles.header}>
        <div className={styles.header__content}>
            <img className={styles.header__logo} src="images/logo.svg" alt="logo" />
            <a className={styles.header__tel} href="tel:+74954954">+7 (495) 495-49-54</a>
            <a className={styles.header__telIcon} href="tel:+74954954">
                <img src="images/call.svg" alt="call" />
            </a>
        </div>
    </header>
)

export default Header