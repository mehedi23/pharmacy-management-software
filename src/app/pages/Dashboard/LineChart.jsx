import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import 'echarts/dist/echarts';
import 'echarts/dist/extension/dataTool';

const LineChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
        const myChart = echarts.init(chartRef.current);
    
        const option = {
            xAxis: {
            type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'To day',
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true
                },
                {
                    name: 'Yester day',
                    data: [222, 333, 232, 233, 232, 332, 333],
                    type: 'line',
                    smooth: true
                }
            ],
            toolbox: {
                show: true,
                feature: {
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                }
            }
        };
    
        option && myChart.setOption(option);
    
        return () => {
            myChart.dispose(); // Dispose the chart when component unmounts
        };
    }, []);
  
    return <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

 export default LineChart