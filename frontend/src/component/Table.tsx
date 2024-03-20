import axios from 'axios';
import React, { useEffect, useState } from 'react'


interface boards {
    b_Id: string,
    rank: number,
    streamer: string,
    totalViews: number,
    subs: string,
}

export default function Table() {
    const [boards, setBords] = useState<boards[]>([]);
    const [b_Id, setBid] = useState("");
    const [rank, setRank] = useState("");
    const [streamer, setStreamer] = useState("");
    const [totalViews, settotalViews] = useState("");
    const [subs, setSubs] = useState("");

    useEffect(() => {
        getData()
    }, []);

    const getData = () => {

        axios.get("http://localhost:5000/api/board").then(res => {
            console.log(res.data);
            setBords(res.data);
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div><h1 >STREAMERS LEADERBOARD</h1>
            <table className="table align-middle mb-0 bg-white admin-booking-table">
                <thead className="table-dark">
                    <tr>
                        <th>Rank</th>
                        <th>Streamer</th>
                        <th>Total Views</th>
                        <th>Subscribers</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr> */}
                    {boards.map(bm => (
                        <tr key={bm.b_Id} className='table-secondary'>
                            <td>{bm.rank}</td>
                            <td>{bm.streamer}</td>
                            <td>{bm.totalViews}</td>
                            <td>{bm.subs}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />

        </div>
    )
}