export const shuffleArray = (array: string[]) => {
  console.log(array);
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export const duplicatedArray = (array: string[]) =>
  array.reduce((res, current) => res.concat([current, current]), [] as string[]);

export const createFrontCards = (initialDiff: string, array: string[]) => {
  const x = +initialDiff;
  switch (x) {
    case 1:
      return array.slice(0, 3);
    case 2:
      return array.slice(0, 6);
    case 3:
      return array.slice(0, 9);
    default:
      return [];
  }
};
