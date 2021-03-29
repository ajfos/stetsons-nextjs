import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Releases.module.css'
import MusicInfo from '../components/MusicInfo';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faSpotify, faBandcamp, faSoundcloud, faYoutube, faApple, faDeezer } from '@fortawesome/free-brands-svg-icons'
import Button from '../components/Button'
import classnames from 'classnames';

export default function Releases() {



    return (
        <div className={styles.container}>
            <Head>
                <title>The Stetsons Electric</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Righteous&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.homeIcon}>
                <FontAwesomeIcon icon={faHome} />
            </div>

            <div className={styles.header}>
                Go direct to your preferred platform
            </div>

            <div className={styles.socialIcons}>
                <a href="https://open.spotify.com/artist/1EnFvfSbHqACPmunlABTBJ" target="_blank" rel="noopener noreferrer" className={classnames(styles.socialIcon, styles.spotify)}>
                    <FontAwesomeIcon icon={faSpotify} />
                </a>
                <a href="https://music.apple.com/gb/artist/the-stetsons-electric/924919951" target="_blank" rel="noopener noreferrer" className={classnames(styles.socialIcon, styles.apple)}>
                    <FontAwesomeIcon icon={faApple} />
                </a>
                <a href="https://www.deezer.com/en/artist/6795735" target="_blank" rel="noopener noreferrer" className={classnames(styles.socialIcon, styles.deezer)}>
                    <Image src="/deezer_logo.jpg" height="50" width="50" alt="deezer" />
                </a>
                <a href="https://www.youtube.com/channel/UCn301PgyNOQEede0cEoyVaQ" target="_blank" rel="noopener noreferrer" className={classnames(styles.socialIcon, styles.youtube)}>
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="https://soundcloud.com/the-stetsons-electric" target="_blank" rel="noopener noreferrer" className={classnames(styles.socialIcon, styles.soundcloud)}>
                    <FontAwesomeIcon icon={faSoundcloud} />
                </a>
                <a href="https://stetsons.bandcamp.com/" target="_blank" rel="noopener noreferrer" className={classnames(styles.socialIcon, styles.bandcamp)}>
                    <FontAwesomeIcon icon={faBandcamp} />
                </a>
            </div>

            <div className={styles.header}>
                or select a release below for more information. 
                <br />
                (some are on selected stores only)
            </div>

            <div className={styles.music}>
                <MusicInfo />
            </div>

           

            <div className={styles.homeButton}>
                <Button link="/">go home</Button>
            </div>
        </div>
        
    );
}