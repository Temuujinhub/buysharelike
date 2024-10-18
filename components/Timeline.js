import Image from 'next/image';
import styles from '../styles/Timeline.module.css';

export default function Timeline() {
  const steps = [
    {
      title: 'Багц сонгох',
      description: 'Таны хэрэгцээнд тохирсон багцыг сонгоно. Бид жижиг эхлэлийн багцаас эхлээд том хэмжээний өсөлтийн багц хүртэл санал болгодог.',
      icon: '/icons/package.png'
    },
    {
      title: 'Мэдээлэл оруулах',
      description: 'Хуудас эсвэл постны холбоос зэрэг үндсэн мэдээллийг оруулна. Бид таны нууц үгийг хэзээ ч шаардахгүй.',
      icon: '/icons/info.png'
    },
    {
      title: 'Төлбөр төлөх',
      description: 'Манай SSL-ээр хамгаалагдсан төлбөрийн маягтыг ашиглан төлбөрийн мэдээллээ оруулж, захиалгаа баталгаажуулна.',
      icon: '/icons/payment.png'
    },
    {
      title: 'Тайван хүлээх',
      description: 'Одоо та хөлөө жийж тавиад, гайхамшиг болохыг хүлээгээрэй. Үр дүн дунджаар хэдэн цагийн дотор эхэлж, нэг, хоёр өдрийн дотор дуусна!',
      icon: '/icons/relax.png'
    },
  ];

  return (
    <div className={styles.timeline}>
      {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <div className={styles.iconContainer}>
            <Image src={step.icon} alt={step.title} width={50} height={50} />
          </div>
          <div className={styles.content}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
