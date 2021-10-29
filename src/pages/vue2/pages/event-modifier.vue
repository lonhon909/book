<template>
    <div>
        <EventModifierMd />
        <br>
        <div class="flex-wrap">
            <div class="event-modifier" @click.self.prevent="handleClick('outer')">
                @click.self<br>
                outer
                <div class="event-modifier-click" @click="handleClick('inner')">inner</div>
            </div>

            <div class="event-modifier" @click.once="handleClick('once')">
                @click.once<br>
                只会触发一次
            </div>

            <div class="event-modifier" @click.capture="handleClick('outer')">
                @click.capture<br>
                outer
                <div class="event-modifier-click" @click="handleClick('inner')">先触发outer<br>我是inner</div>
            </div>

            <div class="event-modifier" @touchmove="handleScroll">
                @scroll.passive<br>
                <div class="box"></div>
            </div>

            <div class="event-modifier" @touchmove.passive="handleScroll">
                @scroll.passive<br>
                <div class="box"></div>
            </div>
        </div>
    </div>
</template>

<script>
import EventModifierMd from '../md/event-modifier.md';

export default {
    name: 'EventModifier',
    components: {
        EventModifierMd
    },
    data() {
        return {
            i: 0,
        }
    },
    methods: {
        handleClick(val) {
            alert(val)
        },
        handleScroll() {
            let sum = 0;
            for (let i = 0; i < 10000000; i++) {
                sum += i;
            }
            console.log(sum)
        }
    }
}
</script>

<style lang="less">
.event-modifier {
    width: 200px;
    height: 200px;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    line-height: 28px;
    margin-left: 10px;
    margin-bottom: 10px;
    color: blue;
    .event-modifier-click {
        width: 100px;
        height: 100px;
        background-color: antiquewhite;
        color: blue;
    }
}
.self {
    padding-left: 10px;
}
.box {
    height: 500px;
    background-color: chocolate;
}
</style>