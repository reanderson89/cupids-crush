const EventSelect = ({ events, handleEventChange }) => {

  return (
    <>
    <label htmlFor="eventSelect">Events: </label>
    <select name="eventSelect" id="eventSelect" onChange={handleEventChange} >
      <option value="-1">Overall</option>
        {events.map((event, i) => <option key={event.id} value={i}>{event.description} (WOD-{i+1})</option>)}
    </select>
    </>
  );
};

export default EventSelect;
