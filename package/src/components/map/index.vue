<template>
    <div class="map-container">
        <div class="times">
            <div class="weeks">
                <div class="week" v-for="(day, index) in weekDays" :key="index">
                    {{ day }}
                </div>
            </div>
            <div class="column" v-for="(weekData, weekIndex) in dateData" :key="weekIndex">
                <div class="month">{{ weekData.title }}</div>
                <div
                    class="date-wrapper"
                    v-for="(dateData, dateIndex) in weekData.data"
                    :key="dateIndex"
                    :style="`background:${getColor(dateData.number)};`"
                >
                    <div class="tooltip"
                        >{{ dateData.number || 'No' }} contributions on
                        {{ moment(dateData.date, 'YYYY-MM-DD').format('MMM D, YYYY') }}</div
                    >
                </div>
            </div>
        </div>
        <div class="legend">
            <div class="level-desc">less</div>
            <div class="level" v-for="i in 5" :class="'level-' + i" :key="i"></div>
            <div class="level-desc">more</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import moment from 'moment';

const props = defineProps({
    contributionData: {
        default: () => [],
        type: Array,
    },
});

const dateData = ref([]);
const submissionRecord = ref({});
const weekDays = ['Tue', 'Thu', 'Sat'];

const init = () => {
    let startDate = moment().subtract(1, 'years');
    let firstMondayDate = startDate.startOf('week').add(1, 'days');
    let days = moment().diff(firstMondayDate, 'days') + 1;
    let lineCounts = Math.ceil(days / 7);
    let _dateData = [];

    let lastMonth = null;
    for (let i = 0; i < lineCounts; i++) {
        let weekData = {
            columns: 7,
            data: [],
        };
        for (let j = 0; j < 7; j++) {
            let date = firstMondayDate.clone().add(i * 7 + j, 'days');
            let formattedDate = date.format('YYYY-MM-DD');
            let number = submissionRecord.value[formattedDate];
            weekData.data.push({
                number: number,
                date: formattedDate,
            });
            if (j > 0 && date.month() !== lastMonth) {
                weekData.title = date.format('MMM');
            }
        }
        lastMonth = moment(weekData.data[weekData.data.length - 1].date).month();
        _dateData.push(weekData);
    }
    dateData.value = _dateData;
};

const formatProblemData = async () => {
    let tempRecord = {};
    props.contributionData.forEach(item => {
        let date = moment(item.create_time).format('YYYY-MM-DD');
        tempRecord[date.toString()] = item.count;
    });
    submissionRecord.value = tempRecord;
};

const getColor = number => {
    if (number >= 12) {
        return '#196127';
    } else if (number >= 8) {
        return '#239A3B';
    } else if (number >= 4) {
        return '#7BC96F';
    } else if (number >= 1) {
        return '#C6E48B';
    }
    return '#EBEDF0';
};

onMounted(async () => {
    await formatProblemData();
    init();
});
</script>

<style lang="less" scoped>
.map-container {
    width: 100%;
    height: 100%;
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;

    .times {
        display: flex;

        .weeks {
            width: 30px;
            margin-right: 3px;
            margin-top: 22px;

            .week {
                margin-top: 13px;
                width: 30px;
                height: 14px;
            }
        }

        .column {
            width: 11px;
            margin-right: 3px;

            .month {
                width: 14px;
                height: 14px;
                margin-bottom: 4px;
                text-align: left;
                overflow: visible;
                white-space: nowrap;
            }

            .date-wrapper {
                width: 11px;
                height: 11px;
                background: #ebedf0;
                margin-bottom: 3px;
                border-radius: 2px;
                position: relative;

                .date {
                    width: 11px;
                    height: 11px;
                }
            }
            .date-wrapper .tooltip {
                display: none;
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                background-color: #333;
                color: #fff;
                padding: 3px;
                border-radius: 3px;
                white-space: nowrap;
                z-index: 2;
                border-radius: 3px;
            }
            .tooltip::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 50%;
                border: 5px solid transparent;
                border-top-color: #333;
                transform: translateX(-50%);
            }

            .date-wrapper:hover .tooltip {
                display: block;
            }
        }
    }

    .legend {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 6px;

        .level-desc {
            margin-right: 6px;
            margin-left: 3px;
        }

        .level {
            margin-right: 3px;
            width: 11px;
            height: 11px;
            border-radius: 2px;
        }

        .level-1 {
            background: #ebedf0;
        }

        .level-2 {
            background: #c6e48b;
        }

        .level-3 {
            background: #7bc96f;
        }

        .level-4 {
            background: #239a3b;
        }

        .level-5 {
            background: #196127;
        }
    }
}
</style>
