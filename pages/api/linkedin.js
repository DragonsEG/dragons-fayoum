export default async function handler(req, res) {
    const response = await fetch(`https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=${req.query.keywords}&location=${req.query.location}&f_TPR=${req.query.f_TPR}&f_SB2=${req.query.f_SB2}&f_E=${req.query.f_E}&f_WT=${req.query.f_WT}&f_JT=${req.query.f_JT}&start=${req.query.start}`, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
            'cookie': 'YOUR_COOKIES'
        },
    });

    const data = await response.json();
    res.status(response.status).json(data);
}