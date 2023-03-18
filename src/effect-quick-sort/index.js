const _inputLines = [
  "5",
  "alla 4 100",
  "gena 6 1000",
  "gosha 2 90",
  "rita 2 90",
  "timofey 4 80",
];

// const _inputLines = [
//   "5",
//   "alla 0 0",
//   "gena 0 0",
//   "gosha 0 0",
//   "rita 0 0",
//   "timofey 0 0",
// ];

/**
 * Swapping two elements
 * @param {*} participants
 * @param {*} leftIdx
 * @param {*} rightIdx
 */

function swap(participants, leftIdx, rightIdx) {
  const temp = participants[leftIdx];
  participants[leftIdx] = participants[rightIdx];
  participants[rightIdx] = temp;
}

function compare(first, second) {
  return (
    first.solved < second.solved ||
    (first.solved === second.solved && first.penalty < second.penalty) ||
    (first.solved === second.solved &&
      first.penalty === second.penalty &&
      first.username < second.username)
  );
}

// function isLessPivot(participants, pivot) {
//   return (
//     participants.solved < pivot.solved ||
//     (participants.solved === pivot.solved &&
//       participants.penalty < pivot.penalty) ||
//     (participants.solved === pivot.solved &&
//       participants.penalty === pivot.penalty &&
//       participants.username < pivot.username)
//   );
// }

// function isGreaterPivot(participants, pivot) {
//   return (
//     participants.solved > pivot.solved ||
//     (participants.solved === pivot.solved &&
//       participants.penalty > pivot.penalty) ||
//     (participants.solved === pivot.solved &&
//       participants.penalty === pivot.penalty &&
//       participants.username > pivot.username)
//   );
// }

function partition(participants, left, right) {
  let pivot = participants[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer

  while (i <= j) {
    while (compare(participants[i], pivot)) {
      i++;
    }

    while (compare(pivot, participants[j])) {
      j--;
    }

    if (i <= j) {
      swap(participants, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(participants, left, right) {
  let index;

  if (participants.length > 1) {
    index = partition(participants, left, right); //index returned from partition

    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(participants, left, index - 1);
    }

    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(participants, index, right);
    }
  }

  return participants;
}

// function prepareParticipant(arr) {
//   return {
//     username: arr[0],
//     solved: -Number(arr[1]),
//     penalty: Number(arr[2]),
//   };
// }

class Participant {
  constructor(username, solved, penalty) {
    this.username = username;
    this.solved = -solved;
    this.penalty = penalty;
  }
}

function solve() {
  const n = Number(_inputLines[0]);

  const participants = [];

  // for (let i = 1; i <= n; i++) {
  //   participants.push(prepareParticipant(_inputLines[i].split(" ")));
  // }

  for (let i = 1; i <= n; i++) {
    const participantParameters = _inputLines[i].split(" ");
    participants.push(
      new Participant(
        participantParameters[0],
        Number(participantParameters[1]),
        Number(participantParameters[2])
      )
    );
  }

  console.log(participants);

  const sortedParticipants = quickSort(
    participants,
    0,
    participants.length - 1
  );
  sortedParticipants.forEach((participant) =>
    console.log(participant.username)
  );
}

solve();
