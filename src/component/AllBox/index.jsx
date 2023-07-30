import styles from "./allbox.module.css";
import {
  book,
  git,
  linkedin,
  moon,
  sun,
  trabajando,
  trabajandooscuro,
  yo,
} from "../../assets";
import { useState } from "react";

export const AllBox = () => {
  const [modoClaro, setModoClaro] = useState(true); // Modo claro como estado inicial

  const toggleModo = () => {
    setModoClaro((prevState) => !prevState); // Cambia el estado entre verdadero y falso (modo claro y oscuro)
  };

  return (
    <div
      className={`${styles.app} ${
        modoClaro ? styles.modoClaro : styles.modoOscuro
      }`}
    >
      <section className={styles.container}>
        <button className={styles.boxName}>
          Tobias Gonzalez Arriola
        </button>



        <button className={styles.box3} id={styles.trabajandobox}>
          <div className={styles.content}>
            <img
              className={styles.trabajando}
              src={modoClaro ? trabajando : trabajandooscuro}
              alt={modoClaro ? "dia" : "noche"}
            />
            <h4 className={styles.info}>Saber más de mí</h4>
          </div>
        </button>


        <button className={styles.box2} id={styles.proyectosbox}>
          <img className={styles.book} src={book} alt="proyectos" />
          <h4 className={styles.proyectostext}>Proyectos</h4>
        </button>



        <button className={styles.box4}></button>
        <button className={styles.box1}>
          <img src={git} alt="git" />
        </button>
        <button className={styles.box1} onClick={toggleModo}>
          <img
            className={styles.modos}
            src={modoClaro ? sun : moon}
            alt={modoClaro ? "Sol" : "Luna"}
          />
        </button>
        <button className={styles.box2}></button>
        <button className={styles.box2}></button>
        <button className={styles.box4}></button>
        <button className={styles.box3}></button>
        <button className={styles.box2}></button>
        <button className={styles.box1}>
          <img className={styles.modos} src={linkedin} alt="link" />
        </button>
        <button className={styles.box1}></button>
        <button className={styles.box1}></button>
        <button className={styles.box1}></button>
        <button className={styles.box1}></button>
      </section>
    </div>
  );
};
