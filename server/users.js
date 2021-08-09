const users = [];

// join user to chat
const userJoin = (id, name, project) => {
  const user = { id, name, project };
  users.push(user);
  return user;
};

// user leaves
const userLeaves = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

// get room users
const getProjectUsers = (project) => {
  return users.filter((user) => user.project === project);
};

// get current user
const getCurrentUser = (id) => {
  return users.find((user) => user.id === id);
};

export { userJoin, userLeaves, getProjectUsers, getCurrentUser };
