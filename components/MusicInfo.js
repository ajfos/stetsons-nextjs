import React from 'react';
import styles from './MusicInfo.module.css';
import * as releases from './ReleaseData';

export default function MusicInfo () {
    return (
        <div className={styles.musicInfo}>
            {releases.releases.map((release) => (
                <a href={release.bandcamp} target="_blank" rel="noopener noreferrer" className={styles.musicInfoitem}>
                    <div>{release.name}</div>
                    <img src={release.artwork} className={styles.musicInfoitem__image} alt="artwork"/>
                    <div className={styles.musicInfoitem__year}>{release.year}</div>
                    {release.notes && (<div>{release.notes}</div>)}
                    <div className={styles.musicInfoitem__get}>
                        GET
                    </div>
                </a>
            ))}
        </div>
    )
}