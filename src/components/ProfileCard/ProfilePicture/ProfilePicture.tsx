import FlipCard from "@/components/FlipCard/FlipCard";
import styles from "./ProfilePicture.module.scss";

const ProfilePicture = () => {
  return (
    <div className={styles.container}>
        <FlipCard imageClassName={styles.profilePic} />
    </div>
  )
}

export default ProfilePicture