import million from 'million/compiler';


/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = {fs: false};

        return config;
    },
    reactStrictMode: true,
    swcMinify: false,
    images: {
        domains: ['i.ibb.co'],
    },
};

export default million.next(nextConfig);

