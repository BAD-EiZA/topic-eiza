/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "freelogopng.com",
            "static-00.iconduck.com",
            "cdn.icon-icons.com",
            "i.imgur.com"
        ]
    },
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
}

module.exports = nextConfig
