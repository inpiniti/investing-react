import styles from './Grid.module.css';

export default function Grid({ children, gridType: gridType = 1, className, style}) {
  const gridTypeList = {
    1: styles.grid1,
    2: styles.grid2,
    3: styles.grid3,
    4: styles.grid4,
    5: styles.grid5,
    6: styles.grid6,
    7: styles.grid7,
    8: styles.grid8,
    9: styles.grid9,
    10: styles.grid10,
    layout: styles.layout,
  };

  return (
    <>
      <div className={`${styles.grid} ${gridTypeList[gridType]} ${className}`} style={style}>
        { children }
      </div>
    </>
  );
}