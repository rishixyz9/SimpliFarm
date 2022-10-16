import styles from '../styles/dashboard.module.css'
import React, {Component, useState} from 'react';
import {Chart as ChartJS} from "chart.js/auto";
import { Line } from 'react-chartjs-2';

export default function Humidity(props) {
    const labels = ["S", "M", "T", "W", "TH", "F", "S", "SU", "M", "T", "W", "TH", "F", "S"];

    const options = { 
        responsive: true,
        maintainAspectRatio: true,
        animation: {
            duration: 3500,
            easing: 'easeInOutBack',
            delay: 250,
            colors: { type: 'color', properties: ['borderColor', 'backgroundColor'], from: 'transparent' }
        },
        plugins: {
            legend: {
                display: false
            },
        }
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Humidity Percentage",
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: '#FDFCFF',
                data: props.data,
            },
        ],
    };

    return (
        <Line className ="self-center" options={options} data={data} />
    )
}