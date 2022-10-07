export const fadeUp = {
  hidden: {
    y: 80,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.4,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const fadeDown = {
  hidden: {
    y: -80,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.4,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const fadeRight = {
  hidden: {
    x: -80,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const fadeLeft = {
  hidden: {
    x: 80,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};
