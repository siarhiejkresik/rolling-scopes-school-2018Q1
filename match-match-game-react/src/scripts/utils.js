export const timeMSToMMSS = (milliseconds) => {
  let seconds;
  let minutes;
  const formatting = int_ => (int_ < 10 ? `0${int_}` : int_);

  if (milliseconds >= 60 * 60 * 1000) {
    minutes = 59;
    seconds = 59;
  } else {
    seconds = formatting(parseInt((milliseconds / 1000) % 60, 10));
    minutes = formatting(parseInt((milliseconds / (1000 * 60)) % 60, 10));
  }

  return `${minutes}:${seconds}`;
};

// const aspectRatio = (width, height) => width / height;

// export const windowAspectRatio = () => aspectRatio(window.innerWidth, window.innerHeight);

// const cardAspectRatio = aspectRatio(110, 150);
