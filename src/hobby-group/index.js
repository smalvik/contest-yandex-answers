function solve() {
  const NUMBER_ENTRIES_IN_LOG = 8;

  const _inputLines = [
    "вышивание крестиком",
    "рисование мелками на парте",
    "настольный керлинг",
    "настольный керлинг",
    "кухня африканского племени ужасмай",
    "тяжелая атлетика",
    "таракановедение",
    "таракановедение",
  ];

  const hobbyGroups = [];

  // index = 1; index <= NUMBER_ENTRIES_IN_LOG; index++
  for (let index = 0; index < NUMBER_ENTRIES_IN_LOG; index++) {
    hobbyGroups.push(_inputLines[index]);
  }

  const hobbyGroupsCount = {};

  for (const hobbyGroup in hobbyGroups) {
    // console.log(`hobbyGroup - ${hobbyGroup}`);

    const element = hobbyGroups[hobbyGroup];
    // console.log(`element - ${element}`);

    // console.log("hobbyGroupsCount before");
    // console.log(hobbyGroupsCount[element]);

    if (!Object.hasOwnProperty.call(hobbyGroupsCount, element)) {
      // console.log("**************");
      hobbyGroupsCount[element] = Number(0);
      // console.log("hobbyGroupsCount check");
      // console.log(hobbyGroupsCount[element]);
      console.log(element);
      // console.log(hobbyGroupsCount);
      // console.log("**************");
    }

    // console.log("typeof");
    // console.log(typeof hobbyGroupsCount[element]);

    // hobbyGroupsCount[element] += 1;

    // console.log(element);

    // console.log("hobbyGroupsCount after");
    // console.log(hobbyGroupsCount[element]);

    // console.log(hobbyGroupsCount);
    // console.log("=======================================");
  }

  // console.log(hobbyGroupsCount);
  // return hobbyGroupsCount;
}

solve();
