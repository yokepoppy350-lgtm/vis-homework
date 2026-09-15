# 将教学网站上传到 GitHub，让老师通过链接打开

这份文件用于把本地网站发布到你现有的 `yokepoppy350-lgtm/vis-homework` 仓库。**本地文件准备好，不代表新版已经发布。** 完成上传与 Pages 发布后，再把网站链接交给老师。

## 1. 解压，并找到网站入口

解压新版源码压缩包，打开里面包含 `index.html` 的文件夹。确认同一层能看到 `css` 和 `js` 文件夹。

上传后，仓库首页应直接显示：

```text
vis-homework（你的 GitHub 仓库）
├─ index.html
├─ css/
├─ js/
└─ 其他随包提供的网页和说明文件
```

请上传**包含 `index.html` 的文件夹里面的全部内容**，保留子文件夹。ZIP 是源码提交材料，需要先解压，GitHub Pages 才能使用里面的网页。仓库根部如果只看到一个 `vis-homework-v10` 文件夹，说明多上传了一层，需要把里面的内容放到仓库根部。

## 2. 上传到现有仓库

1. 登录你的 GitHub 账号，打开 [vis-homework 仓库](https://github.com/yokepoppy350-lgtm/vis-homework)。
2. 点击仓库的 **Code** 标签，回到文件列表首页。
3. 查看文件列表左上方的分支名。下面以 `main` 为例；如果你的网站实际使用其他分支，上传和 Pages 设置都选择同一个分支。
4. 点击 **Add file → Upload files**。
5. 在电脑中打开刚才包含 `index.html` 的文件夹，全选里面的文件和子文件夹，拖到 GitHub 上传区域。
6. 等待上传完成，检查列表中的路径应是 `index.html`、`css/...`、`js/...`。同名、同路径的旧文件会被新版替换。
7. 在提交说明中输入：`Update bilingual page-layout course`。
8. 如果页面允许直接提交，选择 **Commit directly to the main branch**，然后点击 **Commit changes**。如果仓库要求通过新分支提交，按页面提示创建并合并拉取请求后，文件才会进入发布分支。
9. 回到仓库 **Code** 首页，确认根部的 `index.html` 已更新，`css`、`js` 以及新版随包文件均已上传。

可以继续使用现有仓库和网址，无需删除仓库。已有的旧版未引用文件不影响新版入口加载；优先完成新版全部文件上传。

GitHub 网页支持拖入文件或文件夹，本项目的小文件适合直接上传。操作依据：[GitHub 官方上传说明](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)。

## 3. 设置 GitHub Pages

1. 在仓库顶部点击 **Settings**。
2. 在左侧菜单点击 **Pages**。
3. 找到 **Build and deployment**。
4. **Source** 选择 **Deploy from a branch**。
5. **Branch** 选择刚才上传的分支，通常是 **main**。
6. 右侧文件夹选择 **/(root)**。
7. 点击 **Save**。

如果原来已经设置为同一分支的根目录，保持设置即可；提交新版文件后，GitHub 会重新发布。这个项目直接使用静态网页文件，上述设置即可完成发布，无需自行编写工作流。

使用 GitHub Free 时，仓库需为 **Public** 才能使用 Pages。已发布的普通 GitHub Pages 网站可以由老师直接访问，无需登录你的 GitHub 账号。设置依据：[GitHub 官方发布源说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 4. 取得可以提交的网页链接

发布可能需要几分钟，GitHub 官方说明更新可能需要最多约 10 分钟。回到 **Settings → Pages**，看到发布成功后，点击 **Visit site**。

按当前账号和仓库名，默认项目网址预计是：

[https://yokepoppy350-lgtm.github.io/vis-homework/](https://yokepoppy350-lgtm.github.io/vis-homework/)

**最终以 Pages 页面显示的 Visit site 地址为准。** 上面的地址是按仓库名推导的预期地址，本说明没有确认新版已经在线。若仓库曾设置自定义域名，Visit site 可能会指向那个域名。

交给老师的是浏览器打开后的**网页地址**，例如 `...github.io/vis-homework/`；`github.com/...` 是源码仓库地址。查看发布结果的依据：[GitHub 官方建站说明](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)。

## 5. 提交前检查

用浏览器无痕窗口打开 **Visit site** 地址，再用手机打开一次，确认：

- 首页能显示新版课程，样式完整。
- 六节都可以打开，“讲解／关键代码／演示”正常切换。
- 中文和英文都能显示完整内容。
- 演示控件可以改变布局；独立演示入口能够打开。
- 手机页面可阅读，预览中的导航与图表可查看。
- 关键亮点文档链接可以打开。

最终提交给老师的源码 ZIP 应与这次上传的文件一致。录屏也使用这个公开网页链接，能同时展示网站效果与访问方式。

## 常见情况

| 现象 | 处理方法 |
|---|---|
| 打开显示 404 | 检查 Pages 的分支和目录；确认 `index.html` 位于所选发布目录的根部；等待发布完成后，从 Visit site 打开。 |
| 仍显示旧版 | 确认新文件已提交到发布分支；等待发布完成，然后用无痕窗口重新打开。 |
| 有文字，但样式或演示不见了 | 检查 `css`、`js` 和随包页面是否完整上传，名称与大小写是否保持一致；确认没有多出外层目录。 |
| 仓库页面只有一个 ZIP | 解压后上传其中的网页文件和子文件夹。 |
| Pages 没有成功发布 | 查看 Pages 的状态提示；可以到 Actions 标签查看系统自动发布任务的失败信息，无需自行编写工作流。 |

