const fetch = require("node-fetch"),
  express = require("express"),
  app = express(),
  port = 3001;

app.get("/get_stations", (req, res) => {
  return fetch("https://feeds.citibikenyc.com/stations/stations.json")
    .then((response) => response.json()
      .then((results) => res.send(results.stationBeanList))
    );
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
