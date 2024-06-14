import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.containerContact}>
        <div className={styles.credInfo}>
          <div className={styles.right}>
            <p className={styles.credItems}>
              Address
              <span className={styles.credText}>
                National Institute of Technology Silchar, Assam
              </span>
            </p>
            <p className={styles.credItems}>
              Website
              <span className={styles.credText}>
                <a href="https://eed.nits.ac.in/" target="blank">
                  www.eed.nits.ac.in
                </a>
              </span>
            </p>
          </div>
          <div className={styles.left}>
            <p className={styles.credItems}>
              Email<span className={styles.credText}>director@nits.ac.in</span>
            </p>
            <p className={styles.credItemsphone}>
              Phone Number
              <span className={styles.credText}>+91-9876543210</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.containerFooter}>
        <div className={styles.iconSection}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook className={styles.facebookIcon} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram className={styles.instaIcon} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className={styles.linkedinIcon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
