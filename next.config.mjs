import withMDX from "@next/mdx";

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"], // allows .mdx pages
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
