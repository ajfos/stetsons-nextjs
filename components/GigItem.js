import React, { useState } from 'react';
import styles from './GigItem.module.scss';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function GigList ({ gig }) {

    const [ shouldShowButton, setShouldShowButton ] = useState(false);

    return (
        <div className={styles.gigItem} onMouseEnter={() => setShouldShowButton(true)} onMouseLeave={() => setShouldShowButton(false)}>
            <div className={styles.location}>{gig.location}</div>
            <div className={styles.date}>{gig.date}</div>
            {gig.link && (<a className={styles.arrow} href={gig.link}><FontAwesomeIcon icon={faArrowCircleRight}/></a>)}
            {gig.link && shouldShowButton && (<div className={styles.button}><Button newTab link={gig.link}>{gig.linkText}</Button></div>)}
        </div>
    )
}