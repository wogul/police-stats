import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
   constructor()
    {
        super();
        this.state = {
            chartData:{}
        }


    }

    componentWillMount() {
       this.getChartData();
    }

    getChartData()
    {
        //Ajax calls here
        this.setState({chartData: {
        labels: ['Boston','London','Krakow','Minneapolis','Cambridge','New Bedford'],
            datasets: [
            {
                label: 'Population',
                data:[
                    617594,
                    181045,
                    153060,
                    106519,
                    105162,
                    95072
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }
        ]
    }})
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Chart chartData={this.state.chartData}/>
        </header>
      </div>
    );
  }
}

export default App;