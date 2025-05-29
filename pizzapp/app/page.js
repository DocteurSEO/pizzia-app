import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.nav_item}><Image src="/features/logo_pizzia.png" alt="logo" width={70} height={70} /></div>
        <div className={styles.nav_item}>ACCEUIL</div>
        <div className={styles.nav_item}>OFFRES</div>
        <div className={styles.nav_item}>COMMANDES</div>
        <Link href="/login" className={`${styles.nav_item} ${styles.link_login}`}>CONNEXION</Link>
      </div>

       <div className={styles.container_two}>
        <div className={styles.blocs}>
          <div className={styles.bloc_left}>
            <div className={styles.commands}></div>
          </div>
          <div className={styles.bloc_right}>
            <div className={styles.custom}></div>
            <div className={styles.offre}></div>
          </div>
        </div>
      </div>

      <div className={styles.container_three}>
        <div className={styles.container_card}>
          <div className={`${styles.card} ${styles.edenred}`}></div>
          <div className={`${styles.card} ${styles.price}`}></div>
          <div className={`${styles.card} ${styles.score}`}></div>
        </div>
      </div>
    </div>
  );
}
