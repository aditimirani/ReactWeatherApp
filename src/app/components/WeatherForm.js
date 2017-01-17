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
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="">
                        <input type="text" ref="location" placeholder="Enter a city name"/>
                        <button className="button expanded hollow">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
}
