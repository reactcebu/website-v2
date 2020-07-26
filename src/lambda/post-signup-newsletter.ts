export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Only POST request is allowed!" }),
    }
  }

  // @todo: Do the actual implementation here..

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Successfully signup to newsletter!" }),
  }
}
