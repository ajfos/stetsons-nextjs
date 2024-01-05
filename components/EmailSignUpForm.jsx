import { useState } from "react";
import Button from "./Button";
import styles from "./EmailSignUpForm.module.scss";

export default function EmailSignUpForm() {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
  return (
    <div>
      <div id="mc_embed_shell">
        <div id="mc_embed_signup">
          <form
            action="https://thestetsonselectric.us20.list-manage.com/subscribe/post?u=79c46438be0bde6988a0ff40b&amp;id=95f1222419&amp;f_id=00ac07eaf0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_self"
            novalidate=""
          >
            <div id="mc_embed_signup_scroll">
              <h2>Subscribe to (occasional) updates </h2>

              <div className={styles.fieldGroup}>
                <label for="mce-EMAIL">Email Address</label>
                <input
                  type="email"
                  name="EMAIL"
                  className={styles.input}
                  id="mce-EMAIL"
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </div>
              <div className={styles.fieldGroup}>
                <label for="mce-FNAME">First Name</label>
                <input
                  type="text"
                  name="FNAME"
                  className={styles.input}
                  id="mce-FNAME"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </div>
              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_79c46438be0bde6988a0ff40b_95f1222419"
                  tabindex="-1"
                  value=""
                />
              </div>

              <div className={styles.subscribeButton}>
                <Button
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
