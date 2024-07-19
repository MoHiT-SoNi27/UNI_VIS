// sortingAlgorithms.js

export function bubbleSort(array) {
  const animations = [];
  const auxArray = array.slice();
  for (let i = 0; i < auxArray.length - 1; i++) {
      for (let j = 0; j < auxArray.length - 1 - i; j++) {
          animations.push([j, j + 1, 'compare']);
          animations.push([j, j + 1, 'revert']);
          if (auxArray[j] > auxArray[j + 1]) {
              animations.push([j, auxArray[j + 1]]);
              animations.push([j + 1, auxArray[j]]);
              [auxArray[j], auxArray[j + 1]] = [auxArray[j + 1], auxArray[j]];
          } else {
              animations.push([j, auxArray[j]]);
              animations.push([j + 1, auxArray[j + 1]]);
          }
      }
      animations.push([auxArray.length - 1 - i, auxArray[auxArray.length - 1 - i], 'sorted']);
  }
  animations.push([0, auxArray[0], 'sorted']);
  return animations;
}

export function selectionSort(array) {
  const animations = [];
  const auxArray = array.slice();
  for (let i = 0; i < auxArray.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < auxArray.length; j++) {
          animations.push([minIdx, j, 'compare']);
          animations.push([minIdx, j, 'revert']);
          if (auxArray[j] < auxArray[minIdx]) {
              minIdx = j;
          }
      }
      if (minIdx !== i) {
          animations.push([i, auxArray[minIdx]]);
          animations.push([minIdx, auxArray[i]]);
          [auxArray[i], auxArray[minIdx]] = [auxArray[minIdx], auxArray[i]];
      }
      animations.push([i, auxArray[i], 'sorted']);
  }
  return animations;
}

export function insertionSort(array) {
  const animations = [];
  const auxArray = array.slice();
  for (let i = 1; i < auxArray.length; i++) {
      let j = i;
      while (j > 0 && auxArray[j] < auxArray[j - 1]) {
          animations.push([j, j - 1, 'compare']);
          animations.push([j, j - 1, 'revert']);
          animations.push([j, auxArray[j - 1]]);
          animations.push([j - 1, auxArray[j]]);
          [auxArray[j], auxArray[j - 1]] = [auxArray[j - 1], auxArray[j]];
          j--;
      }
      animations.push([j, auxArray[j], 'sorted']);
  }
  return animations;
}

export function quickSort(array) {
  const animations = [];
  const auxArray = array.slice();
  quickSortHelper(auxArray, 0, auxArray.length - 1, animations);
  return animations;
}

function quickSortHelper(array, start, end, animations) {
  if (start < end) {
      const pivotIndex = partition(array, start, end, animations);
      quickSortHelper(array, start, pivotIndex - 1, animations);
      quickSortHelper(array, pivotIndex + 1, end, animations);
  }
  for (let i = start; i <= end; i++) {
      animations.push([i, array[i], 'sorted']);
  }
}

function partition(array, start, end, animations) {
  const pivot = array[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
      animations.push([i, end, 'compare']);
      animations.push([i, end, 'revert']);
      if (array[i] < pivot) {
          animations.push([i, array[pivotIndex]]);
          animations.push([pivotIndex, array[i]]);
          [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
          pivotIndex++;
      }
  }
  animations.push([end, array[pivotIndex]]);
  animations.push([pivotIndex, array[end]]);
  [array[end], array[pivotIndex]] = [array[pivotIndex], array[end]];
  return pivotIndex;
}

export function mergeSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxArray, animations);
  return animations;
}

function mergeSortHelper(mainArray, start, end, auxArray, animations) {
  if (start === end) return;
  const middle = Math.floor((start + end) / 2);
  mergeSortHelper(auxArray, start, middle, mainArray, animations);
  mergeSortHelper(auxArray, middle + 1, end, mainArray, animations);
  merge(mainArray, start, middle, end, auxArray, animations);
}

function merge(mainArray, start, middle, end, auxArray, animations) {
  let k = start;
  let i = start;
  let j = middle + 1;
  while (i <= middle && j <= end) {
      animations.push([i, j, 'compare']);
      animations.push([i, j, 'revert']);
      if (auxArray[i] <= auxArray[j]) {
          animations.push([k, auxArray[i]]);
          mainArray[k++] = auxArray[i++];
      } else {
          animations.push([k, auxArray[j]]);
          mainArray[k++] = auxArray[j++];
      }
  }
  while (i <= middle) {
      animations.push([i, i, 'compare']);
      animations.push([i, i, 'revert']);
      animations.push([k, auxArray[i]]);
      mainArray[k++] = auxArray[i++];
  }
  while (j <= end) {
      animations.push([j, j, 'compare']);
      animations.push([j, j, 'revert']);
      animations.push([k, auxArray[j]]);
      mainArray[k++] = auxArray[j++];
  }
}
