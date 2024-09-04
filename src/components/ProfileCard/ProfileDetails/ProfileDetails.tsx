import styles from "./ProfileDetails.module.scss"

const ProfileDetails = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.name}>Mangas</h1>
        <h2 className={styles.tagname}>@nemangas</h2>
        <div className={styles.about}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            aspesed aspernatur.
          </p>
        </div>
        
    </div>
  )
}

export default ProfileDetails