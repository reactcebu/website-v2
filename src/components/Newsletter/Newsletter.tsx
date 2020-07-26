import React from "react"

export const Newsletter: React.FC = () => {
  return (
    <form
      action="https://jscebu.us3.list-manage.com/subscribe/post?u=06553316330cdb8739c35ede7&amp;id=7fa2c94c09"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
    >
      <label htmlFor="mce-EMAIL">Subscribe</label>
      <input
        type="email"
        name="EMAIL"
        className="email"
        id="mce-EMAIL"
        placeholder="Your email address"
        required
      />
      <input
        type="submit"
        value="Subscribe"
        name="subscribe"
        id="mc-embedded-subscribe"
        className="button"
      />
      <div style={{ position: `absolute`, left: `-5000px` }} aria-hidden="true">
        <input
          type="text"
          name="b_06553316330cdb8739c35ede7_7fa2c94c09"
          tabIndex={-1}
          value=""
        />
      </div>
    </form>
  )
}
