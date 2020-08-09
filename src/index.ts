import Sorting from "./Sorting";
import Searching from "./Searching";
import { unsortedArray } from "./utility/sample";

document.getElementById("app").innerHTML = `
<h1>Welcome to Sorting !</h1>
<a style="display:block;padding:10px 15px" href="https://visualgo.net/bn/sorting">Visualization for Sorting</a>
<span>These are the following sorting we will cover in this series</span>
<ul>
<li>
<s>
Bubble Sort
</s>
</li>
<li>
<s>
Selection Sort
</s>
</li>
<li>
<s>
Insertion  Sort
</s>
</li>
<li>
<s>
Merge Sort
</s>
</li>
<li>
<s>
Quick Sort
</s>
</li>
</ul>
`;
const sorting = new Sorting(unsortedArray);
let res = sorting.bubbleSort();
console.log(res);
const search = new Searching(res);
const ind = search.binarySearch(8);
console.log(ind);
