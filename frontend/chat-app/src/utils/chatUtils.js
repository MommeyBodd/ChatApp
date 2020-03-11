export const filterUsersToInvite = (usersToInvite, chatMembers) =>
  usersToInvite.filter(
    user => !chatMembers.find(member => user._id === member._id)
  );

export const isIncomingMessageCheck = (currentUserId, messageOwner) =>
  currentUserId !== messageOwner;

export const validateInputValue = value => value.trim() === "";
