// 站点静态资源路径。
//
// 这些图片原本写成 `https://www.redoop.com/images/...` 的绝对外链, 指向旧官网。
// 当新站接管 www.redoop.com 之后, 这些链接就指向了自己身上并不存在的路径,
// 于是全部 404 —— 案例页、客户 logo、二维码全都不显示。
//
// 改成站内路径, 并统一加 basePath 前缀: 这样文件随站点一起走, 绑或解绑自定义
// 域名 (basePath 由 workflow 自动推导) 都不会再出现资源 404。
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** 把站内路径 (/images/x.jpg) 变成带 basePath 的可用 URL。 */
export function asset(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${p}`;
}
