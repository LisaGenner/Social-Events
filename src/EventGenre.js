import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    const colors = ["#A2C3DB", "#8871A0", "#8AAF22", "#DCB12D", "#3F9F9F"];

    useEffect(() => {
        setData(() => {
          const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
          const data = genres.map((genre) => {
            const value = events.filter((event) =>
              event.summary.toUpperCase().includes(genre.toUpperCase())
            ).length;
            return { name: genre, value };
          });
          return data.filter((entry) => entry.value > 0);
        });
      }, [events]);

    return (
        <ResponsiveContainer height={400} >
            <PieChart width={400} height={400}>
                <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={80}
                fill='#8884d8'
                dataKey='value'
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                     {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
              </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default EventGenre;
