const Query = {
  randomInt(parent, args, ctx, info) {
    const { maxNumber } = args;
    return Math.floor(Math.random() * maxNumber);
  },
};

export default Query;
