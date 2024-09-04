
import styles from "./page.module.scss";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import SocialCard from "@/components/SocialsCard/SocialCard";
import LastStreamCard from "@/components/LastStreamCard/LastStreamCard";
import Card from "@/components/Card/Card";
import Image from "next/image";
import HardwareCard from "@/components/HardwareCard/HardwareCard";
import Link from "next/link";

const DONATION_LINK = process.env.DONATION_LINK as string;

export default async function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Profilis virsutinis */}
        <ProfileCard />
        {/* Centras */}
        <div className={styles.socialAndStreams}>
            <SocialCard />
            <LastStreamCard />
        </div>
        {/* Bottom Cards */}
        <div className={styles.bottomCards}>
          <Card className={styles.donation}>
            <Link href={DONATION_LINK} target="_blank" className={styles.donationImgContainer}>
              <Image src="/img/coins.webp" alt="Coins" width={140} height={140} />
            </Link>
            <h3>Padėk man kurti daugiau!</h3>
          </Card>
          <Card className={styles.pc}>
            <div className={styles.title}>
              <h3>ĮRANGA</h3>
            </div>
            <div className={styles.hardwareContainer}>
              <HardwareCard />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}   
