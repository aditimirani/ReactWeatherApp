import React from 'react';
import {Link} from 'react-router'

export const Examples =(props) =>{
        return (
          <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are few example locations to try out: </p>
            <ol>
              <li><Link to="/?location=Bangalore">Bangalore ,Ind</Link></li>
              <li><Link to="/?location=Sydney">Sydney , AUS</Link></li>
            </ol>
          </div>
        );
}
