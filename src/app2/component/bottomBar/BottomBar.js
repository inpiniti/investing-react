import styles from './BottomBar.module.css';
import Card from "../../common component/Card";

export default function BottomBar() {

  return (
    <>
      <Card className="h-100">
        <div className={`cardwrap`}>
          하단바 (bottom bar)
        </div>
      </Card>
    </>
  );
}