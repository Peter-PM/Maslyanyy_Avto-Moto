
const KeyCode = {
  ENTER: 'Enter',
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

export const clickEsc = (evt) => {
  return evt.key === (KeyCode.ESCAPE || KeyCode.ESC);
};

