import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Label, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])
    return (
        <div className='dashboard-charts'>
            <div className="tiny-chart" >
                <h3>Month Wise Sell</h3>
                <LineChart width={350} height={300} data={chartData}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend></Legend>
                </LineChart>
            </div>
            <div className="bar-chart">
                <h3>Investment vs Revenue</h3>
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 25,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>

            <div className="area-chart" >
                <h3>Investment vs Revenue</h3>
                <ResponsiveContainer  >
                    <AreaChart
                        width={250}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 10,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>

                </ResponsiveContainer>
            </div>

            <div className="pie-chart" >
                <h3>Investment vs Revenue</h3>
                <ResponsiveContainer>
                    <PieChart width={300} height={250}>
                        <Pie data={chartData} dataKey="investment" nameKey="" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={chartData} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;