# JavaScript Statistics Calculator

This project calculates basic statistics (minimum, maximum, average, and median) for a given array of numbers using JavaScript. The results are displayed in an HTML table.

## Usage

1. Clone the repository to your local machine.
2. Open the `statistics.html` file in a web browser.

## Instructions

The `statistics.html` file contains the HTML structure for displaying the calculation results. The JavaScript code for computing the statistics is embedded within the file.

### JavaScript Code

```javascript
const inputData = [63.24, 33.32, 85.94, 50.23, 86.39, 42.00, 20.05, 92.44, 37.14, 18.80, 67.65, 35.09, 60.77, 71.07, 32.50, 90.44, 58.11, 76.19, 42.90, 71.69, 36.09, 36.16, 14.91];

function calculateStatistics(data) {
    const sortedData = [...data].sort((a, b) => a - b);
    const min = Math.min(...data);
    const max = Math.max(...data);
    const avg = data.reduce((sum, value) => sum + value, 0) / data.length;

    const mid = Math.floor(sortedData.length / 2);
    const median = sortedData.length % 2 !== 0 ? sortedData[mid] : (sortedData[mid - 1] + sortedData[mid]) / 2;

    return { min, max, avg, median };
}

function output(minval, maxval, avgval, medianval) {
    document.getElementById("minId").textContent = minval.toFixed(2);
    document.getElementById("maxId").textContent = maxval.toFixed(2);
    document.getElementById("avgId").textContent = avgval.toFixed(2);
    document.getElementById("medianId").textContent = medianval.toFixed(2);
}

const stats = calculateStatistics(inputData);
output(stats.min, stats.max, stats.avg, stats.median);
