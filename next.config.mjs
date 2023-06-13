import million from 'million/compiler';


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    images: {
        domains: ['i.ibb.co'],
    },
};

export default million.next(nextConfig);

// 