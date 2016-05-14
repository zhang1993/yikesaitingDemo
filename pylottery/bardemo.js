/**
 * Created by littlekeng on 16/5/11.
 */

var ctx = document.getElementById("myChart").getContext("2d");
var num1 = 300;
var data = {
    labels: [
        "已买",
        "未买"
    ],
    datasets: [
        {
            data: [num1, 50],
            backgroundColor: [
                "#FF6384",
                "#36A2EB"

            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB"
            ]
        }]
};

new Chart(ctx, {
    type: 'pie',
    data :data,

});
