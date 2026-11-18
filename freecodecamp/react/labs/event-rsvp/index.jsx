const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [totalAttendees, setTotalAttendees] = useState(0);
  const [dietPref, setDietPref] = useState('');
  const [guestCheckbox, setGuestCheckbox] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGuestCheckbox = e => {
    setGuestCheckbox(e.target.checked);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div className='container'>
      <h1 className='title'>Wedding RSVP Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type='text' 
          placeholder='Your Name'
          value={name}
          onChange={e => setName(e.target.value)} 
          required 
        />
        <label>Email:</label>
        <input 
          type='email' 
          placeholder='Your Email' 
          value={email}
          onChange={e => setEmail(e.target.value)}
          required 
        />
        <label>Number of Attendees:</label>
        <input 
          type='number'
          value={totalAttendees}
          onChange={e => setTotalAttendees(e.target.value)} 
          placeholder='Number of Attendees' 
          min='1' 
          required 
        />
        <label>Dietary Preferences:</label>
        <input 
          type='text' 
          placeholder='Dietary Preferences (Optional):'
          value={dietPref}
          onChange={e => setDietPref(e.target.value)}
        />
        <label>
          Bringing additional guests?
          <input 
            type='checkbox'
            checked={guestCheckbox}
            onChange={handleGuestCheckbox}
          />
        </label>
        <button type='submit'>Submit RSVP</button>
      </form>
      {
        isSubmitted && (
          <div>
            <h2>RSVP Submitted</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Number of Attendees: {totalAttendees}</p>
            <p>Dietary Preferences: {dietPref || 'None'}</p>
            <p>Bringin Additional Guests: {guestCheckbox? 'Yes' : 'No'}</p>
          </div>
        )
      }
    </div>
  );
}
