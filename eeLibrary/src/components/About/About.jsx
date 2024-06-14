import styles from "./About.module.scss";
const About = () => {
  return (
    <>
      <section className={styles.about} id='about'>
        <div className={styles.content}>
          <h1 className={styles.head}>About Us</h1>
          <h2>Empowering The Journey To Success</h2>
          <h3>Your Go-To Resource for Electrical Engineering</h3>
          <p>
            EE'25 is dedicated to providing essential resources for Electrical
            Engineering students. Our platform offers a wide range of study
            materials, past exam papers, assignments, and more to support your
            academic success.
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li> Blazing Fast Access</li>
            <li>On-the-Go Convenience</li>
          </ul>
          <h3>Benefits of Using EE'25:</h3>
          <ul>
            <li> Comprehensive Materials</li>
            <li>Up-to-Date Content</li>
            <li>Exam Preparation</li>
            <li>Lab Assignments</li>
          </ul>
          Join EE'25 and make your Electrical Engineering studies easier and
          more efficient.
        </div>
        <div className={styles.img}>
          <img
            src="https://res.cloudinary.com/dnvhl9pru/image/upload/v1691996271/about_bemihg.svg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default About;
