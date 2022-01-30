const { nanoid } = require("nanoid");

const getCreatedData = (data, createdData) => {
  const newUser = {
    id: nanoid(),
    ...createdData,
  };
  data.push(newUser);
  return newUser;
};

const getUpdatedData = (data, updatedData, id) => {
  const index = data.findIndex((item) => item.id === id);
  if (index === -1) return null;
  data[index] = {
    ...data[index],
    ...updatedData,
  };
  return data[index];
};

const getDeletedData = (data, id) => {
  const index = data.findIndex((item) => item.id === id);
  if (index === -1) return null;
  const deletedItem = data[index];
  data.splice(index, 1);
  return deletedItem;
};

const getCountOfAllDeletedData = (data) => {
  const deletedDataCount = data.length;
  data.splice(0, deletedDataCount);
  return {
    count: deletedDataCount,
  };
};

module.exports = {
  getCreatedData,
  getUpdatedData,
  getDeletedData,
  getCountOfAllDeletedData,
};
