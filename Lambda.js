//to log clouldwatch event using lambda

const aws = require("aws-sdk");
const cloudwatchlogs = new aws.cloudwatchlogs();
exports.handler = async (event) => {
  let message = "Hi from sarvesh";
  var params = {
   
    logevents: [{ message: message }],
  };
  try {
    await cloudwatchlogs.putlogevents(params).promise();  //putlogevents --> send data to clould service
    console.log(`successfully sent message to cloudwatch: ${message}`);
  } catch (err) {
    console.log(`error sending message to cloudwatch: ${err}`);
    throw err;
  }
};
