import React from "react";
import { API, Auth } from "aws-amplify";
import { withStyles } from "@material-ui/core/styles";

var QuickSightEmbedding = require("amazon-quicksight-embedding-sdk");

const useStyles = (theme) => ({
  loading: {
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: theme.spacing(4),
  },
});

var dashboard;

class Embed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
    };
  }

  componentDidMount() {
    this.getQuickSightDashboardEmbedURL();
  }

  getQuickSightDashboardEmbedURL = async () => {
    const data = await Auth.currentSession();
    const jwtToken = data.idToken.jwtToken;
    const payloadSub = data.idToken.payload.sub;
    const email = data.idToken.payload.email;

    const params = {
      headers: {},
      response: true,
      queryStringParameters: {
        jwtToken: jwtToken,
        payloadSub: payloadSub,
        email: email,
      },
    };
    const quicksight = await API.get(
      "bellaDashboard",
      "/bellaDashboard",
      params
    );
    console.log(quicksight);
    const containerDiv = document.getElementById("dashboardContainer");

    const options = {
      url: quicksight.data.data.EmbedUrl,
      container: containerDiv,
      parameters: {
        country: "United States",
      },
      scrolling: "no",
      height: "800px",
      width: "912px",
      footerPaddingEnabled: true,
    };
    dashboard = QuickSightEmbedding.embedDashboard(options);
    this.setState({ loader: false });
  };

  render() {
    return (
      <div>
        <div id="dashboardContainer"></div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Embed);
