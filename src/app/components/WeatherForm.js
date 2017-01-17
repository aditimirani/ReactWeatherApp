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
                <h3 className="">Get Weather</h3>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="">
                        <input type="text" ref="location" placeholder="enter a city name"/>
                        <button className="text-center">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
}
