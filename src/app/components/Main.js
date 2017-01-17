import React from 'react';
import {Nav} from "./Nav";
export const Main = (props) =>{
    return (
      <div>
        <Nav/>
        <div>
        <div className="small-4 medium-6 large-4 small-12 small-centered columns">
          {props.children}
        </div>
      </div>
      </div>
    );
}
