import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import GigList from "../components/GigList";
import MusicInfo from "../components/MusicInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faSpotify,
  faBandcamp,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import classnames from "classnames";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Stetsons Electric</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Righteous&display=swap"
          rel="preload stylesheet"
          as="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <Image
            src="/stetsons-logo.jpg"
            alt="Stetsons Logo"
            layout="fill"
            unoptimized={true}
            objectFit="cover"
            objectPosition="center center"
            priority={true}
          />
        </div>

        <div className={styles.tagLine}>Three Rockin&apos; Men Since God Knows When</div>

        <div className={styles.socialIcons}>
          <a
            href="https://open.spotify.com/artist/1EnFvfSbHqACPmunlABTBJ"
            target="_blank"
            rel="noopener noreferrer"
            className={classnames(styles.socialIcon, styles.spotify)}
          >
            <FontAwesomeIcon icon={faSpotify} />
          </a>
          <a
            href="https://www.facebook.com/thestetsonselectric/"
            target="_blank"
            rel="noopener noreferrer"
            className={classnames(styles.socialIcon, styles.facebook)}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/The_Stetsons"
            target="_blank"
            rel="noopener noreferrer"
            className={classnames(styles.socialIcon, styles.twitter)}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCn301PgyNOQEede0cEoyVaQ"
            target="_blank"
            rel="noopener noreferrer"
            className={classnames(styles.socialIcon, styles.youtube)}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.instagram.com/thestetsonselectric/"
            target="_blank"
            rel="noopener noreferrer"
            className={classnames(styles.socialIcon, styles.instagram)}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://stetsons.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={classnames(styles.socialIcon, styles.bandcamp)}
          >
            <FontAwesomeIcon icon={faBandcamp} />
          </a>
        </div>

        {/* todo use songkick api, there is a key in inbox */}
        {/* {location: "The Boulevard, Wigan", date: "17/12/2021", link: "https://www.boulevard-wigan.co.uk/events/afternoon-people-wild-signs-shackites-1", linkText: "Event Info/Tickets"} */}
        <GigList
          gigs={
            [
              // {
              //   location: "The Baliff Bar, Wigan",
              //   date: "14/12/2023",
              //   link: "https://www.theoldcourts.com/shows/unlocked-original-music-showcase-6/",
              //   linkText: "Event Info",
              // },
            ]
          }
        />

        <div className={styles.latestUpdate}>
          <div className={styles.latestUpdateText}>
            {/* Until then, here is our latest video! */}
            Until then, here is our latest release! You can download it{" "}
            <a
              href="https://stetsons.bandcamp.com/track/glasses-for-christmas"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.donwloadNowText}
            >
              here.
            </a>
          </div>
          <div className={styles.youtubeVideoHome}>
            {/* <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/AEMNEekrEg8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/mroanEeRBuQ?si=9OFhgQMEvMjmvfHF"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.latestUpdateText}>
            More on{" "}
            <a
              className={styles.createdByEmail}
              href="https://www.youtube.com/channel/UCn301PgyNOQEede0cEoyVaQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>

        <MusicInfo numberToShow={3} showTitle />

        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/AEMNEekrEg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
      </main>

      <div className={styles.contact} id="contact">
        <div>
          Email:{" "}
          <a href="mailto:thestetsonselectric@gmail.com" className={styles.emailLink}>
            thestetsonselectric@gmail.com
          </a>{" "}
          or
        </div>
        <div className={styles.footerFacebook}>
          message us on:
          <a
            href="https://www.facebook.com/thestetsonselectric/"
            target="_blank"
            rel="noopener noreferrer"
            className={classnames(styles.socialIcon, styles.facebook, styles.footerFacebookIcon)}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>

      <div className={styles.createdBy}>
        Created by{" "}
        <a href="mailto:stetsons.npzas@simplelogin.com" className={styles.createdByEmail}>
          The Prospector
        </a>
        <br />
        Keeps the mind keen and the gold clean.
      </div>
    </div>
  );
}
