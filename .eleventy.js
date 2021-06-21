module.exports = (eleventyConfig) => {
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
  });

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
