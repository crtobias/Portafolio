import styles from "./allbox.module.css";
import {
  bootstrap,
  css,
  descarga,
  discord,
  figma,
  git,
  gmail,
  google,
  html,
  js,
  linkedin,
  molino,
  moon,
  node,
  photo,
  pokemon,
  prueba,
  react,
  redux,
  spotify,
  sql,
  sun,
  tailwind,
  ts,
  twitter,
  wtsp,
  yourube,
} from "../../assets";
import { useState } from "react";

export const AllBox = () => {
  const [modoClaro, setModoClaro] = useState(true); // Modo claro como estado inicial

  const toggleModo = () => {
    setModoClaro((prevState) => !prevState); // Cambia el estado entre verdadero y falso (modo claro y oscuro)
  };

  return (
    <div
      className={`${styles.app} ${modoClaro ? styles.modoClaro : styles.modoOscuro
        }`}
    >
      <section className={styles.container}>
        <button className={styles.boxName}>
          <h1 className={styles.name}>Tobias Gonzalez Arriola</h1>
        </button>

        <button className={styles.box3} id={styles.trabajandobox}>
          <div className={styles.content}>
            <img className={styles.trabajando} src={prueba} alt="" />
            {/* <img
              className={styles.trabajando}
              src={modoClaro ? prueba : pruebaoscuro}
              alt={modoClaro ? "dia" : "noche"}
            /> */}

            <h4 className={styles.info}>Sobre MI </h4>
          </div>
        </button>




        <div className={styles.box6} id={styles.contactobox}>
          <div className={styles.cont}>
            <h3 className={styles.tit}>Contactos</h3>
            <br />
            <p className={styles.par}>Full Stack developer</p>
            <br />
            <div className={styles.bots}>
              <a className={styles.iconsContacto} href="https://github.com/crtobias" target="_blank">
                <img className={styles.modos} src={git} alt="git" />
              </a>
              <a className={styles.iconsContacto} href="https://www.linkedin.com/in/tobias-gonzalez-arriola-0a2399273/" target="_blank">
                <img className={styles.modos} src={linkedin} alt="link" />
              </a>

              <a className={styles.iconsContacto} href="mailto:tgonzalezarriola@gmail.com" target="_blank">
                <img className={styles.modos} src={gmail} alt="" />
              </a>



            </div>
          </div>
        </div>

        <button className={styles.box1} onClick={toggleModo}>
          <img
            className={styles.modos}
            src={modoClaro ? sun : moon}
            alt={modoClaro ? "Sol" : "Luna"}
          />
        </button>

        <button className={styles.box1} id={styles.descarga}>
          <img className={styles.descarga} src={descarga} alt="" />
          <h4 className={styles.desc}>CV</h4>
          <h4 className={styles.descs}>CV</h4>
        </button>



        <button className={styles.box1}>
          <a href="https://open.spotify.com/playlist/6MNpAGlll4RjO3g0qbobma?si=f0dfad3094544e8a" target="_blank">
        <img className={styles.red}  src={spotify} alt="" />
          </a>
        </button>


        <button className={styles.box1}>
          <a href="https://discord.gg/9Gv5xMtyQT" target="_blank">
<img className={styles.red} src={discord} alt="" />
          </a>
        </button>




        <button className={styles.box1}>
          <a href="https://www.youtube.com/channel/UC8k3UEQf3Xi10NnfItPrQ1Q" target="_blank">
<img className={styles.red} src={yourube} alt="" />

          </a>
        </button>




        <button className={styles.box1}>
          <a href="https://twitter.com/crtobias_" target="_blank">
<img className={styles.red} src={twitter} alt="" />

          </a>
        </button>



        <button className={styles.boxSkills}>Sobre Mi</button>

        <div className={styles.BoxSobreMi}>
          Soy un desarrollador Full Stack apasionado del desarrollo Front-end y el diseño de interfaces, con experiencia en proyectos individuales y en equipo. Trabajo con tecnologías como HTML, CSS, JavaScript, React, Redux, Node.js, Express, SQL, PostgreSQL y Sequelize. Siempre estoy entusiasmado/a por aprender nuevas tecnologías y enriquecer mis habilidades. Me destaco por mi enfoque en la calidad y la colaboración en equipo, además de estar familiarizado/a con TypeScript y siempre estoy buscando crecer profesionalmente.
        </div>











        <button className={styles.boxSkills}>Habilidades</button>
        <button className={styles.box1}>
          <img className={styles.logoskills} src={react} alt="" />
        </button>
        <button className={styles.box1}>
          <img className={styles.logoskills} src={redux} alt="" />
        </button>
        <button className={styles.box1}>
          <img className={styles.logoskills} src={html} alt="" />
        </button>
        <button className={styles.box1}>
          <img className={styles.logoskills} src={css} alt="" />
        </button>
        <button className={styles.box1}>
          <img className={styles.logoskills} src={node} alt="" />
        </button>
        <button className={styles.box1}>
          <img className={styles.logoskills} src={js} alt="" />
        </button>
        <button className={styles.box1}>
          <img className={styles.logoskills} src={ts} alt="" />
        </button>
        <button className={styles.box1}>
          <img className={styles.logoskills} src={tailwind} alt="" />
        </button>
        <button className={styles.box1}>
          <img className={styles.logoskills} src={bootstrap} alt="" />
        </button>
        <button className={styles.box1}>
          <img className={styles.logoskills} src={figma} alt="" />
        </button>
        <button className={styles.box1}>
          <img className={styles.logoskills} src={photo} alt="" />
        </button>
        <button className={styles.box1}>
          <img className={styles.logoskills} src={sql} alt="" />
        </button>

        <button className={styles.boxSkills}>Proyectos</button>










        <div className={styles.boxcontainerproyect}>
          <div className={styles.proyect}>
           
            <img className={styles.fotopro} src={molino} alt="" />
            <div className={styles.titleandlogo}>
              
            <h3 className={styles.titlepro}>el molino</h3>
            <p>Fecha: 31 de julio </p>
            <p className={styles.parrafo}>aplicacion para restaurantes , facilita hacer ordenes pedidos y reseñas en un restaurante</p>
            
           <div>
           <a href="https://github.com/crtobias/El-Molino" target="_blank">

           <img className={styles.prologo} src={git} alt="" />
</a>

<a href="https://www.youtube.com/watch?v=TJo-3ex1mGA&t=10s" target="_blank">
            <img className={styles.prologo} src={yourube} alt="" />
</a>



<a href="https://resto-front-testing.vercel.app/" target="_blank">
            <img className={styles.prologo} src={google} alt="" />
</a>


            <p>Mas info</p>
           </div>
            </div>
          </div>
        </div>

        <div className={styles.boxcontainerproyect}>
          <div className={styles.proyect}>
           
            <img className={styles.fotopro}  src={pokemon} alt="" />
           <div className={styles.titleandlogo}>
           <h3  className={styles.titlepro}>pokeapi</h3>
           <p>Fecha: 2 de junio</p>
           <p  className={styles.parrafo}>poke api , crea tus pokemones o busca alguno de tu temporada favorita , con estilo retro</p>
           <div>


<a href="https://github.com/crtobias/Pi-Pokemon" target="_blank">

           <img className={styles.prologo} src={git} alt="" />
</a>



<a href="https://youtu.be/Tdo6xTxwy_A" target="_blank">
<img className={styles.prologo} src={yourube} alt="" />
</a>
           


            <p>Mas info</p>
           </div>
           </div>
          </div>
        </div>


        <div className={styles.boxSkills}>
          Mas Proximamente 😀
        </div>
        
      </section>
    </div>
  );
};
