import { useEffect, useState } from "react";
import API from "../../utils/API";
import Row from "../../components/Row/Row";
import "./Main.css";
import DivisionSelect from "../../components/DivisionSelect/DivisionSelect";
import EventSelect from "../../components/EventSelect/EventSelect";

const Main = () => {

  // state variables for the incoming standings to be set to
  const [teamsToDisplay, setTeamsToDisplay] = useState([]);
  const [allDivisions, setAllDivisions] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  // state variables to track what division/event the user is looking at
  const [currentDiv, setCurrentDiv] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(-1);


  // on page load, make the API calls to get the data to display
  useEffect(() => {
    loadTeams();
    loadDivisionsAndEvents();
  }, []);

  // sets all of the current teams and their updated information to teamsToDisplay array
  const loadTeams = () => {
    API.getAllTeams()
      .then((response) =>
        setTeamsToDisplay(JSON.parse(response.data.allWorkouts))
      )
      .catch((err) => console.log(err));
  };

  // sets the divisions and events to their respective arrays, these are used in the dropdown menus to filter teams selected
  const loadDivisionsAndEvents = () => {
    API.getAllDivisionsAndEvents()
      .then((response) => {
        setAllDivisions(response.data.divisions);
        setAllEvents(response.data.workouts)
        console.log(teamsToDisplay);
      })
      .catch((err) => console.log(err));
  };


  // changes whats being displayed depending on which current division and event is selected. currentEvent-1 is passed as an argument because all of the events to select from the dropdown menu were given a +1 so they would match the event they are attached to.
  const displayTeams = () => {
    let divToDisplay;
    if (currentDiv === 0 && currentEvent === -1) {
      divToDisplay = sortAllTeamsByRankAndDiv();
    } else if (currentDiv === 0 && currentEvent >= 0){
      divToDisplay = sortAllTeamsByEventAndDiv(currentEvent)
    } else if (currentDiv > 0 && currentEvent === -1) {
        divToDisplay = sortOverallByDiv(currentDiv);
    } else if (currentDiv > 0 && currentEvent >= 0){
        divToDisplay = sortByDivAndEvent(currentEvent, currentDiv)
    }
    return divToDisplay;
  };

  // sort all teams by rank and then division. This will create a list that shows the distinct divisions all in the same list.
  const sortAllTeamsByRankAndDiv = () =>
    teamsToDisplay
      .sort((a, b) => a.rank - b.rank)
      .sort((a, b) => a.team["division_id"] - b.team["division_id"])
      .map((team) => <Row team={team} key={team.team.team} />);

      // this will create a list of all teams and how they ranked by a certain event
  const sortAllTeamsByEventAndDiv = (eventNum) =>
    teamsToDisplay
      .sort((a, b) => a.eventScores[eventNum].rank - b.eventScores[eventNum].rank)
      .sort((a, b) => a.team["division_id"] - b.team["division_id"])
      .map((team) => <Row team={team} key={team.team.team} />);

      // this will create a list that only shows the specific division and event selected
  const sortByDivAndEvent = (eventNum, div) =>
    teamsToDisplay
      .filter((team) => team.team["division_id"] === div)
      .sort((a, b) => a.eventScores[eventNum].rank - b.eventScores[eventNum].rank)
      .map((team) => <Row team={team} key={team.team.team} />);

      // this will create a list that shows the overall ranking of a specific division
  const sortOverallByDiv = (div) =>
    teamsToDisplay
      .filter((team) => team.team["division_id"] === div)
      .sort((a, b) => a.rank - b.rank)
      .map((team) => <Row team={team} key={team.team.team} />);

      // sets the current div based on user interaction
      const handleDivChange = (event) => {
        setCurrentDiv(Number(event.target.value));
      };

      // sets the current event based on user interaction
      const handleEventChange = (event) => {
        setCurrentEvent(Number(event.target.value));
      };

  return (
    <>
{/* Creates the dropdown menus on the site to be able to select specific divisions and events */}
      <div
        style={{ backgroundColor: "black", color: "white" }}
        className="row justify-content-center"
      >
        <div className="col-5 my-3 ">
          <DivisionSelect divisions={allDivisions} handleDivChange={handleDivChange} />
        </div>
        <div className="col-5 my-3">
          <EventSelect events={allEvents} handleEventChange={handleEventChange} />
        </div>
      </div>
    

      <div className="row">
        <div className="col">
          <table className="table table-hover table-striped">
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
            <tbody className="text-center">{displayTeams()}</tbody>
          </table>
        </div>
      </div>

    </>
  );
};

export default Main;
