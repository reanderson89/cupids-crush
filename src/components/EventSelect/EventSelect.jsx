const EventSelect = ({ events }) => {

  return (
    <>
    <label htmlFor="eventSelect"></label>
    <select name="eventSelect" id="eventSelect">
      <option value="0">Overall</option>
        {events.map((event, i) => <option key={event.id} value={event.id*0+i+1}>{event.description} (WOD-{i+1})</option>)}
    </select>
    </>
  );
};

export default EventSelect;
