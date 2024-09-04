import Card from "@/components/Card/Card";
import styles from "./StreamCard.module.scss";
import Image from "next/image";
import { Categories } from "@/data/categories";

interface StreamCardProps {
  createdAt: string | Date;
  title: string;
  category: string;
}

const StreamCard = ({createdAt, title, category}: StreamCardProps) => {
  const date = new Date(createdAt).toISOString().split('T')[0];
  let image = Categories.find(i => i.name === category)

  if (!image) {
    image = Categories.find(i => i.name === undefined);
  }

  return (
    <Card className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
            className={styles.image}
            src={image?.imagePath!}
            alt={`${image?.name}`}
            width={285}
            height={300}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.date}>{date}</p>
        <p>{title}</p>
      </div>
    </Card>
  );
}

export default StreamCard