// this component is used to create the selectable divisions listed in the "divisions" dropdown menu


const DivisionSelect = ({ divisions, handleDivChange }) => {

  return (
    <>
    <label htmlFor="divisionSelect">Divisions: </label>
    <select name="divisionSelect" id="divisionSelect" onChange={handleDivChange}>
      <option value="0">All</option>
        {divisions.map((division) => <option key={division.id} value={division.id}>{division.description}</option>)}
    </select>
    </>
  );
};

export default DivisionSelect;
