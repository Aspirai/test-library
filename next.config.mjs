import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true', //当环境变量ANALYZE为true时开启
});

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    additionalData: '@import "@/assets/styles/index.scss";',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.test.com',
      },
    ],
  },
  //新增
  reactStrictMode: false,
};

export default withBundleAnalyzer(nextConfig);
