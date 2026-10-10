import type { NextConfig } from "next";

// 静态导出到 GitHub Pages。
//
// basePath 不能靠相对路径绕过: 相对路径 (assetPrefix: "./") 是按「当前页面目录」
// 解析的, /about/ 会去找 /about/_next/..., /cases/bank/ 会去找
// /cases/bank/_next/..., 而产物里只有根目录一份 _next → 除首页外全部 404。
// 所以 basePath 必须在构建时确定。它的值由 workflow 依据「是否绑了自定义域名」
// 自动推导, 不需要人工维护变量。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  // 静态托管要有 <route>/index.html, 否则 /en/ 这类目录 URL 会 404
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  allowedDevOrigins:
    process.env.LUFFY_PREVIEW_ORIGINS?.split(",").filter(Boolean) ?? [],
};

export default nextConfig;
