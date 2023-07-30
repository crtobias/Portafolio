import styles from "./nav.module.css"

export const Nav = () =>{
    return(
        <div className={styles.nav}>
            <button className={styles.but}>A</button>
            <button className={styles.but}>X</button>
            <button className={styles.but}>C</button>
        </div>
    )
}