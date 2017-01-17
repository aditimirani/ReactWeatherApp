import React from 'react';
import {Nav} from "./Nav";
export const Main = (props) =>{
    return (
      <div>
        <Nav/>
        <h1>Main Component</h1>
        {props.children}
      </div>
    );
}
