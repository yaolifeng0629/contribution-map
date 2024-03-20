# 贡献图

-   contribution-map 是一个可视化组件，它可以帮助我们以图形的方式展示项目的贡献者和他们的贡献情况。这个组件可以生成一个矩阵，其中的每个单元格代表一个贡献者在特定时间段内的贡献数量。
    ![alt text](/package/public/image.png)

## 如何使用

1.  安装 contribution-map 组件，通过 npm 或 yarn 等其他方式来安装：

```bash
npm install contribution-map

yarn add contribution-map
```

2.  在项目的main.js中引入并使用 contribution-map
```js
// ....
import ContributionMap from "contribution-map";

app.use(ContributionMap);
// ....
```
3.  使用组件
```vue
<template>
    <ContributionMap :contributionData="contributionData"></ContributionMap>
</template>
<script setup>
// Mock Data
const contributionData = [
    {
        count: 1,
        create_time: '2024-01-01',
    },
    {
        count: 1,
        create_time: '2024-01-07',
    },
    {
        count: 48,
        create_time: '2024-03-17',
    },
    {
        count: 1,
        create_time: '2024-01-05',
    },
    {
        count: 1,
        create_time: '2024-01-09',
    },
    ....
];
</script>
```

## 贡献

-   我们欢迎所有的贡献和建议。如果你想为 contribution-map 做出贡献，你可以：
    -   提交 bug 报告或建议
    -   提交代码改进或新功能
    -   改进文档
