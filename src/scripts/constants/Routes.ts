const basePath = '/';

const game = `${basePath}game`;
const dragAndDrop = `${basePath}dragAndDrop`;

export const Routes = {
  basePath,
  paths: {
    game,
    dragAndDrop,
  },
} as const;
