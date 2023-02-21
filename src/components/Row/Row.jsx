// this component is used to create all of the rows for each team in the competition
const Row = ({team}) => {
    return (
    <tr>
      <td>{team.team.description}</td>
      <td>{team.team["division_id"]}</td>
      <td>{team.team.team}</td>
      <td>{team.eventScores[0].rank}</td>
      <td>{team.eventScores[1].rank}</td>
      <td>{team.eventScores[2].rank}</td>
      <td>{team.eventScores[3].rank}</td>
      <td>{team.eventScores[4].rank}</td>
      <td>{team.score}</td>
      <td>{team.rank}</td>
    </tr>
    );
};

export default Row;