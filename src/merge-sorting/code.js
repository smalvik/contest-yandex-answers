/*
Функция merge принимает два отсортированных массива, сливает их в один отсортированный массив и возвращает его. 
Если требуемая сигнатура имеет вид merge(array, left, mid, right), то первый массив задаётся полуинтервалом 
[left, mid)
 массива array, а второй – полуинтервалом 
[mid, right)
 массива array.
*/
function merge(arr, left, mid, right) {
  // Your code
  // “ヽ(´▽｀)ノ”
}

/*
Функция merge_sort принимает некоторый подмассив, который нужно отсортировать. 
Подмассив задаётся полуинтервалом — его началом и концом. 
Функция должна отсортировать передаваемый в неё подмассив, она ничего не возвращает.
*/
/*
Функция merge_sort разбивает полуинтервал на две половинки и рекурсивно вызывает сортировку отдельно для каждой. 
Затем два отсортированных массива сливаются в один с помощью merge.
*/
function merge_sort(arr, left, right) {
  // Your code
  // “ヽ(´▽｀)ノ”
}

function test() {
  var a = [1, 4, 9, 2, 10, 11];
  var b = merge(a, 0, 3, 6);
  var expected = [1, 2, 4, 9, 10, 11];

  var c = [1, 4, 2, 10, 1, 2];
  merge_sort(c, 0, 6);
  expected = [1, 1, 2, 2, 4, 10];
}
