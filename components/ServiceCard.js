import styles from '../styles/ServiceCard.module.css';

export default function ServiceCard({ title, icon, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className={styles.button}>Дэлгэрэнгүй</button>
    </div>
  );
}
