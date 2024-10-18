import { useState } from 'react';
import styles from '../styles/Modal.module.css';

export default function PaymentModal({ isOpen, onClose, amount }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>&times;</span>
        <h2>Төлбөр төлөх</h2>
        <p>Нийт дүн: {amount}₮</p>
        <img src="/qpay_qr.png" alt="QPay QR код" className={styles.qrCode} />
        <p>QPay ашиглан төлбөрөө төлнө үү.</p>
      </div>
    </div>
  );
}
