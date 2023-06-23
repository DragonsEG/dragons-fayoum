import React, {useEffect, useState} from "react";
import JobData from '../../components/JSON/jobs/api.json'
import Head from "next/head";
// import Script from 'next/script'
// import jobScraping from "../../components/jobsScraping";


function index() {
// // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [jobs, setJobs] = useState([]);
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//         jobScraping().then(async res =>
//             await setJobs(res)
//         );
//     }, []);

    return (

        <>
            {/*/!* eslint-disable-next-line @next/next/no-script-component-in-head *!/*/}
            {/*<Head>*/}
            {/*    /!* eslint-disable-next-line @next/next/no-sync-scripts *!/*/}
            {/*    <Script src="../../components/jobsScraping.js"/>*/}

            {/*</Head>*/}
            <div
                className='pt-20 text-center min-h-screen  relative flex justify-center mx-auto flex-col max-w-[1400px]'>

                {/*{*/}
                {/*    jobs?.map((job, index) => (*/}
                {/*        <div key={index} className='flex justify-center'>*/}
                {/*            <div className='w-[600px] h-[200px] bg-gray-100 rounded-xl shadow-md p-6 m-4'>*/}
                {/*                <h1 className='text-xl font-bold text-gray-800'>{job.position}</h1>*/}
                {/*                <h1 className='text-xl font-bold text-gray-800'>{job.company}</h1>*/}
                {/*                <h1 className='text-xl font-bold text-gray-800'>{job.location}</h1>*/}
                {/*                <h1 className='text-xl font-bold text-gray-800'>{job.date}</h1>*/}
                {/*                <h1 className='text-xl font-bold text-gray-800'>{job.salary}</h1>*/}
                {/*                <h1 className='text-xl font-bold text-gray-800'>{job.jobUrl}</h1>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    ))*/}
                {/*}*/}

                <h1>

                </h1>

            </div>
        </>
    );
}


export default index;


