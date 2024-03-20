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
        <div><h1 className='text-left text-white'>STREAMERS LEADERBOARD</h1>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Rank</th>
                        <th scope="col" className="px-6 py-3">Streamer</th>
                        <th scope="col" className="px-6 py-3">Total Views</th>
                        <th scope="col" className="px-6 py-3">Subscribers</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr> */}
                    {boards.map(bm => (
                        <tr key={bm.b_Id} className="bg-white dark:bg-gray-800">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-orange">{bm.rank}</td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{bm.streamer}</td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{bm.totalViews}</td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{bm.subs}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />

        </div>
    )
}