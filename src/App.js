import React, { Component } from "react";
import TextData from "./Component/TextData/TextData";
import DropDown from "./Component/DropDown/DropDown";
import Graph from "./Component/Graph/Graph";
import Header from "./Component/Header/Header";
import './Component/Graph/Graph.css'
import './Component/TextData/TextData.css'

function processData(inputData) {
  let outputData = [];

  for (const groupInfo of inputData) {
    const gameType = groupInfo.type;
    const groupName = groupInfo.group;

    if (gameType === "TOTAL") {
      for (const teams of groupInfo.table) {
        const countryName = teams.team.name;
        const teamPoints = teams.points;
        outputData.push({
          countryName: countryName,
          teamPoints: teamPoints,
          groupName: groupName
        });
      }
    }
  }

  console.log(outputData);
  return outputData;
}

class App extends Component {
  state = {
    selectedGroupName: "",
    dataFromAPI: []
  };

  onSelectedGroupChange = ev => {
    console.log("I am in on select function");
    let value = ev.target.value;
    this.setState({
      selectedGroupName: value
    });
    console.log(value);
    return value;
  };

  //fetch
  componentDidMount() {
    const options = {
      headers: new Headers({
        "X-Auth-Token": "034e960b7edd4d9ca919fd5ad14046ad"
      })
    };
    fetch(
      "https://api.football-data.org/v2/competitions/2000/standings",
      options
    )
      .then(response => response.json())
      .then(data => {
        let dataFromAPI = data.standings;

        let fixedData = processData(dataFromAPI);
        console.log("fixedData", fixedData);

        this.setState({
          dataFromAPI: fixedData
        });
      });
  }

  render() {
    return (
      <div>
        
        {/* **********Header Component************* */}
        <Header />
        <h1 class="page-title">SEARCH FOR FIFA 2018 STATS</h1>
        
        {/* **********Drop Down Component************* */}
        <DropDown onChange={this.onSelectedGroupChange} />

        {/* **********Text Data Component************* */}
        
        {this.state.dataFromAPI
          .filter(item => {return item.groupName === this.state.selectedGroupName}
            // if (item.groupName === this.state.selectedGroupName) {
            //   console.log("Fround the group name", item.groupName);
            //   return true;
            // } else {
            //   return false;
            // }
          )
          .map((data, index) => {
            return (
              <TextData name={data.countryName} points={data.teamPoints} />
            );
          })}
          
        <ul className="bar-graph">
        {/* ***********Graph Component************* */}
        {this.state.dataFromAPI
          .filter(item => {return item.groupName === this.state.selectedGroupName})
          .map((data, index) => {
            return (
              <Graph name={data.countryName} points={data.teamPoints} />
            );
          })}
          </ul>
      </div>
    );
  }
}

export default App;
