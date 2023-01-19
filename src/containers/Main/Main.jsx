import { useEffect, useState } from 'react';
import API from "../../utils/API";
import Row from "../../components/Row/Row"
import "./Main.css";


const Main = () => {
const [teamState, setTeamState] = useState([
    {
        division: "rx",
        teamName: "Wodder Fodder",
        teamNum: 1,
        points: 65,
        rank: 3
    },
    {
        division: "scaled",
        teamName: "Scaled the walls",
        teamNum: 2,
        points: 165,
        rank: 3
    },
    {
        division: "rx",
        teamName: "Bongs and Barbells",
        teamNum: 3,
        points: 265,
        rank: 2
    },
    {
        division: "rx",
        teamName: "VR don't make PRs",
        teamNum: 4,
        points: 365,
        rank: 1
    },
    {
        division: "scaled",
        teamName: "Butted and Gutted",
        teamNum: 5,
        points: 465,
        rank: 2
    },
    {
        division: "scaled",
        teamName: "Something Funny",
        teamNum: 6,
        points: 565,
        rank: 1
    },
]);



const [search, setSearch] = useState("");

// useEffect(() => {
//     API.getAll()
//     .then(response => {
//         setDataState(response.data)
//         console.log(response.data);
//         console.log(JSON.parse(response.data.scores));
//     })
//     .catch(err => console.log(err));
// }, [])

// needs to be refactored
  // sorts the names from A-Z, if the first names are the same, it sorts by last name.
//   const handleSortUpName = () => {
//     const spreadEmployee = [...employeeState];
//     const sortedEmployees = spreadEmployee.sort((a,b) => (a.name.first > b.name.first) ? 1 : (a.name.first === b.name.first) ? ((a.name.last > b.name.last)? 1 : -1): -1)
//     setEmployeeState(sortedEmployees);
//   };

// needs to be refactored
    // sorts the names from Z-A, if the first names are the same, it sorts by last name.
//   const handleSortDownName = () => {
//     const spreadEmployee = [...employeeState];
//     const sortedEmployees = spreadEmployee.sort((a,b) => (b.name.first > a.name.first) ? 1 : (b.name.first > a.name.first) ? ((b.name.last > a.name.last) ?1 : -1): -1)
//     setEmployeeState(sortedEmployees);
//   };

  // filters the search results as the search value is typed
  const handleInputChange = event => {
    let value = event.target.value;
    setSearch(value);
  };

  const showTeams = () => {
    
  }


    return(
        <>
      <div style={{backgroundColor: "black", color: "white"}} className="row">
      <div className="col-sm-4">
      </div>
        <div className="col-sm-4">
          <div className="input-group" >
      <input type="text" className="form-control mb-3 mt-3" name="search" value={search} onChange={handleInputChange} placeholder="Search"/>
      </div>
      <div className="col-sm-4">
      </div>
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
         {teamState.sort((a,b) => a.rank - b.rank).sort((a,b) => a.division.length - b.division.length).map(team => 
            <Row division={team.division} teamName={team.teamName} teamNum={team.teamNum} rank={team.rank} points={team.points} />)}

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
