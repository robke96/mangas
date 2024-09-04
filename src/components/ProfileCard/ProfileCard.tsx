import styles from "./ProfileCard.module.scss";
import Card from '../Card/Card';
import LiveButton from '../LiveButton/LiveButton';
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import ProfileFollowers from "./ProfileFollowers/ProfileFollowers";

const ProfileCard = async () => {
  return (
    <Card className={styles.profileCard}>
      <div className={styles.liveButton}>
        <LiveButton />
      </div>
      <ProfilePicture />
      <div className={styles.wrap}>
        <ProfileDetails />
        <ProfileFollowers />
      </div>
    </Card>
  );
}

export default ProfileCard