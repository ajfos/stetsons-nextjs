import React from 'react';
import styles from './GigList.module.css';
import Button from './Button';

export default function GigList ({ gigs }) {
    return (
        <div className={styles.gigList}>
            {gigs.map((gig, index) => (
                <div className={styles.gigListItem} key={index}>
                    <div>{gig.location}</div>
                    <div>{gig.date}</div>
                    <div>{gig.notes}</div>
                    {gig.link && (<div className={styles.button}><Button link={gig.link}>{gig.linkText}</Button></div>)}
                </div>
            ))}
        </div>
    )
}