import React, { Component } from "react";
import { Link } from 'react-router-dom';

import {
    Label,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  YAxis,
  ResponsiveContainer
} from "recharts";

//   const data01 = {
//       {}
//   }

const data = [

  {  'Number of Concerts per Month': 0, 'Number of Movies per Month':10 },
  { 'Number of Concerts per Month': 1 , 'Number of Movies per Month':8 , Choice:'A' },
//   { 'Number of Concerts per Month': 2, 'Number of Movies per Month':6 , 'inside':4, name:'B'},
//   { 'Number of Concerts per Month': 3 ,'Number of Movies per Month':4 , 'outside': 8, name:'C'},
//   { 'Number of Concerts per Month': 4 ,'Number of Movies per Month':2  },
  { 'Number of Concerts per Month': 5 , 'Number of Movies per Month':0},
  {'Number Of Movies per Month': 10, 'Number of Concerts per Month':2, Choice:'B'},
  {'Number of Movies Per Month': 1, 'Number of Concerts per Month':3, Choice:'C'}

];


class Graph extends Component {
  constructor() {
    super();
    this.state = {
      result:'',
      score: '',
      attempts:0
    };
  }

  onClickFalse=(e)=>{
      console.log(e)
      let {result, score, attempts}=this.state
      if (this.state.score !==100){
      this.setState({
        result:'INCORRECT',
        score:0,
        attempts:attempts+=1
      })
  }
}
  onClickTrue=(e)=>{
    console.log(e)
    let {result, score, attempts}=this.state
    if (e.value === 8){
        this.setState({
            attempts:attempts+=1
        }), 
        this.setState({
      result:'CORRECT',
      score:100,
      
    })
}
  }

  render() {
      let customDot= {
        r: 10,
        onClick: this.onClickFalse

      }
      let customDot2={
          r:10, 
          onClick:this.onClickTrue
      }
    return (
      <div>
        <p>QUESTION 1 <br/> At what point on the graph is Mark maximizing his budget? <br/> SELECT POINTS A, B , OR C
        </p>
        <div className="line-chart-wrapper">
        <ResponsiveContainer height={500} width={1000}>

          <LineChart
            data={data}
            margin={{ top: 50, right: 0, bottom: 50, left: 400 }}
          >
              <XAxis type='number' dataKey="Number of Concerts per Month"  ticks={[1, 2, 3, 4, 5]}
              label={{ value:"Number of Concerts per Month" , position:"insideBottom", dy: 25}}
              />
    
            
            <YAxis dataKey="Number of Movies per Month" ticks={[0, 2, 4, 6, 8, 10]} 
            label={{ value: "Number of Movies per Month", position: "left", dy:10, dx:20}}/>
            <button>hi </button>
           
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
       
            <Line type="monotone" dataKey="Number of Movies per Month" stroke="#ff7300" yAxisId={0} dot ={customDot2}/>
            <Line type="monotone" dataKey="Number Of Movies per Month" stroke="#ff7300" yAxisId={0}  dot ={customDot}/>
            <Line type="monotone" dataKey="Number of Movies Per Month" stroke="#ff7300" yAxisId={0} dot ={customDot}/>
            <Line type="monotone" dataKey="Choice" stroke="red" yAxisId={0} dot ={customDot}/>



<Tooltip/>
          </LineChart>
          </ResponsiveContainer>
        </div>

<p>
        <b > 
            Attempts: {this.state.attempts}
            <br/>
            {this.state.result}
            
            {this.state.attempts ? <p>Score: {this.state.score} </p>: ''}
            <br/>
            
            
        </b>
        </p>

        {this.state.score ===100 ? <p> <Link to= '/graph2'> Next Question</Link></p> : ''}
      </div>
    );
  }
}

export default Graph;
