const inputData = [
    63.24, 33.32, 85.94, 50.23, 86.39, 42.00, 20.05, 92.44, 37.14, 18.80,
    67.65, 35.09, 60.77, 71.07, 32.50, 90.44, 58.11, 76.19, 42.90, 71.69,
    36.09, 36.16, 14.91
];

function calculateStatistics(data) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const avg = data.reduce((sum, value) => sum + value, 0) / data.length;
    const sortedData = [...data].sort((a, b) => a - b);
    const median = sortedData.length % 2 === 0
        ? (sortedData[sortedData.length / 2 - 1] + sortedData[sortedData.length / 2]) / 2
        : sortedData[Math.floor(sortedData.length / 2)];
    
    return { min, max, avg, median };
}

function outputResults({ min, max, avg, median }) {
    document.getElementById("minId").textContent = min;
    document.getElementById("maxId").textContent = max;
    document.getElementById("avgId").textContent = avg.toFixed(2);
    document.getElementById("medianId").textContent = median;
}

const stats = calculateStatistics(inputData);
outputResults(stats);
