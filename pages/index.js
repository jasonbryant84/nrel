import Link from 'next/link'
import { useState, useContext, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import Chart from '../components/chart'

const monthsMap = {'jan': 1, 'feb': 2, 'mar': 3, 'apr': 4, 'may': 5, 'jun': 6, 'jul': 7, 'aug': 8, 'sep': 9, 'oct': 10, 'nov': 11, 'dec': 12}

export default function Index() {
    const [lat, setLat] = useState(40),
        [lon, setLon] = useState(-105),
        [avg_dni, setDNI] = useState(Array(12).fill(0)),
        [avg_ghi, setGHI] = useState(Array(12).fill(0)),
        [avg_lat_tilt, setLatTilt] = useState(Array(12).fill(0)),
        [coordsStr, setCoords] = useState('')

    const handleInput = (e) => {
        if(e.target.name === 'lat') {
            setLat(e.target.value)
        } else if(e.target.name === 'lon'){
            setLon(e.target.value)
        } else {
            console.log(`Unknown input with value: ${e.target.value}`)
        }
    }

    const handleClick = (e) => {
        e.preventDefault()

        const set = (json) => {
            let tempDNI = avg_dni,
                tempGHI = avg_ghi,
                tempLatTilt = avg_lat_tilt

            for (const [key, value] of Object.entries(json.outputs.avg_dni.monthly)) {
                tempDNI[monthsMap[key]-1] = value
                setDNI(tempDNI)
            }
            for (const [key, value] of Object.entries(json.outputs.avg_ghi.monthly)) {
                tempGHI[monthsMap[key]-1] = value
                setGHI(tempGHI)
            }
            for (const [key, value] of Object.entries(json.outputs.avg_lat_tilt.monthly)) {
                tempLatTilt[monthsMap[key]-1] = value
                setLatTilt(tempLatTilt)
            }
        }

        var url = new URL(`${window.location.href}nrel`)
        url.search = new URLSearchParams({ lat, lon })

        fetch(url)
            .then(res => res.json())
            .then(json => {
                set(json)
                setCoords(`${lat}${lon}`)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        
    }, [coordsStr])


    return(      
        <Fragment>
            <h3>NREL Data for</h3>
            <Form>
                <p>{`Try coodrindates: 40,-105`}</p>
                <input type="text" name="lat" defaultValue={40} placeholder={`Latitude`} onChange={(e)=> { handleInput(e) }} />
                <input type="text" name="lon" defaultValue={-105} placeholder={`Latitude`} onChange={(e)=> { handleInput(e) }} />
                <button type="button" onClick={(e) => { handleClick(e) }}>Search</button>
            </Form>

            { coordsStr != '' && 
                <Chart x={[]} y={avg_dni} coordsStr={coordsStr} />
            }

            {/* <Link href='/about'>
                <a>About</a>
            </Link> */}
        </Fragment>
    )
}

const Form = styled.form`
    input {
        display: block;
        margin: 0 0 20px;
        border: 0;
        border-bottom: 1px solid rgba(0,0,0,.3);

        &:focus {
            border: 0;
        }
    }
`