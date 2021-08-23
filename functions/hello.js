exports.handler = async function (event, context) {
  // your server-side functionality
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "Jay Lee",
      age: 29,
      email: "cjswodlehdgn@gmail.com",
    }),
  };
};
