# vis-homework · 第6章 交互式数据可视化

课程作业静态网站。技术栈：HTML + CSS + JavaScript + D3.js v7。

## 目录
- 6.1 Tooltip 信息提示
- 6.2 筛选与动态更新
- 6.3 Brush 区域选择
- 6.4 Zoom 缩放与平移
- 6.5 多视图联动 Dashboard

## 本地预览
不要直接双击 `index.html`（浏览器可能阻止 CSV 的 fetch）。在项目目录运行：

```bash
python -m http.server 8080
```

然后访问 `http://localhost:8080/`。

## GitHub Pages 发布
1. 把本目录中的所有文件上传到 GitHub 仓库根目录。
2. 打开仓库 `Settings → Pages`。
3. `Source` 选择 `Deploy from a branch`。
4. Branch 选择 `main`，Folder 选择 `/ (root)`，保存。
5. 等待约 1–3 分钟后，GitHub 会给出公开网址。

> `data/students.csv` 为教学模拟数据，不对应真实个人。
