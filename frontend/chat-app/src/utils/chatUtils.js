export const filterUsersToInvite = (usersToInvite, chatMembers) =>
  usersToInvite.filter(
    user => !chatMembers.find(member => user._id === member._id)
  );

export const isIncomingMessageCheck = (currentUserId, messageAuthorId) =>
  currentUserId !== messageAuthorId;

export const validateInputValue = value => {
  const optimizedValue = value.trim();
  return optimizedValue === "" || optimizedValue.length > 500;
};
