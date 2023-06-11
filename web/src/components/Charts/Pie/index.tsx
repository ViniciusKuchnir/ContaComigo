import React from 'react';
import * as C from './styles';
import {Doughnut} from 'react-chartjs-2';

type Props = {
    chartData: any,
    title: string
}

const PieChart = ({chartData, title}:Props) => {
  return (
    <C.Container>
        <C.Title>{title}</C.Title>
        {chartData.labels.length === 0 ? 
            <C.EmptyChart>N/A</C.EmptyChart> 
            : 
            <Doughnut
                data={chartData}
                options={{
                plugins: {
                    legend: {
                        position: 'bottom'
                    },   
                    title: {
                    display: true,

                    },
                }
                }}
            />  
        }
        
    </C.Container>
  )
}

export default PieChart