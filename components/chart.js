import * as d3 from 'd3';
import React, { Fragment, useEffect, useState, createRef } from 'react';
import PropTypes from 'prop-types'
import { scaleLinear } from 'd3';

let accessToRef = null

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

export default function Chart(props) {
    let chartRef = createRef()

    const [loadedChart, updateLoadStatus] = useState(false),
        h_max = Math.max(props.y),
        data_length = props.y.length,
        h = 200,
        w = 400

    const drawChart = () => {

        console.log('data_length', data_length)
        if(accessToRef != null)
            accessToRef.selectAll("*").remove()

        if(!loadedChart) {
            // const xScale = d3.scaleLinear()
            //     .domain([0, data_length - 1])
            //     .range([0,w])
            // const xAxis = d3.axisBottom(xScale)

            // const yScale = d3.scaleLinear()
            //     .domain([0, h_max])
            //     .range([h, 0])
            // con

            accessToRef = d3.select(chartRef.current)
                .append('svg')
                .attr('width', w) // w
                .attr('height', h) // h
                .style('background-color', '#ffffff')
                .style('padding', 10)
                .style('margin-left', 30)
                .style('overflow', 'visible')

                updateLoadStatus(true)
        }

        if(true) {
            console.log('setting data', props.y)
            accessToRef.selectAll('rect')
                .data(props.y)
                .enter()
                .append('rect')
                .attr('x', (d, i) => i * (w/data_length)) //
                .attr('y', (d, i) => h - 10 * d)
                .attr('width', (w/data_length)) // 65
                .attr('height', (d, i) => d * 10)
                .attr('fill', 'tomato')

            accessToRef
                .append("text")
                .attr("x", w / 2 )
                .attr("y",  h + 30)
                .style('text-anchor', 'middle')
                .text('months');
            accessToRef
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", -30)
                .attr("x",0 - (h / 2))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("DNI"); 

            // X Axis
            const xScale = d3.scaleTime()
                .domain([1, 13])
                .range([0, w]),
            xAxis = d3.axisBottom(xScale)
                .ticks(13)
                .tickFormat(d3.format("d"))
            accessToRef.append('g')
                .attr('transform', `translate(0, ${h})`) 
                .call(xAxis)
        }
    }

    useEffect(() => {
        setTimeout(()=> {
            drawChart()
        }, 10)
    }, [props.coordsStr, loadedChart]);


    return (
        <Fragment>
            <h2>Average DNI (monthly)</h2>
            <div id="chart" ref={chartRef}></div>
        </Fragment>
    );
}

Chart.propTypes = {
    x: PropTypes.array,
    y: PropTypes.array,
    coordsStr: PropTypes.string
}
  
Chart.defaultProps = {
    x: [],
    y: [],
    coordsStr: ''
}