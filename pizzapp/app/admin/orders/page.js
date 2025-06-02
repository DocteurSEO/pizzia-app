'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function ordersManager() {

    const [activeForm, setActiveForm] = useState('update');

    return (
        <div className={styles.container_orders}>
            <div className={styles.container_dt_forms}>
                <div className={styles.dt}></div>
                <div className={styles.forms}>
                    <div className={styles.switchButtons}>
                        <button onClick={() => setActiveForm('update')}>Modifier</button>
                        <button onClick={() => setActiveForm('delete')}>Supprimer</button>
                    </div>

                    {activeForm === 'update' && (
                        <form className={styles.formUpdate}>
                            <h2>Modifier une commande</h2>
                            <input type="text" placeholder='Id de la commande'></input>
                            <button>Modifier</button>
                        </form>
                    )}

                    {activeForm === 'delete' && (
                        <form className={styles.formDelete}>
                            <h2>supprimer une commande</h2>
                            <input type="text" placeholder='Id de la commande'></input>
                            <button>Supprimer</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}