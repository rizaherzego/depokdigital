
exports.handler = async (event, context) => {
  // Only allow POST
  console.log('helloo ');
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string

  console.log('asdasda' + event.httpMethod);
  console.log('emaails' + event.body.email);
  
  return {
    statusCode: 200,
    body: {
      email: event.body.email
    }
  };
};