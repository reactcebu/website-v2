import axios from "axios"

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Only POST request is allowed!" }),
    }
  }

  const { email } = JSON.parse(event.body)
  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Email is required!" }),
    }
  }

  const {
    MAILCHIMP_API_KEY,
    MAILCHIMP_LIST_ID,
    MAILCHIMP_SUBDOMAIN,
  } = process.env

  return axios
    .post(
      `https://${MAILCHIMP_SUBDOMAIN}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      { email_address: email, status: "pending", tags: ["Website Signup"] },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(
            `apikey:${MAILCHIMP_API_KEY}`
          ).toString("base64")}`,
        },
      }
    )
    .then(result => {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Successfully subscribed to newsletter!",
        }),
      }
    })
    .catch(err => {
      if (err.response) {
        return {
          statusCode: err.response.status,
          body: JSON.stringify(err.response.data),
        }
      }

      return {
        statusCode: 500,
        body: JSON.stringify(err && err.message),
      }
    })
}
