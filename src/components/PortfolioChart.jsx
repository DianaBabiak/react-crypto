import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Doughnut  } from 'react-chartjs-2';
import {useContext} from "react";
import {CryptoContext} from "../context/cripto-context.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PortfolioChart = ()=>{
    const  {assets} =useContext(CryptoContext)

    const data = {
        labels: assets.map(asset=>asset.name),
        datasets: [
            {
                label: '$',
                data: assets.map(asset=>asset.totalAmount),
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                hoverBackgroundColor: ['rgba(255, 182, 193, 1)','rgba(176, 196, 222, 1)','rgba(255, 228, 181, 1)','rgba(143, 188, 143, 1)',],
            }
        ],
    };

    return(
        <div style={{
            display: 'flex',
            marginBottom: '1rem',
            justifyContent: 'center',
            height: 400,
        }}>
            <Doughnut
                data={data}
            />
        </div>

    )
}