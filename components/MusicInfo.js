import React from 'react';
import styles from './MusicInfo.module.scss';
import * as releaseData from './ReleaseData';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function MusicInfo ({ numberToShow = 0, showTitle }) {
    let arrayCopy = [...releaseData.releases];
    let releases = arrayCopy.reverse();
    if(numberToShow && numberToShow !== 0) {
        releases = releases.slice(0, numberToShow);
    }
    
    const moreImage = releaseData.releases[Math.floor(Math.random() * Math.floor(releaseData.releases.length - numberToShow))].artwork;
    return (
        <>
            {showTitle && (<div className={styles.header}>Music</div>)}
            <div className={styles.musicInfo}>
                {releases.map((release, index) => (
                    <Link href={`/releases/${release.id}`}>
                        <a className={styles.musicInfoitem} key={index}>
                            <div className={styles.name}>{release.name}</div>
                            <div className={styles.musicInfoitem__imageContainer}>
                                <div className={styles.musicInfoitem__image}>
                                    <Image 
                                        src={release.artwork}
                                        alt={`${release.name} artwork`}                    
                                        layout="fill"
                                        objectFit="contain"
                                        priority={true}
                                    />
                                </div>
                            </div>
                            <div className={styles.musicInfoitem__year}>{release.year}</div>
                            {release.notes && (<div>{release.notes}</div>)}
                        </a>
                    </Link>
                ))}
                {numberToShow > 0 && <Link href="/releases">
                    <a className={styles.musicInfoitem}>
                        <div className={styles.name}>Others</div>
                        <div className={styles.musicInfoitem__imageContainer}>
                            <div className={styles.musicInfoitem__moreImage}>
                                <Image 
                                    src={moreImage}
                                    alt="more"                    
                                    layout="fill"
                                    objectFit="contain"
                                    priority={true}
                                />
                            </div>
                        </div>
                        <div className={styles.musicInfoitem__year}>Various</div>
                        <div className={styles.musicInfoitem__moreImageOverlay}>
                            More
                            <div className={styles.moreIcon}><FontAwesomeIcon icon={faArrowCircleRight} /></div>
                        </div>
                    </a>
                </Link>}
            </div>
        </>
    )
}