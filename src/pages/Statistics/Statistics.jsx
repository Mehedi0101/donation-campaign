import { useEffect, useState } from "react";
import { getDataFromLS } from "../../utils/localStorageFunctionality";
import { useLoaderData } from "react-router";
import { Cell, Pie, PieChart } from "recharts";

const Statistics = () => {

    document.title = 'Statistics';

    const totalDonation = useLoaderData();
    const [yourDonationsId, setYourDonationsId] = useState([]);

    useEffect(() => {
        const data = getDataFromLS();
        setYourDonationsId(data);
    }, [])

    const data = [
        { name: 'Total Donation', value: totalDonation.length - yourDonationsId.length },
        { name: 'Your Donation', value: yourDonationsId.length }
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
        <div className="pt-24 md:pt-32">
            <div className="flex justify-center items-center">
                <PieChart className="hidden md:block" width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={200}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>

                <PieChart className="md:hidden" width={200} height={200}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-10">
                <div className="flex items-center gap-2">
                    <p className="text-lg leading-none">Your Donation</p>
                    <div className="w-14 h-2 bg-[#00C49F]"></div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-lg leading-none">Total Donation</p>
                    <div className="w-14 h-2 bg-[#FF444A]"></div>
                </div>
            </div>
        </div>
    );

};

export default Statistics;