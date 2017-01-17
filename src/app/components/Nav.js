import React from 'react';
import {IndexLink} from 'react-router'

export const Nav =(props) => {
        return (
            <div>Nav Component
              <ul>
                <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight :'bold'}}>Get Weather</IndexLink></li>
                <li><IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight :'bold'}}>About</IndexLink></li>
                <li><IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight :'bold'}}>Examples</IndexLink></li>
              </ul>
            </div>
        );
}
