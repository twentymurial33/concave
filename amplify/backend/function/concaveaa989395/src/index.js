exports.handler = async (event) => {
  console.log(event);
  const dashboardId = event.pathParameters.dashboardId;
  const dashboard = {
    dashboardId: dashboardId,
    dashboardName: "Dashboard " + dashboardId,
  };
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(dashboard),
  };
  return response;
};
