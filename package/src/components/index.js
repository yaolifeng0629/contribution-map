import ContributionMap from './map/index.vue';

// 按需引入
export { ContributionMap };

const components = [
    {
        name: 'ContributionMap',
        component: ContributionMap,
    },
];

const contributionMap = {
    install(App) {
        components.forEach(item => {
            App.component(item.name, item.component);
        });
    },
};

export default contributionMap;
