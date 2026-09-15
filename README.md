# Layout Studio · v10

## 打开 / Open

解压后直接打开 `index.html`。无需 npm、账号或外部资源。
Extract the archive and open `index.html`. No npm, account or external resources are required.

## 文件 / Files

- `index.html`：入口 / Entry point
- `js/content.js`：六节中英配对教学内容 / Paired Chinese and English lessons
- `js/main.js`：导航、状态、演示和共享布局规则 / Navigation, state, demos and shared rules
- `css/base.css`：保留 v8 视觉基础 / Preserved v8 visual foundation
- `css/course.css`：可读性、控件和小屏优化 / Readability, controls and narrow-screen refinements
- `highlights.html`：可打印的双语亮点文档 / Printable bilingual highlights document
- `video-script.md`：约四分半钟录屏方案与中文讲解稿 / Approximate 4.5-minute recording plan and Chinese narration

## 教学结构 / Teaching structure

六节均有讲解、关键代码和演示。共享学习数据看板案例，内容为模拟数据。
Every lesson has explanation, key code and a demo. All lessons share one learning-dashboard case with simulated data.

## 操作 / Interaction

切换左侧章节（小屏用顶部章节按钮）；每节进入演示后可调整参数，重置只影响当前实验。语言切换保留当前章节、标签页和参数。重新加载页面会重置实验参数，保留语言偏好及链接中的章节位置。三标签可用左右方向键或 Home/End 切换。
Choose a lesson in the sidebar (top buttons on narrow screens). Adjust parameters in the demo; reset affects only the current experiment. Language switching preserves lesson, tab and parameters. Reloading resets experiments but keeps the saved language and lesson in the URL. Use Left/Right or Home/End within the tab list.

预览宽度是独立页面内部的实际视口宽度。外层容器较窄时，请横向滚动预览；这与教学页面本身是否适配手机是两件事。
The preview width is the independent page’s actual viewport width. Scroll the preview horizontally if its host is narrower; this is separate from the teaching page’s own responsive layout.

## 发布 / Publishing

将本文件夹内部文件上传至静态网站发布目录，确保根部有 `index.html`，保留 css 和 js 子目录。不要把 ZIP 文件当网页入口。发布后检查首页、六节、双语、预览与亮点文档链接。最终提交的源码应与线上文件一致。
Upload this folder’s contents to the static publishing directory, keeping `index.html` at its root and preserving css/js folders. Do not use the ZIP as the page entry. Verify the home page, six lessons, both languages, demos and highlights link. Submitted source should match the published files.

## 验证记录 / Verification

v9 基础版本已在 Edge 检查两种语言、六节演示、盒模型、响应式断点与 390px 页面。v10 新增部分另做脚本语法、双语页面初始化及 `/vis-homework/` 子路径的 HTTP 资源检查。当前浏览器连接不可用，新增独立入口与内部锚点还需在发布后检查实际点击与排版。
The v9 baseline was checked in Edge for both languages, six demos, box sizing, breakpoints and a 390px host page. V10 additions received syntax, bilingual page-initialization and HTTP resource checks under `/vis-homework/`. The current browser connection is unavailable; verify actual clicks and layout of the new standalone entry and internal anchors after publishing.

## 提交状态 / Submission status

网站源码与亮点文档已提供。新版部署、最终链接及实际带讲解视频仍需完成；`video-script.md` 只用于录制准备。
Website source and highlights are provided. Revised deployment, final URL and a narrated video remain to be completed; `video-script.md` is recording preparation only.

## v10：参考样例后的补充 / Reference-based additions

重新读取老师课程门户及第 1、3 章后，增加每节“为什么这么写 / 常见错误”、独立演示入口及中英文讲义下载。
After reading the teacher’s portal and Chapters 1 and 3, this version adds per-lesson reasoning and pitfalls, standalone demo links, and downloadable Chinese and English lecture notes.

上传请阅读 [上传到GitHub.md](上传到GitHub.md)。独立演示位于 `demo/index.html?lesson=1` 至 `?lesson=6`。
Read the GitHub upload guide; standalone demos use `demo/index.html?lesson=1` through `?lesson=6`.

参考页面 / References: https://cinger007.github.io/vis/ and https://cinger007.github.io/vis/lesson-01/ and https://cinger007.github.io/vis/lesson-03/
