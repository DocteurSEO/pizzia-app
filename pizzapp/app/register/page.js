import styles from './page.module.css';


export default function Inscription() {
  return (
    <div className={styles.container}>
      <div className={styles.contain_form}>
        <div className={styles.form}>
          <h1>PizzIA Inscription</h1>
          <input type="text" placeholder="Adresse email" className={styles.input} />
          <input type="text" placeholder="Nom" className={styles.input} />
          <input type="text" placeholder="Prénom" className={styles.input} />
          <input type="password" placeholder="Mot de passe" className={styles.input} />
          <input type="password" placeholder="Valider mot de passe" className={styles.input} />
          <button className={styles.button_inscription}>INSCRIPTION</button>
        </div>
      </div>
    </div>
  );
}
