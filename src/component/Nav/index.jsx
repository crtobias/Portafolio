import { house, info, phone } from "../../assets"
import styles from "./nav.module.css"

export const Nav = () =>{
    return(
        <div className={styles.nav}>
            
            
                <img className={styles.img} src={phone} alt="p" />
       
            
                <img className={styles.img} src={house} alt="h" />
           
           
                <img className={styles.img} src={info} alt="i" />
           
        </div>
    )
}