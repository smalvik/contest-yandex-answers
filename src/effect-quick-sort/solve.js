const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function swap(participants, leftIdx, rightIdx) {
  const temp = participants[leftIdx];
  participants[leftIdx] = participants[rightIdx];
  participants[rightIdx] = temp;
}

function isLessPivot(participants, pivot) {
  return (
    participants.solved < pivot.solved ||
    (participants.solved === pivot.solved &&
      participants.penalty < pivot.penalty) ||
    (participants.solved === pivot.solved &&
      participants.penalty === pivot.penalty &&
      participants.username < pivot.username)
  );
}

function isGreaterPivot(participants, pivot) {
  return (
    participants.solved > pivot.solved ||
    (participants.solved === pivot.solved &&
      participants.penalty > pivot.penalty) ||
    (participants.solved === pivot.solved &&
      participants.penalty === pivot.penalty &&
      participants.username > pivot.username)
  );
}

function partition(participants, left, right) {
  let pivot = participants[Math.floor((right + left) / 2)],
    i = left,
    j = right;

  while (i <= j) {
    while (isLessPivot(participants[i], pivot)) {
      i++;
    }

    while (isGreaterPivot(participants[j], pivot)) {
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
    index = partition(participants, left, right);

    if (left < index - 1) {
      quickSort(participants, left, index - 1);
    }

    if (index < right) {
      quickSort(participants, index, right);
    }
  }

  return participants;
}

function prepareParticipant(arr) {
  return {
    username: arr[0],
    solved: -Number(arr[1]),
    penalty: Number(arr[2]),
  };
}

function solve() {
  const n = Number(_inputLines[0]);

  const participants = [];
  for (let i = 1; i <= n; i++) {
    participants.push(prepareParticipant(_inputLines[i].split(" ")));
  }

  const sortedParticipants = quickSort(
    participants,
    0,
    participants.length - 1
  );

  sortedParticipants.forEach((participant) =>
    console.log(participant.username)
  );
}
