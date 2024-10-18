import { useState } from 'react';
import styles from '../styles/Service.module.css';

export default function LikeFollowService() {
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');
  const [count, setCount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Энд лайк/дагагч худалдан авах логик бичнэ
    console.log('Лайк/Дагагч худалдан авах:', { type, url, count });
    // Төлбөрийн модал харуулах логик
  };

  return (
    <div className={styles.card}>
      <h3>Лайк болон Дагагч Хэрэглэгч Худалдан Авах</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <select 
          className={styles.input}
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option value="">Лайк эсвэл Дагагч сонгох</option>
          <option value="like">Лайк</option>
          <option value="follow">Дагагч</option>
        </select>
        <input 
          className={styles.input} 
          type="url" 
          placeholder="Хаяг эсвэл постний линк оруулах" 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required 
        />
        <input 
          className={styles.input} 
          type="number" 
          placeholder="Хүсэж буй тоо оруулах" 
          value={count}
          onChange={(e) => setCount(e.target.value)}
          required 
        />
        <button className={styles.button} type="submit">Худалдан авах</button>
      </form>
    </div>
  );
}
