module.exports.day = function () {
  const today = new Date();

  // Settings how the date will be shown
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  return today.toLocaleDateString('de-DE', options);
};

module.exports.weekday = function () {
  const today = new Date();

  // Settings how the date will be shown
  const options = {
    weekday: 'long',
  };

  return today.toLocaleDateString('de-DE', options);
};
