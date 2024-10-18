import { useState } from 'react';
import styles from '../styles/Service.module.css';

export default function ShareService({ openModal }) {
  const [url, setUrl] = useState('');
  const [shareCount, setShareCount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Энд share худалдан авах логик бичнэ
    console.log('Share худалдан авах:', { url, shareCount });
    // Төлбөрийн дүнг тооцоолох (энэ жишээнд тогтмол дүн ашиглав)
    const amount = 1000;
    openModal(amount);
  };

  return (
    <div className={styles.card}>
      <h3>Share худалдан авах</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          className={styles.input} 
          type="url" 
          placeholder="URL оруулах" 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required 
        />
        <input 
          className={styles.input} 
          type="number" 
          placeholder="Share тоо оруулах" 
          value={shareCount}
          onChange={(e) => setShareCount(e.target.value)}
          required 
        />
        <button className={styles.button} type="submit">Худалдан авах</button>
      </form>
    </div>
  );
}
