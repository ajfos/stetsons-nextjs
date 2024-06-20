export default function Contact() {
  return (
    <div>
      <div id="mc_embed_shell">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />

        <div id="mc_embed_signup">
          <form
            action="https://thestetsonselectric.us20.list-manage.com/subscribe/post?u=79c46438be0bde6988a0ff40b&amp;id=95f1222419&amp;f_id=00ac07eaf0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_self"
            novalidate=""
          >
            <div id="mc_embed_signup_scroll">
              <h2>Subscribe to (occasional) updates </h2>
              <div class="indicates-required">
                <span class="asterisk">*</span> indicates required
              </div>
              <div class="mc-field-group">
                <label for="mce-EMAIL">
                  Email Address <span class="asterisk">*</span>
                </label>
                <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="" />
              </div>
              <div class="mc-field-group">
                <label for="mce-FNAME">First Name </label>
                <input type="text" name="FNAME" class=" text" id="mce-FNAME" value="" />
              </div>
              <div id="mce-responses" class="clear foot">
                <div class="response" id="mce-error-response" style={{ display: "none" }}></div>
                <div class="response" id="mce-success-response" style={{ display: "none" }}></div>
              </div>
              <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot
                signups */}
                <input type="text" name="b_79c46438be0bde6988a0ff40b_95f1222419" tabindex="-1" value="" />
              </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe" />
                  <p style={{ margin: "0px auto" }}>
                    <a href="http://eepurl.com/iGTb_M" title="Mailchimp - email marketing made easy and fun">
                      <span style={{ display: "inline-block", backgroundColor: "transparent", borderRadius: "4px" }}>
                        <img
                          class="refferal_badge"
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                          alt="Intuit Mailchimp"
                          style={{
                            width: "220px",
                            height: "40px",
                            display: "flex",
                            padding: "2px 0px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
