import styles from './Card.module.css';

export default function Card({ children, cardType: cardType = 1, className, hover, onClick}) {
  const cardTypeList = {
    1: styles.card1,
    2: styles.card2,
    3: styles.card3,
    4: styles.card4,
    5: styles.card5,
    6: styles.card6,
    7: styles.card7,
  };

  return (
    <>
      <div className={`${styles.card} ${cardTypeList[cardType]} ${className} ${hover && styles.hover}`}
        onClick={onClick}>
        { children }
      </div>
    </>
  );
}