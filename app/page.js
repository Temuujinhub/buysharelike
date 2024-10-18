'use client';

import styles from '../styles/Home.module.css';
import ServiceCard from '../components/ServiceCard';
import Timeline from '../components/Timeline';

export default function Home() {
  const services = [
    { title: 'Share худалдан авах', icon: '🔄', description: 'Таны постыг олон хүнд хүргэх' },
    { title: 'Лайк, Дагагч авах', icon: '👍', description: 'Таны хуудсын дагагчдыг нэмэгдүүлэх' },
    { title: 'Масс мессеж илгээх', icon: '✉️', description: 'Таны мэдээллийг олон хүнд хүргэх' },
    { title: 'Группт пост оруулах', icon: '👥', description: 'Таны постыг олон группт нийтлэх' },
  ];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Buysharelike.mn</h1>
        <p>Таны бизнесийн онлайн маркетингийн шийдэл</p>
      </header>

      <section className={styles.services}>
        <h2>Бидний үйлчилгээнүүд</h2>
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      <section className={styles.timeline}>
        <h2>Хэрхэн ажилладаг вэ?</h2>
        <Timeline />
      </section>
    </main>
  );
}
