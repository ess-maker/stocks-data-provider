import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import useCustomFetch from "../hooks/useCustomFetch";
import { StockData } from "../types/types";
import Loding from "./commen/Loding";
import Err from "./commen/Err";

Chart.register(...registerables);

const Showstockdata = ({urltoFatch}:{urltoFatch:string}) => {
  console.log(urltoFatch);
  const [date , err , loding] = useCustomFetch<StockData>(urltoFatch);

  


  if (loding) return <Loding />
  if (err) return <Err />

  console.log(date?.ticker);
  console.log([date?.results.map(ele => ele.c) , date?.results.map(ele => ele.vw) ]);
  


  const state = {
    labels:date?.ticker,
    datasets: [
      {
        label: date?.status,
        backgroundColor: ["Indigo", "Purple", "Yellow", "Teal", "Red", "Navy", "Brown"],
        data:[date?.results.map(ele => ele.c)[0] ,
           date?.results.map(ele => ele.vw)[0] ,
           date?.results.map(ele => ele.h)[0],
           date?.results.map(ele => ele.l)[0]],
      },
    ],
  };

  

  return (
    <Line
      data={state}
      options={{
        responsive:true,
        plugins: {
          title: {
            display: true,
            text: date?.ticker,
          },
          
        },
      }}
    />
  );
};

export default Showstockdata;