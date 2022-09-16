require("dotenv").config();

const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SIB_Api_Key;

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

function sanitize(str) {
  return str;
}

async function sendMail(data) {
  sendSmtpEmail.subject = data.subject;
  sendSmtpEmail.htmlContent = data.message;
  sendSmtpEmail.sender = {"name": data.name, "email": data.email};
  sendSmtpEmail.to = [{"email": process.env.SIB_Main_Email, "name": process.env.SIB_Main_Name}];
  sendSmtpEmail.headers = {"sender.ip": data.senderip};

  apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
    return {
      code: 1,
      message: "Email has been send successfully. " + JSON.stringify(data),
      status: "success"
    }
  },
  function(error) {
    console.error(error);
    return {
      code: -1,
      message: "Failed to send the email" + error,
      status: "danger"
    }
  });
}

module.exports = {
  sendMail
}