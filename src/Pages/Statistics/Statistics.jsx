
import { Cell, Pie, PieChart } from 'recharts';

const Statistics=()=>{

  const donatedItem=JSON.parse(localStorage.getItem('donate'));
  console.log(donatedItem);
  let mydonation=0;
  if(donatedItem){
       mydonation=donatedItem.length;
  }

    const data = [
      { name: 'Total donation', value: 12-mydonation},
        { name: 'My donation', value: mydonation  },
      ];
      
      const COLORS = ['#FF444A','#00C49F'];

      const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text className='font-bold' x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

  return (
    <div className="max-w-[1350px] mx-auto">
        <PieChart className='mx-auto' width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className='flex justify-center gap-14'>
          <div className='flex gap-4 items-center'>
            <p>Your Donation</p>
            <div className='w-[80px] h-[12px] rounded-md bg-[#00C49F]'></div>
          </div>
          <div className='flex gap-4 items-center'>
            <p>Total Donation</p>
            <div className='w-[80px] h-[12px] rounded-md bg-[#FF444A]'></div>
          </div>
        </div>
    </div>
  ) 

}
export default Statistics;
