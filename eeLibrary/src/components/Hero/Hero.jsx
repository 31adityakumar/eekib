import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={styles.hero}>
  <div className={styles.content}>
    <h2>ee | Library</h2>
    <p> <h3>WELCOME TO <span className={styles.future}> EE 25</span></h3></p>
    <p> Get all your study materials at your fingertips.</p>
    </div>
  <div className={styles.waves}></div>
</section>
  );
};

export default Hero;
