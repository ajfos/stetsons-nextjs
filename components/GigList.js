import styles from './GigList.module.scss';
import GigItem from './GigItem';

export default function GigList ({ gigs }) {

    if(!gigs || gigs.length < 0) {
        return (
            <div className={styles.gigList}>
                <div className={styles.header}>No Upcoming Events</div>
                <div className={styles.contactRequest}><a href="#contact" className={styles.contact}>Contact us</a> if you want us to perform!</div>
            </div>
        )
    }

    return (
        <div className={styles.gigList}>
            <div className={styles.header}>Upcoming Events</div>
            {gigs.map((gig, index) => (
               <GigItem gig={gig} key={index}/>
            ))}
        </div>
    )
}