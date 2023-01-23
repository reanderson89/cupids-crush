// deconstructed the props object and called only what was needed. This is where all of the employees individual information will get past to as the rows are created.
const Row = ({team}) => {
    return (
    <tr>
      <td>{team.teamNum}</td>
      <td>{team.division}</td>
      <td>{team.teamName}</td>
      <td>{team.wod1}</td>
      <td>{team.wod2}</td>
      <td>{team.wod1 + team.wod2}</td>
      <td>{team.rank}</td>
    </tr>
    );
};

export default Row;