import { useEffect, useState } from 'react';
import API from "../../utils/API";
import Row from "../../components/Row/Row"
import "./Main.css";
import { render } from '@testing-library/react';


const Main = () => {
// const [teamState, setTeamState] = useState([
//     {
//         division: "rx",
//         teamName: "Wodder Fodder",
//         teamNum: 1,
//         wod1: 50,
//         wod2: 15,
//         points: 65,
//         rank: 3
//     },
//     {
//         division: "scaled",
//         teamName: "Scaled the walls",
//         teamNum: 2,
//         wod1: 35,
//         wod2: 40,
//         points: 75,
//         rank: 3
//     },
//     {
//         division: "rx",
//         teamName: "Bongs and Barbells",
//         teamNum: 3,
//         wod1: 45,
//         wod2: 40,
//         points: 85,
//         rank: 2
//     },
//     {
//         division: "rx",
//         teamName: "VR don't make PRs",
//         teamNum: 4,
//         wod1: 85,
//         wod2: 10,
//         points: 95,
//         rank: 1
//     },
//     {
//         division: "scaled",
//         teamName: "Butted and Gutted",
//         teamNum: 5,
//         wod1: 55,
//         wod2: 50,
//         points: 105,
//         rank: 2
//     },
//     {
//         division: "scaled",
//         teamName: "Something Funny",
//         teamNum: 6,
//         wod1: 50,
//         wod2: 65,
//         points: 115,
//         rank: 1
//     },
// ]);

const [teamsToDisplay, setTeamsToDisplay] = useState([]);
let [currentDiv, setCurrentDiv] = useState(0);
let [currentEvent, setCurrentEvent] = useState(0)

// useEffect(() => {
//     API.getAll()
//     .then(response => {
//         setTeamsToDisplay(JSON.parse(response.data.allWorkouts));
        
//     })
//     .catch(err => console.log(err));
// }, [])

// useEffect(() => {
//   if(teamsToDisplay.length){
//     console.log(teamsToDisplay);
//     return;
//   }
// }, [teamsToDisplay])


  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = () => {
    API.getAll()
      .then((response) => {
        setTeamsToDisplay(JSON.parse(response.data.allWorkouts));
        console.log(teamsToDisplay);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDivChange = event => {
    setCurrentDiv(Number(event.target.value));
  }

  const handleEventChange = event => {
    setCurrentEvent(Number(event.target.value) -1)
  }

  // change whats being displayed depending on which current division is selected
  const displayTeams = () => {
    console.log(`Current Div: ${currentDiv}`);
    console.log(`Current Event: ${currentEvent}`);
    let divToDisplay;
    if(currentDiv === 0){
      divToDisplay = sortAllTeamsByRankAndDiv();
    } else if(currentDiv > 0){
      if(currentEvent >= 0){
        divToDisplay = sortByDivAndEvent(currentEvent, currentDiv);
        return divToDisplay;
      }
      divToDisplay = sortScaledTeamsByRank();
    }
    return divToDisplay;
  }

  // sort by rank
  const sortAllTeamsByRankAndDiv = () => teamsToDisplay.sort((a,b) => a.rank - b.rank).sort((a,b) => a.team["division_id"] - b.team["division_id"]).map(team => 
      <Row team={team} key={team.team.team}/>)
  
  const sortScaledTeamsByRank = () => teamsToDisplay.sort((a,b) => a.rank - b.rank).map(team => 
    <Row team={team} key={team.team.team}/>)

  const sortRxTeamsByRank = () => teamsToDisplay.sort((a,b) => a.rank - b.rank).map(team => 
    <Row team={team} key={team.team.team}/>)

  const sortByDivAndEvent = (wodNum, div) => teamsToDisplay.filter(team => team.team["division_id"] === div).sort((a,b) => a.eventScores[wodNum].rank - b.eventScores[wodNum].rank).map(team => 
    <Row team={team} key={team.team.team}/>)

    return(
        <>
        {/* division choice radio buttons */}
      <div style={{backgroundColor: "black", color: "white"}} className="row justify-content-evenly">
        <h3 className="col-sm-2 m-3">Division:</h3>
      <div className="col-sm-2">
      <label htmlFor="allDivs" className='btn btn-lg m-3'>All</label>
        <input type="radio" id="allDivs" value="0" name="divState" onChange={handleDivChange} defaultChecked="checked"/>
      </div>
      <div className="col-sm-2">
      <label htmlFor="rxDiv" className='btn btn-lg m-3'>Rx</label>
        <input type="radio" id="rxDiv" value="1" name="divState" onChange={handleDivChange}/>
      </div>
      <div className="col-sm-2" >
      <label htmlFor="scaledDiv" className='btn btn-lg m-3'>Scaled</label>
        <input type="radio" id="scaledDiv" value="2" name="divState" onChange={handleDivChange}/>
      </div>
      </div>

      {/* Wod choice radio buttons */}
      <div style={{backgroundColor: "black", color: "white"}} className="row justify-content-evenly">
      <h3 className="col-sm-2 m-3">Event:</h3>
      <div className="col-sm-2">
      <label htmlFor="overall" className='btn btn-lg m-3'>Overall</label>
        <input type="radio" id="overall" value="0" name="wodState" onChange={handleEventChange} defaultChecked="checked"/>
      </div>
      <div className="col-sm-2">
      <label htmlFor="wod1" className='btn btn-lg m-3'>Event-1</label>
        <input type="radio" id="wod1" value="1" name="wodState" onChange={handleEventChange}/>
      </div>
      <div className="col-sm-2">
      <label htmlFor="wod2" className='btn btn-lg m-3'>Event-2</label>
        <input type="radio" id="wod2" value="2" name="wodState" onChange={handleEventChange}/>
      </div>

      </div>
      <div className="row">
          <div className="col-sm">
        <table className="table table-hover">
  <thead className="text-center">
    <tr>
      <th scope="col">Team Number</th>
      <th scope="col">Division</th>
      <th scope="col">Team Name</th>
      <th scope="col">WOD-1</th>
      <th scope="col">WOD-2</th>
      <th scope="col">WOD-3</th>
      <th scope="col">WOD-4</th>
      <th scope="col">WOD-5</th>
      <th scope="col">Points</th>
      <th scope="col">Rank</th>
    </tr>
  </thead>
  <tbody className="text-center">
    {displayTeams()}
  </tbody>
</table>
</div>
        </div>
        </>
    )
      
}

export default Main
