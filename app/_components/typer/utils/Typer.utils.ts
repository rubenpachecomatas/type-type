const getMultipleRandom = (arr: any[], num: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};

export { getMultipleRandom };
