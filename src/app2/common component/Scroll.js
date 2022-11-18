import styles from './Scroll.module.css';

export default function Scroll({ children, className }) {
  return (
    <>
      <div className={`${styles.scroll} ${className}`}>
        { children }
      </div>
    </>
  );
}