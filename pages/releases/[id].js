import { useRouter } from 'next/router';
import { releases } from '../../components/ReleaseData';
import Image from 'next/image';
import styles from '../../styles/Release.module.scss';
import Head from 'next/head';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faBandcamp, faSoundcloud, faYoutube, faApple } from '@fortawesome/free-brands-svg-icons';
import classnames from 'classnames';
import Link from 'next/link';
import Button from '../../components/Button';

const Release = () => {
    const router = useRouter()
    const { id } = router.query

      const release = releases[id - 1]


    if(!release) {
        return <div>Loading...</div>
    }
    
    return (
        <div className={styles.container}>

            <Head>
                <title>The Stetsons Electric</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Righteous&display=swap" rel="preload" rel="stylesheet" />
            </Head>

            <div className={styles.releaseHomeIcon}>
                <Link href="/">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
            </div>

            <div className={styles.content}>
                
                <Image src={release.artwork} width="300" height="300" />
                <div className={styles.details}>
                    <div className={styles.name}>{release.name}</div>
                    <div className={styles.year}>{release.year}</div>
                    {release.description && (<div className={styles.description}>{release.description}</div>)}
                    <div className={styles.releaseIcons}>
                        <a href="https://open.spotify.com/artist/1EnFvfSbHqACPmunlABTBJ" target="_blank" rel="noopener noreferrer" className={classnames(styles.releaseIcon, styles.spotify)}>
                            <FontAwesomeIcon icon={faSpotify} />
                        </a>
                        <a href="https://music.apple.com/gb/artist/the-stetsons-electric/924919951" target="_blank" rel="noopener noreferrer" className={classnames(styles.releaseIcon, styles.apple)}>
                            <FontAwesomeIcon icon={faApple} />
                        </a>
                        <a href="https://www.deezer.com/en/artist/6795735" target="_blank" rel="noopener noreferrer" className={classnames(styles.releaseIcon, styles.deezer)}>
                            <Image src="/deezer_logo.jpg" height="50" width="50" alt="deezer" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCn301PgyNOQEede0cEoyVaQ" target="_blank" rel="noopener noreferrer" className={classnames(styles.releaseIcon, styles.youtube)}>
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="https://soundcloud.com/the-stetsons-electric" target="_blank" rel="noopener noreferrer" className={classnames(styles.releaseIcon, styles.soundcloud)}>
                            <FontAwesomeIcon icon={faSoundcloud} />
                        </a>
                        <a href="https://stetsons.bandcamp.com/" target="_blank" rel="noopener noreferrer" className={classnames(styles.releaseIcon, styles.bandcamp)}>
                            <FontAwesomeIcon icon={faBandcamp} />
                        </a>
                        
                    </div>
                </div>
            </div>
            <div className={styles.releaseHomeButton}>
                <Button link="/releases">Back</Button>
            </div>
        </div>
    )
}

export default Release