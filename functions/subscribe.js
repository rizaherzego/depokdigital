import querystring from "querystring";

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  //   const params = querystring.parse(event.body);
  //   const name = params.name || "World";

  
  console.log('hello ' + event.body.email);
  
  return {
    statusCode: 200,
    email:event.body.email,
    full_name:event.body.full_name
  };
};