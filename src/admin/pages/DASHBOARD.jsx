import React from "react";
import styled from "styled-components"
import { useState, useEffect } from "react";
import { COUNTRIES } from "../../util/country";
import CountryDetail from "../components/DashboardDetail/countryDetail";
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mobile', value: 50 },
    { name: 'Tablet', value: 20 },
    { name: 'Desktop', value: 4 },
    { name: 'Unknow', value: 90 },
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                fill={fill}
                endAngle={endAngle}
                startAngle={startAngle}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 8}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


export default function DASHBOARD() {
    const [select, setSelect] = useState("")
    const [inputSearch, setInputSearch] = useState("")
    const [sortCountry, setSortCountry] = useState([])


    useEffect(() => {
        switch (select) {
            case "A-Z" || "a-z":
                setSortCountry((item) => [...item.sort((a, b) => a.common.localeCompare(b.common))])
                break
            case "Z-A" || "z-a":
                setSortCountry((item) => [...item.sort((a, b) => (a.common > b.common ? -1 : 1))])
                break
            case "1% from 100%" || "1-100":
                setSortCountry((item) => [...item.sort((a, b) => (a.visitTotal - b.visitTotal))])
                break
            case "100% from 1%" || "100-1":
                setSortCountry((item) => [...item.sort((a, b) => (b.visitTotal - a.visitTotal))])
                break
            default:
                setSortCountry(() => [...COUNTRIES])
                break
        }

    }, [select])

    const demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

    const [state, setState] = useState({ activeIndex: 0, });

    const onPieEnter = (_, index) => {
        setState({ activeIndex: index, });
    };

    return (
        <Dashboard>
            <VisitorsAnalytics>
                <Box>
                    <div><i className="fa-solid fa-eye"></i></div>
                    <div>
                        <h2>18.2 </h2>
                        <p>This is Year</p>
                    </div>
                </Box>
                <Box>
                    <div><i className="fa-solid fa-eye"></i></div>
                    <div>
                        <h2>18.2 </h2>
                        <p>This is Year</p>
                    </div>
                </Box>

                <Box>
                    <div><i className="fa-solid fa-eye"></i></div>
                    <div>
                        <h2>18.2</h2>
                        <p>This is Year</p>
                    </div>
                </Box>

                <Box>
                    <div><i className="fa-solid fa-eye"></i></div>
                    <div>
                        <h2>18.2</h2>
                        <p>This is Year</p>
                    </div>
                </Box>
            </VisitorsAnalytics>

            <Maps >
                <Iframe>
                    <iframe width="50%" height="300" src="https://www.bing.com/maps/embed?h=500&w=800&cp=54.572061655658516~56.6015625&lvl=2&typ=s&sty=h&src=SHELL&FORM=MBEDV8" scrolling="no">
                    </iframe>
                </Iframe>
                <Country>
                    <div id="country__sort">
                        <div id="sort__selected">
                            <select name="country" onChange={({ target }) => setSelect(target.value)}>
                                <option defaultValue="default">Default</option>
                                <option defaultValue="a-z">A-Z</option>
                                <option defaultValue="z-a">Z-A</option>
                                <option defaultValue="1-100">1% from 100%</option>
                                <option defaultValue="100-1">100% from 1%</option>
                            </select>
                        </div>
                        <div id="sort__input">
                            <input type="search" placeholder="Enter your Country Name" onChange={({ target }) => setInputSearch(target.value)} />
                        </div>
                    </div>
                    <>
                        {
                            sortCountry.filter((item) => item.common?.toUpperCase().search(inputSearch?.toUpperCase()) >= 0).map((i) => {
                                return (
                                    <CountryDetail i={i} key={Math.random()} />
                                )
                            })
                        }
                    </>
                </Country>
            </Maps>

            <Charts>
                <TopUsers>
                </TopUsers>
                <ChartDiagramm>
                    <h3 id="diagramm__title">Visitors Analytics</h3>
                    <ResponsiveContainer id="chartId">
                        <PieChart width={500} height={500}>
                            <Pie
                                cy="50%"
                                cx="50%"
                                data={data}
                                dataKey="value"
                                innerRadius={60}
                                outerRadius={80}
                                onMouseEnter={onPieEnter}
                                fill="var(--global__green)"
                                activeShape={renderActiveShape}
                                activeIndex={state.activeIndex}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </ChartDiagramm>
            </Charts>
        </Dashboard >
    )
}

const Dashboard = styled.section`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: var(--adminBg);
`

const VisitorsAnalytics = styled.div`
    width: 100%;
    display: grid;
    text-align: center;
    padding: 25px 10px;
    background: var(--white);
    color: var(--global__green);
    grid-template-columns: repeat(auto-fit, minmax(250px , 1fr));
`

const Box = styled.div`
    gap: 25px;
    display: flex;
    align-items: center;
    background: var(--white);
    justify-content: center;
    border-right: 1px solid var(--global__green);

    i {
        font-size: 20px;
    }

    h2 {
        font-size: 28px;
        font-weight: 700;
        line-height: 34px;
    }

    :last-child {
        border: none;
    }
`

const Maps = styled.div`
    gap: 20px;
    display: grid;
    margin-top: 30px;
    align-items: flex-start;
    grid-template-columns: repeat(2, 1fr);
`

const Iframe = styled.div`
    width: 100%;

    iframe {
        width: 100%;
    }
`

const Country = styled.div`
    width: 100%;
    height: 350px;
    padding: 15px 20px; 
    overflow-y: scroll;
    background: var(--white);
    
    #country__sort {
        top: 0;
        gap: 15px;
        width: 100%;
        display: flex;
        z-index: 9999;
        position: sticky;
        align-items: center;
        background: var(--white);
        justify-content: space-between;
    }

    #sort__selected {
        width: 200px;
        height: 40px;
    }

    #sort__input {
        width: 100%;
        height: 40px;
    }

    #sort__selected select {
        width: 200px;
        height: 40px;
        border: none;
        outline: none;
        padding: 0 24px;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        border-radius: 5px;
        color: var(--white);
        background: var(--global__green);
    }

    #sort__input input {
        width: 100%;
        height: 40px;
        /* #BEC0BF */
        padding: 0 24px;
        border-radius: 8px;
        background: var(--white);
        border: 0.3px solid var(--gray);
    
        ::placeholder {
            font-size: 16px;
            font-weight: 400;
            color: var(--gray);
            font-style: normal;
            letter-spacing: 0.1px;
        }

        :focus {
            outline: none;
            border: 2px solid var(--global__green);
        }
    }

    #container {
        gap: 45px;
        width: 100%;
        padding: 5px;
        display: grid;
        margin: 5px 0;
        text-align: center;
        align-items: center;
        grid-template-columns: repeat(2, 1fr);
    }
    
    #country__about {
        gap: 10px;
        display: flex;
        align-items: center;
    }

    #country__image {
        margin: 0;
        width: 20px;
        height: 14px;
        border-radius: 2px;
    }

    #country__image:hover {
        margin-right: 15px;
        transform: scale(3);
    }

    #country__name {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: var(--global__green);
    }

    #prograss {
        width: 100%;
        height: 20px;
        position: relative;
        border-radius: 20px;
        background: var(--white);
        border: 0.1px solid var(--global__green);
    }

    #prograss__number {
        height: 100%;
        border-radius: 20px;
        background: var(--global__green);
    }

    #percentage {
        top: 0;
        left: -55px;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        position: absolute;
        color: var(--global__green);
    }
`

const Charts = styled.div`
    gap: 20px;
    width: 100%;
    height: 300px;
    display: flex;
    margin-top: 15px;
    align-items: center;
    justify-content: space-between;
`

const TopUsers = styled.div`
    top: -25px;
    width: 50%;
    height: 350px;
    position: relative;
    background: var(--white);
`

const ChartDiagramm = styled.div`
    width: 50%;
    height: 100%;
    padding: 20px;
    position: relative;
    background: var(--white);

    #diagramm__title {
        margin: 0 10px;
        font-size: 22px;
        font-weight: 700;
        line-height: 28px;
        font-style: normal;
        color: var(--global__green);
    }

    #chartId {
        top: 0;
        left: 100px;
        width: 100px;
        height: 100px;
        position: absolute;
    }
`

