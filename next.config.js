/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/auth/LogInPage',
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
