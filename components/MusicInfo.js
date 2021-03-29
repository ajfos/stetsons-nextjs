import React from 'react';
import styles from './MusicInfo.module.css';
import * as releaseData from './ReleaseData';
import Link from 'next/link';
import Image from 'next/image'

export default function MusicInfo ({ numberToShow }) {
    let arrayCopy = [...releaseData.releases];
    let releases = arrayCopy.reverse();
    if(numberToShow) {
        releases = releases.slice(0, 4);
    }
    
    const moreImage = releaseData.releases[Math.floor(Math.random() * Math.floor(releaseData.releases.length - 4))].artwork;
    return (
        <div className={styles.musicInfo}>
            {releases.map((release) => (
                <a href={release.bandcamp ? release.bandcamp : release.spotify} target="_blank" rel="noopener noreferrer" className={styles.musicInfoitem}>
                    <div>{release.name}</div>
                    <Image 
                        src={release.artwork}
                        alt={`${release.name} artwork`}                    
                        height="200"
                        width="200"
                        className={styles.musicInfoitem__image}
                    />
                    <div className={styles.musicInfoitem__year}>{release.year}</div>
                    {release.notes && (<div>{release.notes}</div>)}
                </a>
            ))}
            {numberToShow && <Link href="/releases">
                <a className={styles.musicInfoitem}>
                    <div>Others</div>
                    <Image 
                        src={moreImage}
                        alt="more"                    
                        height="200"
                        width="200"
                        className={styles.musicInfoitem__moreImage}
                    />
                    <div className={styles.musicInfoitem__year}>Various</div>
                    <div className={styles.musicInfoitem__moreImageOverlay}>More</div>
                </a>
            </Link>}
        </div>
    )
}