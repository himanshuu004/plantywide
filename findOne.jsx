const axios = require("axios");

const apiEndpoint =
  "https://ap-south-1.aws.data.mongodb-api.com/app/data-vsoyg/endpoint/data/v1/action/findOne";
const apiKey =
  "23iY3wrQf4Z9Cg3rEsaIzIdqtq1HygGJIcQYaDwdh2Ws8bQJHT9wZVSuXYIty4hf"; // Your API key

const requestData = {
  collection: "plants",
  database: "Planty",
  dataSource: "Cluster0",
  projection: { _id: 1 },
};

const findOneDocument = async () => {
  try {
    const response = await axios.post(apiEndpoint, requestData, {
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
        Accept: "application/ejson",
        "Access-Control-Request-Headers": "*",
      },
    });

    console.log("Document found:", response.data);
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
    } else {
      console.error("Error message:", error.message);
    }
  }
};

findOneDocument();
