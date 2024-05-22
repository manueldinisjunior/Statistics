# Task1: Statistics Calculator

This project performs simple statistical calculations on an array of numbers and displays the results on an HTML page. The calculations include the minimum, maximum, and average values, as well as the median.

## Task Description

As discussed, the task is to perform simple calculations in JavaScript and output the results in HTML. Specifically, you need to:

1. Determine the minimum value in the array.
2. Determine the maximum value in the array.
3. Calculate the average (mean) value of the array.
4. As an additional task, calculate the median value of the array.

## Excercise Data

The array of numbers to be used for the calculations is:

const inputData = [
    63.24, 33.32, 85.94, 50.23, 86.39, 42.00, 20.05, 92.44, 37.14, 18.80,
    67.65, 35.09, 60.77, 71.07, 32.50, 90.44, 58.11, 76.19, 42.90, 71.69,
    36.09, 36.16, 14.91
];

## Files

- `statistics.html`: The main HTML file that displays the results.
- `script.js`: The JavaScript file that contains the logic for calculating the statistics.
- `README.md`: This file with an overview of the project and documentation about the task.


## Algorithm

### Calculate Statistics
```javascript
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
```

### Display Results
```javascript
function outputResults({ min, max, avg, median }) {
    document.getElementById("minId").textContent = min;
    document.getElementById("maxId").textContent = max;
    document.getElementById("avgId").textContent = avg.toFixed(2);
    document.getElementById("medianId").textContent = median;
}

const stats = calculateStatistics(inputData);
outputResults(stats);
```

## How to Use

1. Include `script.js` and `styles.css` in your HTML.
2. Open `index.html` to view the results.

---

## Resources

1. W3School
2. ChatGPT
3. GitHub

---

## Vercel

https://statistics-aaojgbmav-manueldinisjuniors-projects.vercel.app/

Sure, there's the content formatted as a README file within the 1000-character limit:

