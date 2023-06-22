import React, {useEffect, useState} from "react";
import JobData from '../../components/JSON/jobs/api.json'
import Head from "next/head";
import Script from 'next/script'
import jobsScraping from "../../components/jobsScraping";

console.log("this is the job data")

function index() {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [jobs, setJobs] = useState({})


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      
        }
        , [JobData])


    return (

        <>
            {/* eslint-disable-next-line @next/next/no-script-component-in-head */}
            <Head>
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <Script src="../../components/jobsScraping.js"/>

            </Head>
            <div
                className='pt-20 text-center min-h-screen  relative flex justify-center mx-auto flex-col max-w-[1400px]'>


                <h1>
                    {
                        JSON.stringify(jobs)
                    }
                </h1>

            </div>
        </>
    );
}


export default index;


