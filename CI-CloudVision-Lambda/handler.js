'use strict';

module.exports.handler = async (event, context) => {
  var respuesta = {
    "message": "Go Serverless v1.0! Your function executed successfully!",
    "input": event
  }
  respuesta = JSON.stringify(respuesta,null,2);
  //console.log(respuesta)
  // return {
  //   statusCode: 200,
  //   body: JSON.parse(respuesta)
  // };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  return { message: 'Cambio Go Serverless v1.0! Your function executed successfully!', event };
};
