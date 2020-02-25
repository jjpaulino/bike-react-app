import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import MaterialTable from 'material-table';

// Fetch the data from the api
function getStationsData(stationURL) {
  return axios.get(stationURL)
    .then((res) => res.data)
    .catch((err) => {
      console.error('There was an error fetching the station data: ', err);
    });
};

const StationList = ({ history, stationURL}) => {
  const [stationsData, setStationsData] = useState([]);

  // Handle click event
  const handleSelectedItem = (event, rowData) => {
    delete rowData.tableData;

    history.push(`/station_item?id=${rowData.id}`, rowData);
  };

  useEffect(() => {
  const loadStationsData = async () => {
    const resStationData = await getStationsData(stationURL);

    setStationsData(resStationData);
  }

  loadStationsData();
  }, [stationURL]);

  return (
    <>
      <MaterialTable
        title="Station List"
        columns={[
          { title: "ID Number", field: "id" },
          { title: "Station Name", field: "stationName" },
          {
            title: "Available Docks",
            field: "availableDocks",
            type: "numeric"
          },
          {
            title: "Available Bikes",
            field: "availableBikes",
            type: "numeric"
          },
          {
            title: "Status",
            field: "statusKey",
            render: (rowData) => rowData.statusKey ? "Available" : "Unavailable"
          }
        ]}
        data={stationsData}
        options={{
          pageSize: 10
        }}
        onRowClick={handleSelectedItem}
      />
      </>
  );
};

export default withRouter(StationList);
