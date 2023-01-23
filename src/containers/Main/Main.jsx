import { useEffect, useState } from 'react';
import API from "../../utils/API";
import Row from "../../components/Row/Row"
import "./Main.css";
import { render } from '@testing-library/react';


const Main = () => {
const [teamState, setTeamState] = useState([
    {
        division: "rx",
        teamName: "Wodder Fodder",
        teamNum: 1,
        wod1: 30,
        wod2: 35,
        points: 65,
        rank: 3
    },
    {
        division: "scaled",
        teamName: "Scaled the walls",
        teamNum: 2,
        wod1: 35,
        wod2: 40,
        points: 75,
        rank: 3
    },
    {
        division: "rx",
        teamName: "Bongs and Barbells",
        teamNum: 3,
        wod1: 45,
        wod2: 40,
        points: 85,
        rank: 2
    },
    {
        division: "rx",
        teamName: "VR don't make PRs",
        teamNum: 4,
        wod1: 20,
        wod2: 75,
        points: 95,
        rank: 1
    },
    {
        division: "scaled",
        teamName: "Butted and Gutted",
        teamNum: 5,
        wod1: 55,
        wod2: 50,
        points: 105,
        rank: 2
    },
    {
        division: "scaled",
        teamName: "Something Funny",
        teamNum: 6,
        wod1: 50,
        wod2: 65,
        points: 115,
        rank: 1
    },
]);



// const [search, setSearch] = useState("");
let [currentDiv, setCurrentDiv] = useState("all");

// useEffect(() => {
//     API.getAll()
//     .then(response => {
//         setDataState(response.data)
//         console.log(response.data);
//         console.log(JSON.parse(response.data.scores));
//     })
//     .catch(err => console.log(err));
// }, [])


  // filters the search results as the search value is typed
  // const handleInputChange = event => {
  //   let value = event.target.value;
  //   setSearch(value);
  // };

  const handleDivChange = event => {
    setCurrentDiv(event.target.value);
    displayDivision();
  }

  // change whats being displayed depending on which current division is selected
  const displayDivision = () => {
    let divToDisplay;
    if(currentDiv === "all"){
      divToDisplay = teamState.sort((a,b) => a.rank - b.rank).sort((a,b) => a.division.length - b.division.length).map(team => 
        <Row division={team.division} teamName={team.teamName} teamNum={team.teamNum} rank={team.rank} points={team.points} />)
    } else if(currentDiv === "scaled"){
      divToDisplay = teamState.filter(team => team.division === "scaled").sort((a,b) => a.rank - b.rank).map(team => 
        <Row division={team.division} teamName={team.teamName} teamNum={team.teamNum} rank={team.rank} points={team.points} />)
    }else if(currentDiv === "rx"){
      divToDisplay = teamState.filter(team => team.division === "rx").sort((a,b) => a.rank - b.rank).map(team => 
        <Row division={team.division} teamName={team.teamName} teamNum={team.teamNum} rank={team.rank} points={team.points} />)
    }
    return divToDisplay;
  }

  const showTeams = () => {
    
  }


    return(
        <>
      <div style={{backgroundColor: "black", color: "white"}} className="row justify-content-evenly">
      <div className="col-sm-3">
      <label htmlFor="allDivs" className='btn btn-lg m-3'>All</label>
        <input type="radio" id="allDivs" value="all" name="divState" onChange={handleDivChange} defaultChecked="checked"/>
      </div>
      <div className="col-sm-3">
      <label htmlFor="rxDiv" className='btn btn-lg m-3'>Rx</label>
        <input type="radio" id="rxDiv" value="rx" name="divState" onChange={handleDivChange}/>
      </div>
      <div className="col-sm-3" >
      <label htmlFor="scaledDiv" className='btn btn-lg m-3' >Scaled</label>
        <input type="radio" id="scaledDiv" value="scaled" name="divState" onChange={handleDivChange}/>
      </div>

      </div>
      <div className="row">
          <div className="col-sm">
        <table className="table table-hover">
  <thead className="text-center">
    <tr>
      <th scope="col">Team Number</th>
      <th scope="col">Division</th>
      <th scope="col">
        <span>
          {/* <button onClick={handleSortUpName} >
            <i className="fas fa-angle-double-up">
              </i> 
          </button> */}
        </span> 
        <span> Team Name </span> 
        <span>
          {/* <button onClick={handleSortDownName} >
             <i className="fas fa-angle-double-down">
               </i>
          </button> */}
        </span>
      </th>
      <th scope="col">Points</th>
      <th scope="col">Rank</th>
    </tr>
  </thead>
  <tbody className="text-center">
    {/* sorts the teams by rank and then division and display them to the page */}
         {/* {teamState.sort((a,b) => a.rank - b.rank).sort((a,b) => a.division.length - b.division.length).map(team => 
            <Row division={team.division} teamName={team.teamName} teamNum={team.teamNum} rank={team.rank} points={team.points} />)} */}
          {displayDivision()}
        
        {/* {search === "" ? teamState.sort((a,b) => a.rank - b.rank).sort((a,b) => a.division.length - b.division.length).map(team => 
            <Row division={team.division} teamName={team.teamName} teamNum={team.teamNum} rank={team.rank} points={team.points} />):
        
        teamState.filter(
            team => team.division.toLowerCase().includes(search.toLowerCase()) ||
            team.teamName.toLowerCase().includes(search.toLowerCase()) ||
            String(team.teamNum).includes(search)
        ).map(team => 
            <Row division={team.division} teamName={team.teamName} teamNum={team.teamNum} rank={team.rank} points={team.points} />
        )} */}
        
  </tbody>
</table>
</div>
        </div>
        </>
    )
      
}

export default Main
