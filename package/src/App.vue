<template>
    <div class="map">
        <ContributionMap :contributionData="contributionData"></ContributionMap>
    </div>
</template>

<script setup>
const contributionData = [
    {
        count: 10,
        create_time: '2024-3-15',
    },
];
</script>

<style scoped>
.app-container {
    width: 100%;
    height: 100%;
}
</style>
