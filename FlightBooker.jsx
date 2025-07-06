import React,{useState} from 'react';

const FlightBooker=()=>{
    const [flightType,setFlightType]=useState('one-way');
    
    const [departureDate,setDepartureDate]=useState('');
    const[returnDate,setReturnDate]=useState('');

    const today=new Date().toISOString().split('T')[0]; //Format: yyyy-mm-dd

    const isDepartureDateValid=departureDate && departureDate >=today;
    const isReturnDateValid=flightType==='return'&& returnDate && returnDate >=departureDate;

    const isFormValid=isDepartureDateValid && (flightType==='one-way'|| isReturnDateValid);

    const handleBook=()=>{
        if(flightType==='one-way'){
            alert(`You have booked a one-way flight on $(departureDate}.`);
        }else{
            alert(`You have booked a return flight from $(departureDate) to $(returnDate).`);
        }
    };
    return (
        <div style={{padding:'20px',fontFamily:'sans-serif',maxWidth:'400px'}}>
            <h2>Flight Booker</h2>
            <label>
                Flight Type:$nbsp;
                <select 
                  value={flightType}
                  onChange={(e)=>setFlightType(e.target.value)}
                  >
                    <option
                    value="one-way">One-way Flight</option>
                    <option value="return">Return Flight</option>
                  </select>
            </label>

            <br /> <br />
            <label>
                departureDate:$nbsp;
                <input
                   type="date"
                   value={departureDate}
                   onChange={(e)=>setDepartureDate(e.target.value)}
                   min={today}
                   />
            </label>

            <br /> <br />

            {flightType==='return'&&(
                <label>
                    Return Date:$nbsp;
                    <input
                    type="date"
                    value={returnDate}
                    onChange={(e)=>setReturnDate(e.target.value)}
                    min={departureDate || today}
                    />
                </label>
            )}
            <br /> <br />
            <button onClick={handleBook}
            disabled={!isFormValid}>
                Book Flight
            </button>
        </div>
    );
};
export default FlightBooker;