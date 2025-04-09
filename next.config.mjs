import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // image:{
  //   remotePattern:[
  //   {
  //       protocol:"https",
  //       hostname:""
  //   }
  //   ]
  // }
};

export default withNextIntl(nextConfig);
