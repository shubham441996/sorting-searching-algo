class Searching {
  ele: number[];
  len: number;
  constructor(ele: number[]) {
    this.ele = ele;
    this.len = ele.length;
  }
  /**
   *
   * @param n
   * @return index
   *
   */
  linearSearch(n: number) {
    for (let i = 0; i < this.len; i++) {
      if (this.ele[i] === n) {
        return i;
      }
    }
    return -1;
  }

  binarySearch(n: number) {
    let self = this;
    function searchRecursive(low: number, high: number): number {
      let mid = Math.floor((low + high) / 2);
      if (low>high) {
        return -1;
      }
      console.log(low, mid, high, n, self.ele[mid]);
      if (self.ele[mid] === n) {
        return mid;
      }
      if (self.ele[mid] > n) {
        return searchRecursive(low, mid - 1);
      }
      return searchRecursive(mid + 1, high);
    }
    return searchRecursive(0, this.len);
  }
}
export default Searching;
