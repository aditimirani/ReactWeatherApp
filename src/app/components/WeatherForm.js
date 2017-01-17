import React from 'react';

export class WeatherForm extends React.Component {
  constructor(props){
    super();
  }
    onFormSubmit(e){
      e.preventDefault();
      let location = this.refs.location.value;
      if(location.length > 0 ){
        this.refs.location.value ="";
        this.props.onSearch(location)
      }
    }
    render() {
        return (
            <div>
                <h3 className="col-xs-8 col-xs-offset-2">Get Weather</h3>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="col-xs-8 col-xs-offset-2">
                        <input type="text" ref="location" placeholder="enter a city name"/>
                        <button className="text-center">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
}
