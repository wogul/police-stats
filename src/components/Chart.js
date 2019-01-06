import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {chartData: props.chartData}
    }

    render(){
        return(
            <div className="Chart">
                <Bar
                    data={this.state.chartData}
                    width={400}
                    height={180}
                    options={{
                        title: {
                            display: true,
                            text: 'Largest cities',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    }}
                />
                <Line
                    data={this.state.chartData}
                    width={400}
                    height={180}
                    options={{
                        title: {
                            display: true,
                            text: 'Largest cities',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    }}
                />
                <Pie
                    data={this.state.chartData}
                    width={400}
                    height={180}
                    options={{
                        title: {
                            display: true,
                            text: 'Largest cities',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;