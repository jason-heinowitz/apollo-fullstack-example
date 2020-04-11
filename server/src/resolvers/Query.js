const Query = {
  randomInt(parent, args, ctx, info) {
    const { maxNumber } = args;
    return Math.floor(Math.random() * maxNumber);
  },
  tracing(parent, args, ctx, info) {
    return { error: 'Failed to apply tracing.' };
  },
};

export default Query;
