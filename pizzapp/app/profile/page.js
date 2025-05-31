'use client'
import styles from "./page.module.css";
import Navbar from "../components/navbar";
import { useState, useEffect, use } from 'react';

export default function Home() {
  const [user, setUser] = useState({});

  const fetchProfile = async () => {
    const res = await fetch('http://localhost:3001/auth/profile'  , {
      method: 'GET',
      credentials: 'include'
    });
    if (res.status == 200)
      setUser(await res.json());
  }

  useEffect(()=>{
    fetchProfile()
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <p>uid {user?.uid}</p>
      <p>email {user?.email}</p>
      <p>firstName {user?.firstName}</p>
      <p>lastName {user?.lastName}</p>
    </div>
  );
}