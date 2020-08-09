export default class Sorting {
  ele: any[] = [];
  len = 0;
  constructor(ele: any[]) {
    this.ele = ele;
    this.len = ele.length;
  }

  /*
  Logic is to move largest element at last.
  1- Compare nth and nth+1 element and replace 
      if nth element is greater to nth+1 by doing this you will get greatest element in the last Position.
  2- Time Complexity is O(n^2)
  3- This is inplace Algorithm.    
  */

  bubbleSort() {
    for (let i = 0; i < this.len - 1; i++) {
      for (let j = 0; j < this.len - i; j++) {
        if (j + 1 < this.len && this.ele[j] > this.ele[j + 1]) {
          let temp = this.ele[j];
          this.ele[j] = this.ele[j + 1];
          this.ele[j + 1] = temp;
        }
      }
    }
    return this.ele;
  }
  /*
  Logic is same as we set playing cards in order withour hands.
  1. pick the element and place it in its position as all the element from the left
  is sorted.
  2. Shift the element to right once you find its position where you have to place it.
  3. Use this algo if input is small
  4- Inplace Algo.
  */

  insertionSort() {
    for (let i = 1; i < this.len; i++) {
      let j = i - 1;
      let key = this.ele[i];
      while (j >= 0 && key < this.ele[j]) {
        this.ele[j + 1] = this.ele[j];
        j--;
      }
      this.ele[j + 1] = key;
    }
    return this.ele;
  }

  /**
   * Logic is to assume left array as sorted and right array as unsorted
   * Pick the element and place it to its right position.
   * this Algo will be great to place small element to its position
   *
   */
  selectionSort() {
    for (let i = 0; i < this.len - 1; i++) {
      let smallestIndex = i;
      for (let j = i + 1; j < this.len; j++) {
        if (this.ele[smallestIndex] > this.ele[j]) {
          smallestIndex = j;
        }
      }
      let temp = this.ele[smallestIndex];
      this.ele[smallestIndex] = this.ele[i];
      this.ele[i] = temp;
    }
    return this.ele;
  }
  /**
   * Logic is to divide the array and merge the divided array.
   * O(nlogn)=>Worst Case
   * Not Inplace Algo
   *
   */
  mergeSort() {
    function mergeSortedArray(
      arr: any[],
      lowerIndex: number,
      midIndex: number,
      higherIndex: number
    ) {
      let leftArray = [];
      let rightArray = [];
      let leftIndex = 0;
      let rightIndex = 0;
      let n1 = midIndex - lowerIndex + 1;
      let n2 = higherIndex - midIndex;
      for (let i = lowerIndex; i <= midIndex; i++) {
        leftArray.push(arr[i]);
      }
      for (let i = midIndex + 1; i <= higherIndex; i++) {
        rightArray.push(arr[i]);
      }
      let k = lowerIndex;
      while (leftIndex < n1 && rightIndex < n2) {
        if (leftArray[leftIndex] <= rightArray[rightIndex]) {
          arr[k] = leftArray[leftIndex];
          leftIndex++;
        } else {
          arr[k] = rightArray[rightIndex];
          rightIndex++;
        }
        k++;
      }
      while (leftIndex < n1) {
        arr[k] = leftArray[leftIndex];
        leftIndex++;
        k++;
      }

      /* Copy remaining elements of R[] if any */
      while (rightIndex < n2) {
        arr[k] = rightArray[rightIndex];
        rightIndex++;
        k++;
      }
    }
    function divide(arr: number[], lowerIndex: number, higherIndex: number) {
      let midIndex = Math.trunc((lowerIndex + higherIndex) / 2);

      if (midIndex < higherIndex) {
        divide(arr, lowerIndex, midIndex);
        divide(arr, midIndex + 1, higherIndex);
        mergeSortedArray(arr, lowerIndex, midIndex, higherIndex);
      }
      return;
    }
    divide(this.ele, 0, this.len - 1);
  }
  /**
   * Select a pivot.Divide array such a way that all the left element are smaller and
   * right element are larger.
   * o(nlogn) Average Case and Most of the case
   * Mostly uses in Array.sort()
   */
  quickSort() {
    function partition(arr: any[], start: number, end: number) {
      let partitionIndex = start;
      let pivot = arr[end];
      for (let i = start; i <= end; i++) {
        if (pivot > arr[i]) {
          let temp = arr[partitionIndex];
          arr[partitionIndex] = arr[i];
          arr[i] = temp;
          partitionIndex++;
        }
      }
      let temp = arr[partitionIndex];
      arr[partitionIndex] = pivot;
      arr[end] = temp;
      return partitionIndex;
    }
    function sortPartion(arr: any[], start: number, end: number) {
      if (start < end) {
        const partitionIndex = partition(arr, start, end);
        sortPartion(arr, start, partitionIndex - 1);
        sortPartion(arr, partitionIndex + 1, end);
      }
      return;
    }
    sortPartion(this.ele, 0, this.len - 1);
  }
}
