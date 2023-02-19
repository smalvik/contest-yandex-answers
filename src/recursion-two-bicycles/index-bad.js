// function findDay(currentDay, lastDay, informationAboutSavings, bikePrice) {
//   // bike bikeBuyingDays[-1, -1] [first, second] // массив с днями, когда получится приобрести велосипеды
//   // const bikeBuyingDays = [-1, -1];

//   // console.log(currentDay);
//   if (currentDay === lastDay) {
//     // console.log(-1);
//     return -1; // базовый случай, когда мы дошли до 0
//   }

//   if (informationAboutSavings[currentDay] >= bikePrice) {
//     // console.log(i);
//     return currentDay + 1;
//   }

//   currentDay++;

//   return findDay(currentDay, lastDay, informationAboutSavings, bikePrice);

// }

// int lower_bound(int arr[], int key, int low, int high)
// {
//     if (low > high)
//         //return -1;
//         return low;

//     int mid = low + ((high - low) >> 1);
//     //if (arr[mid] == key) return mid;

//     //Attention here, we go left for lower_bound when meeting equal values
//     if (arr[mid] >= key)
//         return lower_bound(arr, key, low, mid - 1);
//     else
//         return lower_bound(arr, key, mid + 1, high);
// }

function findDay(informationAboutSavings, bikePrice, left, right) {
  if (left >= right && left !== 0) return -1;
  // const middle = Math.floor(left + (right - left) / 2);
  const middle = Math.floor((left + right) / 2);
  console.log(`left - ${left}`);
  console.log(`rigth - ${right}`);
  console.log(`middle - ${middle}`);

  if (
    informationAboutSavings[middle] >= bikePrice &&
    (informationAboutSavings[middle - 1] < bikePrice || middle === 0)
  ) {
    return middle + 1;
  } else if (bikePrice <= informationAboutSavings[middle]) {
    return findDay(informationAboutSavings, bikePrice, left, middle);
  } else {
    return findDay(informationAboutSavings, bikePrice, middle + 1, right);
  }
}

// int upper_bound(int arr[], int key, int low, int high)
// {
//     if (low > high)
//         //return -1;
//         return low;

//     int mid = low + ((high - low) >> 1);
//     //if (arr[mid] == key) return mid;

//     //Attention here, we go right for upper_bound when meeting equal values
//     if (arr[mid] > key)
//         return upper_bound(arr, key, low, mid - 1);
//     else
//         return upper_bound(arr, key, mid + 1, high);
// }

function solve() {
  const lastDay = 7; // это максимальное число дней, до которого мы будем инкрементировать i
  const informationAboutSavings = "1 1 4 4 4 4 8"
    .split(" ")
    .map((str) => parseInt(str, 10)); // здесь мы будем искать значение
  // console.log(informationAboutSavings);
  const bikePrice = 4; // это значение надо найти
  const left = 0;
  const right = informationAboutSavings.length;
  const first = findDay(informationAboutSavings, bikePrice, left, right);
  const second = findDay(informationAboutSavings, bikePrice * 2, left, right);

  console.log(`${first} ${second}`);

  // let st = 0;
  // let end = informationAboutSavings.length - 1;
  // let i = 1;

  // while (st <= end) {
  //   console.log(`i - ${i++}`);
  //   let mid = Math.floor((st + end) / 2);
  //   console.log(`mid - ${mid}`);
  //   console.log("informationAboutSavings[mid] <= bikePrice");
  //   console.log(informationAboutSavings[mid] <= bikePrice);
  //   if (informationAboutSavings[mid] <= bikePrice) {
  //     st = mid + 1;
  //   } else {
  //     end = mid - 1;
  //   }
  // }

  // console.log(`start - ${st}`);
  // console.log(`informationAboutSavings[st]`);
  // console.log(informationAboutSavings[st]);

  // let currentDay = 0;
  // const first = findDay(
  //   currentDay,
  //   lastDay,
  //   informationAboutSavings,
  //   bikePrice
  // );
  // const second = findDay(
  //   currentDay,
  //   lastDay,
  //   informationAboutSavings,
  //   bikePrice * 2
  // );
  // console.log(`${first} ${second}`);
}

solve();
