// deconstructed the props object and called only what was needed. This is where all of the employees individual information will get past to as the rows are created.
const Row = ({teamNum, teamName, rank, points, division}) => {
    return (
    <tr>
      <td>{teamNum}</td>
      <td>{division}</td>
      <td>{teamName}</td>
      <td>{points}</td>
      <td>{rank}</td>
    </tr>
    );
};

export default Row;