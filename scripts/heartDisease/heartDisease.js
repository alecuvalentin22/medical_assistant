window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    const dataHeartDisease = [211.1, 207.8, 300, 141.8, 113.3, 157.3];
    const yLabels = ["0", "50", "100", "150", "200", "250", "300"];
    const xLabels = ["All races", "White", "African", "American", "Asian", "Hispanic"];
    const maxPixelsHeight = 750;

    const colorCodes = ["#F08080", "#FF0000", "#8B0000"]
    const standardWidth = 50;

    canvas.height = 775;
    canvas.width = 1000;

    initChart(context, yLabels);

    for (let i = 0; i < dataHeartDisease.length; i++) {
        if (dataHeartDisease[i] > maxPixelsHeight) {
            draw(350, standardWidth, context, i + 1);
        }
        else {
            draw(dataHeartDisease[i], standardWidth * 2, context, i + 1);
        }
    }

    function draw(height, width, context, index) {
        let currentIndex = width * index;

        context.beginPath();
        context.moveTo(currentIndex, 740);
        context.lineTo(currentIndex, 450 - height);
        context.lineTo(currentIndex + standardWidth, 450 - height);
        context.lineTo(currentIndex + standardWidth, 740);
        
        if (height < 150) {
            context.fillStyle = colorCodes[0];
        }
        else {
            if (height >= 150 && height <= 250) {
                context.fillStyle = colorCodes[1];
            }
            else {
                context.fillStyle = colorCodes[2];
            }
        }

        context.font = "20px Georgia";
        context.textAlign = "left";
        context.fillText(xLabels[index - 1], currentIndex, 770);
        
        context.fill();
        context.closePath();
    }
}); 

function initChart(context, yLabels) {
    context.beginPath();
    context.moveTo(30, 0);
    context.lineTo(30, 750);
    context.lineTo(1000, 750);
    context.stroke();

    context.font = "15px Georgia";

    for (let i = 0; i < yLabels.length; i++) {
        context.fillText(      yLabels[i], 0, 740 - i * 113 );
    }

    context.closePath();
}