import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GigList from '../components/GigList';
import MusicInfo from '../components/MusicInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faSpotify, faBandcamp, faSoundcloud, faYoutube } from '@fortawesome/free-brands-svg-icons'
import classnames from 'classnames';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Stetsons Electric</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Righteous&display=swap" rel="stylesheet" />
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
            />
        </div>

        <div className={styles.socialIcons}>
            <a href="https://open.spotify.com/artist/1EnFvfSbHqACPmunlABTBJ" target="_blank" rel="noopener noreferrer" className={classnames(styles.socialIcon, styles.spotify)}><FontAwesomeIcon icon={faSpotify} /></a>
            <a href="https://www.facebook.com/thestetsonselectric/" target="_blank" rel="noopener noreferrer" className={classnames(styles.socialIcon, styles.facebook)}><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com/The_Stetsons" target="_blank" rel="noopener noreferrer" className={classnames(styles.socialIcon, styles.twitter)}><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.youtube.com/channel/UCn301PgyNOQEede0cEoyVaQ" target="_blank" rel="noopener noreferrer" className={classnames(styles.socialIcon, styles.youtube)}><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://soundcloud.com/the-stetsons-electric" target="_blank" rel="noopener noreferrer" className={classnames(styles.socialIcon, styles.soundcloud)}><FontAwesomeIcon icon={faSoundcloud} /></a>
            <a href="https://stetsons.bandcamp.com/" target="_blank" rel="noopener noreferrer" className={classnames(styles.socialIcon, styles.bandcamp)}><FontAwesomeIcon icon={faBandcamp} /></a>
        </div>


        <p className={styles.tagLine}>
            Three Rockin' Men Since God Knows When
        </p>


        <GigList gigs={
            [
                {
                    location: "our houses",
                    date: "HH:mm DD/MM/YY",
                    notes: "",
                    link: "google.com",
                    linkText: "More Info"
                },
                {
                    location: "our houses",
                    date: "HH:mm DD/MM/YY",
                    notes: "",
                    link: "google.com",
                    linkText: "More Info"
                },
                {
                    location: "our houses",
                    date: "HH:mm DD/MM/YY",
                    notes: "",
                    link: "google.com",
                    linkText: "More Info"
                }
            ]
        } />

        <MusicInfo numberToShow={4}/>

  

      <iframe width="560" height="315" src="https://www.youtube.com/embed/AEMNEekrEg8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      

        
      </main>
    </div>
  )
}
