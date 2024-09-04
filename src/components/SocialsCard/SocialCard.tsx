import styles from "./SocialCard.module.scss";
import Card from "../Card/Card";
import Image from "next/image";
import Link from "next/link";

const links = [
    {
      name: "tiktok",
      href: "https://www.tiktok.com/@nemangas",
      imageSrc: "/img/TikTok.webp"
    },
    {
      name: "discord",
      href: "https://discord.gg/bh7Yn9m4mN",
      imageSrc: "/img/Discord.webp"
    },
    {
      name: "twitch",
      href: "https://www.twitch.tv/nemangas",
      imageSrc: "/img/Twitch.webp"
    }
]


const SocialCard = () => {
  return (
    <Card className={styles.socialIcons}>
        {links.map((item) => (
          <Link href={item.href} key={item.name} target="_blank">
            <Image className={styles.icon} src={item.imageSrc} alt={item.name} width={64} height={64} quality={100}  priority />
          </Link>
        ))}
    </Card>
  )
}

export default SocialCard