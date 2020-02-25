import React from "react";
import { withRouter } from "react-router-dom";
import MaterialTable from "material-table";

const StationItem = ({ location }) => {
  const stationData = location.state,
    jsonDataMap = (stationData) => Object.keys(stationData).map((key) => ({ key, value: stationData[key] }));

  return (
    <>
    <MaterialTable
      title={`${stationData.stationName}`}
      columns={[
        {
          title: "Field",
          field: "key"
        },
        {
          title: "Value",
          field: "value",
          render: station => station.value
        }
      ]}
      data={jsonDataMap(stationData)}
    />
    </>
  );
};

export default withRouter(StationItem);
