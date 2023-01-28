const DivisionSelect = ({ divisions }) => {

  return (
    <>
    
    <label htmlFor="divisionSelect"></label>
    <select name="divisionSelect" id="divisionSelect">
      <option value="0">All</option>
        {divisions.map((division) => <option key={division.id} value={division.id}>{division.description}</option>)}
    </select>
    </>
  );
};

export default DivisionSelect;
