import React, { useRef, useState } from "react"

export const Newsletter: React.FC = () => {
  const emailInput = useRef(null)
  const [formState, setFormState] = useState({
    status: "idle",
    message: null,
  })

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const email = emailInput.current.value

    setFormState({
      status: "sending",
      message: "Please wait a moment...",
    })
    fetch(`/.netlify/functions/post-signup-newsletter`, {
      method: "POST",
      body: JSON.stringify({ email }),
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }

        throw new Error(res.statusText)
      })
      .then(result => {
        console.log(result)
        setFormState({
          status: "success",
          message:
            "Yay! You have successfully subscribed to our newsletter. Please check your inbox to confirm your email...",
        })
      })
      .catch(err => {
        console.log(err)
        setFormState({
          status: "failed",
          message: "Ooops, something went wrong subscribing to newsletter!",
        })
      })
  }

  return (
    <>
      {formState.status !== "idle" && <p>{formState.message}</p>}
      <form
        onSubmit={handleSubmit}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <label htmlFor="mce-EMAIL">Subscribe</label>
        <input
          type="email"
          name="email"
          className="email"
          id="mce-EMAIL"
          placeholder="Your email address"
          ref={emailInput}
          required
        />
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
        />
        <div
          style={{ position: `absolute`, left: `-5000px` }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_06553316330cdb8739c35ede7_7fa2c94c09"
            tabIndex={-1}
            value=""
          />
        </div>
      </form>
    </>
  )
}
