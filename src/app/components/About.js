import React from 'react';

export const About = (props) => {
      return(
        <div>
          <h1 className="text-center">About</h1>
          <p> This weather application is build on React using ES6. </p>
          <p>Here are the tools I Used</p>
          <ul>
            <li>
              <a href="https://facebook.github.io/react/">React</a> - This was Javascript Framework used
            </li>
            <li>
              <a href="http://openweathermap.org">Open Weather Map</a> - I used
                Open Weather Map to search for weather data by city name
            </li>
            <li>
              <a href="http://foundation.zurb.com/">Foundation</a> - This Framework used for building responsive UI
            </li>
          </ul>
        </div>
      );
}
