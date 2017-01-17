import React from 'react';

export const WeatherMessage = (props) =>{
    return (
      <div className="">
        {props.isLoading ? <p>it's it {props.temp} in {props.location}</p>:<div>fetching weather ...</div> }
      </div>
    );
}
