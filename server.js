const express = require("express");
global.fetch = require("node-fetch");
const AWS = require("aws-sdk");
const app = express();
var AWS_REGION = "us-east-1";
app.use(express.json());
function generateEmbedUrlForAnonymousUser(
  accountId, // YOUR  ID
  initialDashboardId, // DASHBOARD ID TO WHICH THE CONSTRUCTED URL POINTS
  quicksightNamespace, // VALID NAMESPACE WHERE YOU WANT TO DO NOAUTH EMBEDDING
  authorizedResourceArns, // DASHBOARD ARN LIST TO EMBED
  generateEmbedUrlForAnonymousUserCallback, // GENERATEEMBEDURLFORANONYMOUSUSER SUCCESS CALLBACK METHOD
  errorCallback // GENERATEEMBEDURLFORANONYMOUSUSER ERROR CALLBACK METHOD
) {
  const experienceConfiguration = {
    Dashboard: {
      InitialDashboardId: "78a8e352-a998-4705-8e16-94d5f9712491",
    },
  };
  console.log("hello world3");
  const generateEmbedUrlForAnonymousUserParams = {
    AwsAccountId: "567024620811",
    Namespace: "default",
    AuthorizedResourceArns: [
      "arn:aws:quicksight:us-east-1:567024620811:dashboard/I0a1beb8f-2fbb-46b7-b4b2-4081a993ce40",
    ],
    AllowedDomains: "*",
    ExperienceConfiguration: experienceConfiguration,
    SessionLifetimeInMinutes: 600,
  };

  const quicksightClient = new AWS.QuickSight({
    region: process.env.AWS_REGION,
  });

  quicksightClient.generateEmbedUrlForAnonymousUser(
    generateEmbedUrlForAnonymousUserParams,
    function (err, data) {
      if (err) {
        console.log(err, err.stack);
        errorCallback(err);
      } else {
        const result = {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*", // USE YOUR WEBSITE DOMAIN TO SECURE ACCESS TO THIS API
            "Access-Control-Allow-Headers": "Content-Type",
          },
          body: JSON.stringify(data),
          isBase64Encoded: false,
        };
        generateEmbedUrlForAnonymousUserCallback(result);
      }
    }
  );
  console.log(result);
}

// console.log(result);
app.listen(5000, () => console.log("Server Started..."));
