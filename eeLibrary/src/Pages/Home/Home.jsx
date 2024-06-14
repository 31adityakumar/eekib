import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <section className={styles.home}>
      <Hero />
      <About/>
      <Contact/>
    </section>
  );
};

export default Home;
