import { FaRegFolderOpen } from "react-icons/fa6";
import styles from "./Material.module.scss";
const Material = () => {
  return (
    <div className={styles.material}>
      <h1 className={styles.head}>Material</h1>
      <div className={styles.content}>
        <div className={styles.box}>
          <a href="https://www.google.com" target="blank">
            {" "}
            <FaRegFolderOpen className={styles.folder} />
          </a>
          <h3>Semester I</h3>
        </div>
        <div className={styles.box}>
          <a href="https://www.google.com" target="blank">
            {" "}
            <FaRegFolderOpen className={styles.folder} />
          </a>{" "}
          <h3>Semester II</h3>
        </div>
        <div className={styles.box}>
          <a href="https://www.google.com" target="blank">
            {" "}
            <FaRegFolderOpen className={styles.folder} />
          </a>{" "}
          <h3>Semester III</h3>
        </div>
        <div className={styles.box}>
          <a href="https://www.google.com" target="blank">
            {" "}
            <FaRegFolderOpen className={styles.folder} />
          </a>{" "}
          <h3>Semester IV</h3>
        </div>
        <div className={styles.box}>
          <a href="https://www.google.com" target="blank">
            {" "}
            <FaRegFolderOpen className={styles.folder} />
          </a>{" "}
          <h3>Semester V</h3>
        </div>
        <div className={styles.box}>
          <a href="https://www.google.com" target="blank">
            {" "}
            <FaRegFolderOpen className={styles.folder} />
          </a>{" "}
          <h3>Semester VI</h3>
        </div>
        <div className={styles.box}>
          <a href="https://www.google.com" target="blank">
            {" "}
            <FaRegFolderOpen className={styles.folder} />
          </a>{" "}
          <h3>Semester VII</h3>
        </div>
        <div className={styles.box}>
          <a href="https://www.google.com" target="blank">
            {" "}
            <FaRegFolderOpen className={styles.folder} />
          </a>{" "}
          <h3>Semester VIII</h3>
        </div>
      </div>
    </div>
  );
};

export default Material;
