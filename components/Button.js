import React from 'react';
import styles from './Button.module.css';
import classnames from 'classnames';

export default function Button ({ onClick, children, type="button", link }) {

    if(link) {
        return (
            <div>
                <a href={link} target="_blank" rel="noopener noreferrer" className={classnames(styles.button, styles.buttonLink)}>{children}</a>
            </div>
        )
    }

    return (
        <button onClick={onClick} type={type} className={styles.button}>
            {children}
        </button>
    )
}