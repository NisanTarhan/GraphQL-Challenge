import { nanoid } from "nanoid";

const getCreatedData = (data, createdData, subscriptionData) => {
  const { key, fieldName, pubsub } = subscriptionData || {};
  const newData = {
    id: nanoid(),
    ...createdData,
  };

  data.push(newData);
  if (key && fieldName && pubsub) {
    pubsub.publish(key, { [fieldName]: newData });
  }
  return newData;
};

const getUpdatedData = (data, updatedData, id) => {
  const index = data.findIndex((item) => item.id == id);
  if (index === -1) return null;
  data[index] = {
    ...data[index],
    ...updatedData,
  };
  return data[index];
};

const getDeletedData = (data, id) => {
  const index = data.findIndex((item) => item.id == id);
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

export {
  getCreatedData,
  getUpdatedData,
  getDeletedData,
  getCountOfAllDeletedData,
};
