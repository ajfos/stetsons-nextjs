import styles from "../styles/Spotify.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faSpotify,
  faBandcamp,
  faYoutube,
  faInstagram,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import classnames from "classnames";
import Head from "next/head";

export default function SpotifyLanding() {
  useEffect(() => {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", "8302144009851493");
    fbq("track", "PageView");
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <Image
            src="/stetsons-logo.jpg"
            alt="Stetsons Logo"
            layout="fill"
            unoptimized={true}
            objectFit="cover"
            objectPosition="center center"
            priority={true}
          />
        </div>
        <div className={styles.playNows}>
          <div className={styles.cta}>
            <a
              href="https://open.spotify.com/track/1yWjHAXKzURhpxWe4AEcaL?context=spotify:playlist:15h3Rx7N5k9twudmjnkQ6m&si=38410ec6d60848e2"
              rel="noopener noreferrer"
              className={classnames(styles.socialIcon, styles.spotify)}
            >
              <FontAwesomeIcon icon={faSpotify} />
            </a>
            <div className={classnames(styles.iconText, styles.spotifyText)}>Play on Spotify</div>
          </div>
          <div className={styles.cta}>
            <a
              href={"https://music.apple.com/us/album/two-tickets-to-stetsonsmania/1138738130?i=1138738215"}
              rel="noopener noreferrer"
              className={classnames(styles.socialIcon, styles.apple)}
            >
              <FontAwesomeIcon icon={faApple} />
            </a>
            <div className={classnames(styles.iconText, styles.appleText)}>Play on Apple Music</div>
          </div>
          <div className={styles.cta}>
            <a
              href="https://music.youtube.com/playlist?list=PL_WPKXU7CKPVHvqhqQTVaqYKGxms-0yl8&si=_N7ba5xqpxeYQBCo"
              rel="noopener noreferrer"
              className={classnames(styles.socialIcon, styles.youtube)}
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <div className={classnames(styles.iconText, styles.youtubeText)}>Play on YouTube</div>
          </div>
        </div>
      </div>
    </div>
  );
}
