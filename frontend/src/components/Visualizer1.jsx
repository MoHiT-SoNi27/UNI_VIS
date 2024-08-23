import React, { useState, useEffect } from 'react';
import { bubbleSort, selectionSort, insertionSort, quickSort, mergeSort } from './sortingAlgorithms';

const Visualizer = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(50);
  const [inputArray, setInputArray] = useState("");
  const [isSorting, setIsSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [speed, setSpeed] = useState(50); 
  const containerHeight = 400;

  useEffect(() => {
    resetArray();
  }, [size]);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < size; i++) {
      newArray.push(Math.floor(Math.random() * 100) + 1);
    }
    setArray(newArray);
    resetBarColors();
  };

  const resetBarColors = () => {
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = 'blue';
    }
  };

  const handleInputChange = (e) => {
    setInputArray(e.target.value);
  };

  const handleSubmit = () => {
    const newArray = inputArray
      .split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num))
      .map(num => Math.min(num, 10e5)); // Cap values to 10e5
    setArray(newArray);
  };

  const handleSort = () => {
    setIsSorting(true);
    let animations = [];
    switch (algorithm) {
      case "bubbleSort":
        animations = bubbleSort(array);
        break;
      case "selectionSort":
        animations = selectionSort(array);
        break;
      case "insertionSort":
        animations = insertionSort(array);
        break;
      case "quickSort":
        animations = quickSort(array);
        break;
      case "mergeSort":
        animations = mergeSort(array);
        break;
      default:
        break;
    }
    animateSorting(animations);
  };

  const animateSorting = (animations) => {
    const animationSpeed = 100 - speed; // Adjust speed based on the slider value
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i].length === 3;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx, action] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = action === 'sorted' ? null : arrayBars[barTwoIdx].style;
        const color = action === 'compare' ? 'red' : action === 'sorted' ? 'green' : 'blue';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          if (barTwoStyle) barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        const [barIdx, newHeight] = animations[i];
        const barStyle = arrayBars[barIdx].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}%`;
        }, i * animationSpeed);
      }
    }
    setTimeout(() => setIsSorting(false), animations.length * animationSpeed);
  };

  // Normalize values to fit within the container height
  const maxValue = Math.max(...array, 1);
  const normalizedArray = array.map(value => (value / maxValue) * 100);

  // Adjust bar width based on array size
  const barWidth = Math.max(1, Math.floor(600 / size));

  return (
    <div className="visualizer-container">
      <div className="controls my-4 bg-gray-900 text-white rounded-3xl p-5 ">
        <div className="random-array mb-2">
          <label className="mr-2">Array Size:</label>
          <input
            type="range"
            min="10"
            max="150"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="slider"
            disabled={isSorting}
          />
          <span className="ml-2">{size}</span>
        </div>
        <div className="speed-control mb-2">
          <label className="mr-2">Animation Speed:</label>
          <input
            type="range"
            min="1"
            max="100"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="slider"
            disabled={isSorting}
          />
          <span className="ml-2">{speed}</span>
        </div>
        <button onClick={resetArray} className="bg-blue-500 text-white px-4 py-2 rounded mb-2" disabled={isSorting}>
          Generate New Array
        </button>
        <div className="input-array mb-2">
          <label className="mr-2">Input Array (comma-separated):</label>
          <input 
            type="text"
            value={inputArray}
            onChange={handleInputChange}
            className="border p-1 text-black"
            disabled={isSorting}
          />
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-1 rounded ml-2 hover:bg-green-800" disabled={isSorting}>
            Submit
          </button>
        </div>
        <div className="sorting-controls mb-2">
          <label className="mr-2">Choose Algorithm:</label>
          <select className='text-black font-bold' value={algorithm} onChange={(e) => setAlgorithm(e.target.value)} disabled={isSorting}>
            <option value="bubbleSort">Bubble Sort</option>
            <option value="selectionSort">Selection Sort</option>
            <option value="insertionSort">Insertion Sort</option>
            <option value="quickSort">Quick Sort</option>
            <option value="mergeSort">Merge Sort</option>
          </select>
          <button onClick={handleSort} className="bg-purple-500 text-white px-4 py-2 rounded ml-2 hover:bg-purple-800" disabled={isSorting}>
            Sort
          </button>
        </div>
      </div>
      <div className="array-container p-4 flex justify-center" style={{ height: `${containerHeight}px` }}>
        {normalizedArray.map((value, idx) => (
          <div
            className="array-bar bg-blue-500 inline-block mx-1 rounded-t-md"
            key={idx}
            style={{ height: `${value}%`, width: `${barWidth}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
