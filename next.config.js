module.exports = {
  reactStrictMode: true,
}

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});

/**
 * 配置参数，解析 pages 文件夹下面的四种类型文件，
 * 也就是说 pages 文件夹下面的['js', 'jsx', 'md', 'mdx']类型文件都会被当作路由页面解析
 **/
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});