export const shorten = (title) => {
  const spliteTitle = title.split(" ");
  const newTitle = `${spliteTitle[0]} ${spliteTitle[1]}`;
  return newTitle;
};

export const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};
