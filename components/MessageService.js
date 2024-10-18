import { useState } from 'react';
import styles from '../styles/Service.module.css';

export default function MessageService() {
  const [message, setMessage] = useState('');
  const [count, setCount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Энд масс мессеж илгээх логик бичнэ
    console.log('Масс мессеж илгээх:', { message, count });
    // Төлбөрийн модал харуулах логик
  };

  return (
    <div className={styles.card}>
      <h3>Масс Мессеж болон Имэйл Илгээх</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea 
          className={styles.input} 
          placeholder="Илгээх текст" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <input 
          className={styles.input} 
          type="number" 
          placeholder="Илгээх хүний тоо" 
          value={count}
          onChange={(e) => setCount(e.target.value)}
          required 
        />
        <button className={styles.button} type="submit">Илгээх</button>
      </form>
    </div>
  );
}
