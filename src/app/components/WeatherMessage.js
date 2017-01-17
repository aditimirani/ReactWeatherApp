import React from 'react';

export const WeatherMessage = (props) =>{
    return (
      <div className="text-center">
        {props.isLoading ? <p>it's it {props.temp} in {props.location}</p>:<div className="text-center">fetching weather ...</div> }
      </div>
    );
}
