import React from 'react';

export const WeatherMessage = (props) =>{
    return (
      <div className="col-xs-8 col-xs-offset-2">
        {props.isLoading ? <p>it's it {props.temp} in {props.location}</p>:<div>fetching weather ...</div> }
      </div>
    );
}
