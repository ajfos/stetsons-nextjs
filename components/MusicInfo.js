import React, { useEffect, useState } from 'react';
import styles from './MusicInfo.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


export default function MusicInfo ({ releaseData, numberToShow = 0, showTitle }) {

    // const [ apiData, setApiData ] = useState({ releases: [] });

    // useEffect(() => {
    //     fetch('/api/release-list')
    //         .then((res) => res.json())
    //         .then(setApiData);
    // },[]);
    console.log('releaseData', releaseData)

    if(!releaseData || releaseData.length < 1) return <div>Loading...</div>

    let arrayCopy = [...releaseData];
    let releases = arrayCopy.reverse();
    if(numberToShow && numberToShow !== 0) {
        releases = releases.slice(0, numberToShow);
    }
    
    const moreImage = releaseData[Math.floor(Math.random() * Math.floor(releaseData.length - numberToShow))].artwork;
    return (
        <>
            {showTitle && (<div className={styles.header}>Music</div>)}
            <div className={styles.musicInfo}>
                {releases.map((release, index) => (
                    <a href={release.bandcamp ? release.bandcamp : release.spotify} target="_blank" rel="noopener noreferrer" className={styles.musicInfoitem} key={index}>
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