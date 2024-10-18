import { useState } from 'react';
import styles from '../styles/Service.module.css';

export default function GroupShareService() {
  const [groupType, setGroupType] = useState('');
  const [shareCount, setShareCount] = useState('');
  const [postUrl, setPostUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Энд группт шэйрлэх логик бичнэ
    console.log('Группт шэйрлэх:', { groupType, shareCount, postUrl });
    // Төлбөрийн модал харуулах логик
  };

  return (
    <div className={styles.card}>
      <h3>Фэйсбүүк Группууд Руу Мэдээлэл Шэйрлэх</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <select 
          className={styles.input}
          value={groupType}
          onChange={(e) => setGroupType(e.target.value)}
          required
        >
          <option value="">Группын төрөл сонгох</option>
          <option value="ads">Зар</option>
          <option value="interest">Сонирхолын бүлэг</option>
        </select>
        <input 
          className={styles.input} 
          type="number" 
          placeholder="Шэйрлэх тоо" 
          value={shareCount}
          onChange={(e) => setShareCount(e.target.value)}
          required 
        />
        <input 
          className={styles.input} 
          type="url" 
          placeholder="Постний линк" 
          value={postUrl}
          onChange={(e) => setPostUrl(e.target.value)}
          required 
        />
        <button className={styles.button} type="submit">Шэйрлэх</button>
      </form>
    </div>
  );
}
