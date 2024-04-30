const CreateSectors= ({ firstColor, secondColor, path, multiplier }) => {

  const sectors = [
    {angle: 0, color: firstColor, score: 1},
    {angle: 18, color: secondColor, score: 18},
    {angle: 36, color: firstColor, score: 4},
    {angle: 54, color: secondColor, score: 13},
    {angle: 72, color: firstColor, score: 6},
    {angle: 90, color: secondColor, score: 10},
    {angle: 108, color: firstColor, score: 15},
    {angle: 126, color: secondColor, score: 2},
    {angle: 144, color: firstColor, score: 17},
    {angle: 162, color: secondColor, score: 3},
    {angle: 180, color: firstColor, score: 19},
    {angle: 198, color: secondColor, score: 7},
    {angle: 216, color: firstColor, score: 16},
    {angle: 234, color: secondColor, score: 8},
    {angle: 252, color: firstColor, score: 11},
    {angle: 270, color: secondColor, score: 14},
    {angle: 288, color: firstColor, score: 9},
    {angle: 306, color: secondColor, score: 12},
    {angle: 324, color: firstColor, score: 5},
    {angle: 342, color: secondColor, score: 20},
  ];

  return {
    sectors: sectors,
    defaultPath: path,
    multiplier: multiplier,
  };
};

export default CreateSectors;