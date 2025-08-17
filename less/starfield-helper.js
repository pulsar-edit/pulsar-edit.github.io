
function makeBoxShadow (starsWrapper, sizeWrapper) {
  let count = starsWrapper.value;
  let size = sizeWrapper.value;
  let boxShadowValue = [];
  for (let i = 0; i < count; i++) {
    let randomWidth = Math.random() * size;
    let randomHeight = Math.random() * size;
    let randomValue = Math.random() * 25;
    boxShadowValue.push(
      `calc(var(--starfield-width) * ${(randomWidth - (size / 2))}) calc(var(--starfield-height) * ${(randomHeight - (size / 2))}) hsl(90, 0, ${75 + randomValue}%)`
    );
  }
  return boxShadowValue.join(', ');
}

module.exports = {
  install: function(_less, _pluginManager, functions) {
    functions.add('makeBoxShadow', makeBoxShadow);
  }
};
