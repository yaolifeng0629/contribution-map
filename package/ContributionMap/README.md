# Contribution map mapping

-   contribution-map is a visual component that helps us visually display the contributors and their contributions to a project. This component can generate a matrix where each cell represents the number of contributions made by a contributor during a specific time period.

![alt text](/package/public/image.png)

## How to use it

1. Install the contribution map component and use other methods such as NPM or Yarn to install it:

```Bash
npm install contribution map

yarn add contribution map
```

2. Introduce and use contribution map in the current project

```Vue
<template>
    <ContributionMap :contributionData="contributionData"></ContributionMap>
</template>
<script setup>
import ContributionMap from './components/map.vue';
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

## Contribution

-   We welcome all contributions and suggestions. If you want to contribute to contribution map, you can:
    -   Submit bug reports or suggestions
    -   Submit code improvements or new features
    -   Improving documents
