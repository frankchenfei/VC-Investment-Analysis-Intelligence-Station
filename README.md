# 资本流径 · VC 资金流向情报平台

面向 VC / PE / FA / 政府招商的一级市场资金流向监控平台，覆盖融资动态、机构行为、赛道动量、资本跨境流动与募投退全链路。

## 多语言支持

内置 5 种语言，右上角语言切换器可实时切换：中文、English、Español、Português、Français。

## 功能模块

- 市场总览：近 30 天融资总额、交易笔数、活跃机构、赛道分布、轮次结构、区域热度、市场情绪温度，以及募资端、退出端、币种结构卡片。
- 生态全景：季度募资规模、季度 IPO / 并购退出、轮次估值阶梯、人民币 / 美元币种结构、Top 10 城市间资金流动、中国资本出海目的地。
- 资金流向图谱：机构 - 公司 - 赛道三层资金网络力导图，支持筛选、节点详情与拖拽布局。
- 融资动态：交易明细表，支持赛道 / 轮次 / 金额筛选、排序、分页与 CSV 导出。
- 机构与公司：48 家机构、66 家公司画像。
- 信号监控：规则引擎 + 信号列表，覆盖机构密集出手、赛道动量、轮次上移、北向资金、估值异动等。
- AI 研判：基于 91 条交易数据的自动研报，可配置 DeepSeek API Key 切换 LLM 增强模式。

## 部署与更新

整个目录是纯静态站点，部署时上传以下文件即可：`index.html`、`styles.css`、`app.js`、`data.js`、`data.json`、`i18n.js`、`screenshots/`。

站点启动时会优先加载 `data.json`；直接双击打开本地文件时自动回退到内置的 `data.js`。因此线上更新数据只需要替换 `data.json`，不需要改页面代码。

### 手动更新

1. 编辑 `data.json`（新增融资事件、机构、公司、信号等）
2. 重新上传覆盖 `data.json`
3. 若使用了 CDN，刷新缓存

也可以改内置数据后重新生成 JSON：

```
node scripts/build_data_json.js
```

### 定时自动更新

仓库内置 GitHub Actions 模板（`.github/workflows/update-data.yml`），默认每天 08:00 运行：

1. 把项目推送到 GitHub 仓库
2. 在仓库 Secrets 中配置数据源密钥（如 `ITJUZI_API_KEY`、`APIFY_TOKEN`）
3. 在 `scripts/collect_data.py` 中接入真实数据源（IT 桔子、Crunchbase、SEC EDGAR、Apify 等）
4. Actions 定时采集 → 更新 `data.json` → 自动提交推送

若使用 GitHub Pages / Vercel / Netlify / Cloudflare Pages 或阿里云 OSS + CDN，推送后即可自动发布新数据。

## 数据说明

当前内置数据为演示样本，不代表真实行情。数据模型已按机构、公司、交易、赛道、信号、募投退、区域流动分层设计，接入真实数据源后直接替换即可。

## 目录

- index.html / styles.css / app.js / data.js / data.json / i18n.js：应用与数据
- scripts/：数据生成与采集脚本
- .github/workflows/：定时更新模板
- README.md：说明文档
- screenshots/：关键界面截图
