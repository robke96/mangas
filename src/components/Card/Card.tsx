import styles from "./Card.module.scss";

interface CardProps {
    children: React.ReactNode,
    className?: string | undefined;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div className={`${styles.cardContainer} ${className}`}>
      {children}
    </div>
  )
}

export default Card