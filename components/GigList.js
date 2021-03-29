import styles from './GigList.module.scss';
import GigItem from './GigItem';

export default function GigList ({ gigs }) {
    return (
        <div className={styles.gigList}>
            <div className={styles.header}>Upcoming Events</div>
            {gigs.map((gig, index) => (
               <GigItem gig={gig} key={index}/>
            ))}
        </div>
    )
}