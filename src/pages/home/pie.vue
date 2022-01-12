<template>
    <div>
        <div id="pie" class="echart-pie-view"></div>
        <div id="line" class="echart-pie-view"></div>
    </div>
</template>

<script>
import * as echart from "echarts";

export default {
    name: "EchartPieView",
    data() {
        return {
            list: Array(12).fill(1).map((item, index) => `${index + 1}月`)
        };
    },
    mounted() {
        this.initEchart();
        // this.initEchart2();
        window.addEventListener('resize', this.resizeEcharts);

        this.$once("hook:beforeDestroy", () => {
            if (this.myEchart) {
                // 销毁echart实例
                this.myEchart.dispose();
            }
        });
        /* this.myEchart.showLoading({
            text: 'loading',
            color: '#c23531',
            textColor: '#000',
            maskColor: 'rgba(255, 255, 255, 0.8)',
            zlevel: 0,

            // 字体大小。从 `v4.8.0` 开始支持。
            fontSize: 12,
            // 是否显示旋转动画（spinner）。从 `v4.8.0` 开始支持。
            showSpinner: true,
            // 旋转动画（spinner）的半径。从 `v4.8.0` 开始支持。
            spinnerRadius: 10,
            // 旋转动画（spinner）的线宽。从 `v4.8.0` 开始支持。
            lineWidth: 5,
            // 字体粗细。从 `v5.0.1` 开始支持。
            fontWeight: 'normal',
            // 字体风格。从 `v5.0.1` 开始支持。
            fontStyle: 'normal',
            // 字体系列。从 `v5.0.1` 开始支持。
            fontFamily: 'sans-serif'
        });

        setTimeout(() => {
            this.myEchart.hideLoading();
        }, 1000) */
    },
    methods: {
        initEchart() {
            if (!this.myEchart) {
                // 更新数据直接使用setOption，不用考虑数据到底产生了那些变化，echarts底层会找到两组数据之间的差异并通过合适的动画去更新
                this.myEchart = echart.init(document.querySelector('#pie')/* , 'dark' 可选的，主题 */);
            }
            this.myEchart.setOption({
                // 标题组件
                title: {
                    // 是否显示组件标题，默认true
                    show: true,
                    // 主标题文本 支持 "\n" 换行
                    text: "ECharts 入门示例",
                    // 主标题文本超链接
                    link: 'https://www.baidu.com',
                    // 指定窗口打开主标题超链接 默认 blank
                    target: 'blank',
                    // 主题样式设置
                    textStyle: {
                        // 默认 #333
                        color: 'red',
                        // 默认 normal
                        fontStyle: 'italic',
                        // 默认 bolder
                        fontWeight: 'normal',
                        // 默认 sans-serif
                        fontFamily: 'sans-serif',
                        // 默认 18
                        fontSize: 12,
                        lineHeight: 30
                    },
                    width: 100,
                    height: 100,
                    // 副标题文本，支持使用 \n 换行
                    subtext: '111'
                },
                // 提示框组件
                tooltip: {
                    show: true,
                    // 是否显示提示框浮层 默认true
                    showContent: true,
                    // 框浮层触发条件
                    // triggerOn: 'mousemove',
                    // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
                    // https://echarts.apache.org/zh/option.html#tooltip.formatter
                    // 模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等
                    formatter(params) {
                        console.log(params)
                        return `${params.seriesName}`
                    },
                    // 提示框浮层的背景颜色
                    backgroundColor: '#fff',
                    // borderColor
                    borderWidth: 0,
                    // 提示框浮层内边距，单位px，默认各方向内边距为5
                    padding: 5, // [5, 5, 15, 20]
                    // 提示框浮层的文本样式
                    textStyle: {
                        color: 'red',
                        // fontStyle
                        // fontWeight
                    },
                    // 额外附加到浮层的 css 样式
                    extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
                },
                // 图例
                legend: {
                    // 是否展示图例，默认true
                    show: true,
                    // 图例组件离容器左侧的距离
                    left: 'right',
                    // 图例组件离容器上侧的距离
                    top: 'top',
                    // 图例组件离容器右侧的距离
                    right: 'auto',
                    // 图例组件离容器下侧的距离
                    bottom: 'bottom',
                    // 图例组件的宽度。默认自适应
                    width: 210,
                    // 图例组件的高度。默认自适应
                    height: 100,
                    // 图例列表的布局朝向 vertical/horizontal
                    orient: 'vertical',
                    // 图例标记和文本的对齐
                    align: 'auto',
                    // 图例内边距 默认5
                    padding: /* 0, */[5, 5, 10, 10],
                    // 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔
                    itemGap: 20,
                    // 图例标记的图形宽度 默认 25
                    itemWidth: 25,
                    // 图例标记的图形高度 默认 14
                    itemHeight: 14,
                    // 图例选中状态表
                    selected: {
                        '销量': false,
                        '降水量': true,
                        '饼状图': false
                    },
                    // 图例的数据数组
                    data: [{
                        name: '销量',
                        icon: 'rect',
                        // 单独设置，同公共设置
                        textStyle: {},
                    }, {
                        name: '降水量',
                        icon: 'circle'
                    }, '饼状图'],
                    // 图例项的公用 icon
                    icon: 'rect',
                    // 图例的公用文本样式
                    textStyle: {
                        color: '#333',
                        // ...
                        // 文字超出宽度是否截断或者换行。配置width时有效
                        overflow: 'truncate'
                    },
                    // 图例的tooltip
                    tooltip: {
                        // 默认不显示
                        show: true
                    }
                },
                // 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
                toolbox: {
                    show: true,
                    orient: 'horizontal',
                    itemSize: 15,
                    itemGap: 10,
                    // 是否在鼠标 hover 的时候显示每个工具 icon 的标题
                    showTitle: true,
                    // 除了各个内置的工具按钮外，还可以自定义工具按钮
                    feature: {
                        myTool1: {
                            show: true,
                            title: '自定义扩展方法1',
                            icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                            onclick: function (){
                                alert('myToolHandler1')
                            }
                        },
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: { readOnly: false },
                        magicType: { type: ['line', 'bar'] },
                        restore: {},
                        saveAsImage: {}
                    },
                    top: 20,
                    left: 'center'
                },
                // 调色盘颜色列表
                color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
                // 全局字体样式
                textStyle: {

                },
                // 直角坐标系绘制网格
                grid: {
                    // 是否显示直角坐标系网格 默认false
                    show: true,
                    // grid 组件离容器左侧的距离 默认 10%
                    left: '10%',
                    // grid 组件离容器上侧的距离 默认 60
                    top: 60,
                    // grid 组件离容器右侧的距离 默认 10%
                    right: '10%',
                    // grid 组件离容器下侧的距离 默认 60
                    bottom: 60,
                    // containLabel: false,
                    // 网格背景色，默认透明
                    // backgroundColor: 'transparent',
                    // // 网格的边框颜色
                    // borderColor: 'red',
                    // // 网格的边框线宽 默认1
                    // borderWidth: 1
                },
                /* x轴线
                    对象：单轴线
                    数组：双轴线 [{ 上轴线 }, { 下轴线 }]
                */
                xAxis: {
                    // 坐标轴类型 category(类目轴)/ value(数据轴)/ time(时间轴)
                    type: 'category',
                    // x 轴所在的 grid 的索引，默认位于第一个 grid
                    gridIndex: 0,
                    // x 轴的位置
                    position: 'bottom',
                    // X 轴相对于默认位置的偏移
                    offset: 10,
                    // 坐标轴名称
                    name: '时间',
                    // 坐标轴刻度最小值,不设置时会自动计算最小值保证坐标轴刻度的均匀分布
                    // min: 0,
                    // 当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值
                    // min: function (value) {
                    //     return value.min - 20;
                    // },
                    // max: 12,
                    // 配置轴线样式
                    axisLine: {
                        // 表示两端使用同样的箭头
                        symbol: ['none', 'arrow'],
                        // 轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）。
                        symbolSize: [5, 10]
                    },
                    // 坐标轴刻度相关设置
                    axisTick: {
                        // 坐标轴刻度是否朝内，默认朝外
                        inside: true,
                        // 坐标轴刻度的长度
                        length: 5,
                    },

                    // 坐标轴刻度标签的相关设置
                    axisLabel: {
                        show: true,
                        // 坐标轴刻度标签的显示间隔，在类目轴中有效,默认会采用标签不重叠的策略间隔显示标签
                        interval: 0,
                        // 刻度标签是否朝内，默认朝外
                        inside: false,
                        // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠
                        rotate: 0,
                        // 刻度标签的内容格式器，支持字符串模板和回调函数两种形式
                        formatter: '{value} 月',
                        // 是否隐藏重叠的标签
                        hideOverlap: false,
                        // 刻度标签文字的颜色，默认取 axisLine.lineStyle.color
                        color: 'blue',
                        // fontStyle 
                        // fontWeight
                        // fontFamily
                        // fontSize 
                        align: 'center',
                        verticalAlign: 'center',
                        // lineHeight
                        // backgroundColor
                        // borderColor
                        // borderType
                        // borderWidth
                        // borderRadius  文字块的圆角
                    },
                    // 区域中的分隔线
                    splitLine: {
                        show: true
                    },
                    // 分隔区域，默认不显示
                    splitArea: {
                        show: true
                    },
                    // 类目数据 在类目轴（type: 'category'）中有效
                    data: Array(12).fill(1).map((item, index) => index + 1),
                    axisPointer: {
                        // 坐标轴指示器配置项 默认false，鼠标移入展示
                        show: false,
                        // 指示器类型
                        type: 'none',
                        // 坐标轴指示器的文本标签
                        label: {
                            show: true,
                            formatter: '{value} 哈哈'
                        }
                    }
                },
                /* y轴
                    对象：单轴线
                    数组：双轴线 right（有轴线），left（左轴线） [{ position: 'right' }, { position: 'left' }]
                */
                yAxis: {
                    type: 'value',
                    name: 'Y轴'
                },
                // 展示的数据，每一项代表一个系列
                series: [
                    {
                        // 系列图形状：柱状
                        type: "bar",
                        // 系列名称
                        name: "销量",
                        // 系列数据
                        data: [5, 20, 36, 10, 10, 20, 3, 4, 5, 6, 7, { value: 18, itemStyle: { /* 设置单条数据图的样式 */ } }],
                        // 设置柱状图的样式
                        itemStyle: {
                            // 柱条的颜色
                            color: 'blue',
                            // 边框颜色
                            borderColor: 'blue',
                            // 边框大小
                            borderWidth: 0,
                            // 边框类型
                            borderType: 'dashed',
                            // 柱条圆角
                            // barBorderRadius: 2,
                            // 柱条透明度
                            opacity: 0.5,
                            // 水平阴影的位置
                            shadowOffsetX: 2,
                            // 垂直阴影的位置
                            shadowOffsetY: 2,
                            // 阴影模糊距离
                            shadowBlur: 5,
                            // 阴影的颜色
                            shadowColor: 'pink',
                        },
                        // 柱条宽度
                        // barWidth: '20%',
                        // 同一刻度多条柱图之间的距离，相对本柱图宽度的百分比
                        barGap: '30%',
                        // 开启柱图背景色
                        // showBackground: true,
                        // backgroundStyle: {
                        //     color: 'rgba(220, 220, 220, 0.8)'
                        // }
                    },
                    {   
                        // 折线图
                        type: 'line',
                        name: '降水量',
                        // 使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用
                        xAxisIndex: 0,
                        // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        yAxisIndex: 0,
                        // 标记的图形
                        symbol: 'circle',
                        symbolSize: 5,
                        // 区域填充色
                        // areaStyle: {
                        //     color: 'pink'
                        // },
                        // 系列中的数据内容数组
                        data: [6, 32, 7, 86, 6.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3],
                        // 设置折线图样式
                        // lineStyle: {
                        //     normal: {
                        //         color: 'red',
                        //         width: 2,
                        //         type: 'solid'
                        //     }
                        // },
                        // 折线拐点标志的样式
                        itemStyle: {
                            color: 'blue'
                        },
                        // 展示为平滑曲线
                        smooth: true,
                        label: {
                            // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                            show: true
                        },
                        labelLine: {
                            show: true
                        },
                        // 图表标线
                        markLine: {
                            data: [{ type: 'average', name: '平均线' }],
                            precision: 2,
                            symbol: ['none', 'arrow']
                        }
                    },
                    {
                        type: 'pie',
                        name: '饼状图',
                        data: [{
                            value: 10,
                            name: '直接访问'
                        },
                        {
                            value: 30,
                            name: '联盟广告'
                        },
                        {
                            value: 25,
                            name: '搜索引擎'
                        }],
                        // 饼图的半径
                        radius: '50%',
                        // 设置饼状图为环形
                        // radius: ['30%', '50%'],
                        // 如果数据和为 0，不显示饼图，默认显示
                        stillShowZeroSum: false,

                        label: {
                            // 扇形对应的标签也不显示
                            show: false
                        },
                        // 南丁格尔图（玫瑰图）
                        roseType: 'area'
                    },
                ],
            });
        },
        resizeEcharts() {
            if (this.myEchart) {
                // echart响应容器尺寸变化
                this.myEchart.resize();
            }
        },
        // 导出图表图片
        getDataURL() {
            const base64 = this.myEchart.getDataURL({
                // 导出的格式
                type: 'png',
                // 导出的图片分辨率比例，默认1
                pixelRatio: 2,
                // 导出的图片背景色
                backgroundColor: '#ccc'
            });
        },

        initEchart2() {
            if (!this.echart2) {
                this.echart2 = echart.init(document.querySelector('#line'));
            }
            this.echart2.setOption({
                grid: {
                    show: true
                },
                xAxis: {
                    type: 'category',
                    data: Array(12).fill(1).map((item, index) => `${index + 1}月`),
                },
                yAxis: {
                    type: 'value',
                    // data: Array(6).fill(1).map((item, index) => (index + 1) * 10),
                },
                series: [
                    {
                        type: 'bar',
                        name: '数量',
                        data: Array(12).fill(1).map(() => Math.floor(Math.random() * 60)),
                    }
                ]
            });
        }
    },
};
</script>

<style lang="less" scoped>
.echart-pie-view {
  width: 100%;
  height: 500px;
}
</style>