import React from 'react';
import styles from './Button.module.scss';
import classnames from 'classnames';
import Link from 'next/link';

export default function Button ({ onClick, children, type="button", link, newTab }) {

    if(link) {
        return (
            <Link href={link}>
                {newTab ? 
                    (<a target="_blank" rel="noopener noreferrer" className={classnames(styles.button, styles.buttonLink)}>{children}</a>)
                    : 
                    (<a className={classnames(styles.button, styles.buttonLink)}>{children}</a>)
                }
                
            </Link>
        )
    }

    return (
        <button onClick={onClick} type={type} className={styles.button}>
            {children}
        </button>
    )
}