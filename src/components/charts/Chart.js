import  './Chart.css';
//import Main from '../components/main/Main';
import {Line} from "../components/charts/Charts"

const LineGraph = ( ) => {
  const state = {
    labels:["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
    datasets:[
      { 
        label: "Rainfall",
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        data: [65, 45, 123, 42, 43 ]
    }
    ]
  }
  const options = {
    pluging:{
      legend:{
        display: true,
        position:"bottom"
      },
      title:{
        text:"Avarage Rainfall per month",
        display: "true",
        fontSize:20
      }
    }
  }
  return( 
    <div className="linegraph">
      <Line
              data={state}
              options={options}
      />
      <p style={{textAlign: "center"}}>Line Graph</p>
    </div>
  )
}
export default LineGraph;