var canvas = document.getElementById("heartDiseaseCanvas"); 
var legend = document.querySelector("legend[for='diseaseGraph']");
var context = canvas.getContext("2d"); 
let ulYears;

canvas.width = 1200;
canvas.height = 800;

let dataCancer = {"All Races":211.1,"White":207.8,"African American":271.3,"American Indian/Alaska Native":141.8,"Asian/Pacific Islander":113.3,"Hispanic":157.3}

function drawLine(context, startPointX, startPointY, endPointX, endPointY, color) {
    context.save();
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(startPointX, startPointY);
    context.lineTo(endPointX, endPointY);
    context.stroke();
    context.restore();
}

function drawBar(context, upperLeftCornerX, upperLeftCornerY, width, height, color) {
    context.save();
    context.fillStyle = color;
    context.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
    context.restore();
}

class DeseaseBarchart {
    constructor(options) {
        this.options = options;
        this.canvas = options.canvas;
        this.context = this.canvas.getContext('2d');
        this.colors = options.colors;

        this.draw = () => {
            let maxValueOfBar = 0;

            for (let el in this.options.data) {
                maxValueOfBar = Math.max(maxValueOfBar, this.options.data[el]);
            }
            let canvasH = this.canvas.height - this.options.padding * 2;
            let canvasW = this.canvas.width - this.options.padding * 2;

            let gridLineValue = 0;
            while (gridLineValue <= maxValueOfBar) {
                let grid = canvasH * (1 - gridLineValue / maxValueOfBar) + this.options.padding;
                drawLine(this.context, 0, grid, this.canvasW, grid, this.options.gridColor);

                this.context.save();
                this.context.fillStyle = this.options.gridColor;
                this.context.font = "bold 10px Arial";
                this.context.fillText(gridLineValue, 10, grid - 2);
                this.context.restore();

                gridLineValue += this.options.gridScale;
            }

            let barIndex = 0;
            let noBars = Object.keys(this.options.data).length;
            let barSize = (canvasW) / noBars;

            for (let el in this.options.data) {
                let curr = this.options.data[el];
                let barHeight = Math.round(canvasH * curr / maxValueOfBar);
                drawBar(this.context, this.options.padding + barIndex * barSize, this.canvas.height - barHeight - this.options.padding, barSize, barHeight, this.colors[barIndex % this.colors.length]);
                barIndex++;
            }

        };
    }
}

var CancerChart = new DeseaseBarchart({
    canvas: canvas,
    padding: 120,
    gridScale: 30000,
    gridColor: '#130202',
    data: dataCancer,
    colors: ["#980B0B", "#F78D8D", "#4B0606", "#ED1D1D", "#FF4754", "#FF0A1B"]
});

let deseaseOptionCancer = document.querySelector('.option-cancer');

deseaseOptionCancer.addEventListener('click',() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    CancerChart.draw();
    barIndex = 0;
    let dataValues = Object.values(dataCancer);
    if(ulYears) {
        legend.removeChild(ulYears);
        drawLegend(dataCancer,dataValues,CancerChart);
    } else {
        drawLegend(dataCancer,dataValues,CancerChart);
    }
})

function drawLegend(dataObj,dataObjValues,chart) {
    ulYears = document.createElement("ul");
    ulYears.setAttribute('class','legend');
    legend.append(ulYears);
    for (el in dataObj) {
        var li = document.createElement("li");
        li.setAttribute('class', 'graphic-legend-item')
        li.style.borderBottom = "10px solid " + chart.colors[barIndex % chart.colors.length];
        li.textContent = el + "- " + dataObjValues[barIndex] + " cases";
        ulYears.append(li);
        barIndex++;
    }
}