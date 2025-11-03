export const useAnimationVariants = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemScaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const itemSlideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const itemLargeSlideVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom?: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom || 0 },
    }),
  };

  const itemFastVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const fastContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return {
    containerVariants,
    itemScaleVariants,
    itemSlideUpVariants,
    itemLargeSlideVariants,
    itemFastVariants,
    fastContainerVariants,
    cardContainerVariants,
  };
};

export const defaultViewportSettings = {
  once: true,
  amount: 0.3,
};
