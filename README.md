# 🎨 在线SVG代码预览器

一个功能强大的在线SVG代码编辑器和预览器，支持实时预览、代码格式化、下载等功能。

## ✨ 主要功能

- **实时预览**: 输入SVG代码即可实时查看效果
- **代码编辑**: 语法高亮的代码编辑器
- **示例代码**: 内置多个SVG示例（圆形、星形、心形、Logo等）
- **代码格式化**: 一键格式化SVG代码
- **下载功能**: 将编辑的SVG保存为文件
- **错误提示**: 智能错误检测和提示
- **响应式设计**: 支持桌面和移动设备
- **键盘快捷键**: 支持Ctrl+S下载、Ctrl+Delete清空

## 🚀 使用方法

1. 打开 `index.html` 文件
2. 在左侧编辑器中输入或粘贴SVG代码
3. 右侧会实时显示SVG预览效果
4. 使用工具栏按钮进行各种操作

## 🎯 SEO优化特性

- 完整的meta标签优化
- Open Graph和Twitter Card支持
- 结构化数据标记
- 语义化HTML结构
- 移动端友好设计
- 快速加载性能

## 🛠️ 技术栈

- **HTML5**: 语义化结构
- **CSS3**: 现代样式和响应式设计
- **JavaScript**: 原生JS实现所有功能
- **SVG**: 矢量图形支持

## 📱 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 🔧 本地部署

1. 克隆或下载项目文件
2. 直接在浏览器中打开 `index.html`
3. 无需任何服务器配置

## 📝 示例SVG代码

### 简单圆形
```svg
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="#3498db" stroke="#2c3e50" stroke-width="4"/>
</svg>
```

### 渐变矩形
```svg
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3498db;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#9b59b6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="200" height="200" fill="url(#grad1)" rx="20"/>
</svg>
```

## 🎨 功能特色

- **实时编辑**: 无需刷新页面，代码修改即时生效
- **错误处理**: 智能检测SVG语法错误并提供友好提示
- **代码高亮**: 使用等宽字体提升代码可读性
- **示例库**: 内置常用SVG图形示例
- **一键下载**: 快速保存编辑的SVG文件
- **格式化**: 自动整理SVG代码格式

## 📄 许可证

MIT License - 免费开源使用

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

---

**享受SVG创作的乐趣！** 🎉
