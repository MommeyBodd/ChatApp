export const filterUsersToInvite = (usersToInvite, chatMembers) => {
  if (Array.isArray(usersToInvite) && Array.isArray(chatMembers)) {
    return usersToInvite.filter(
      user => !chatMembers.find(member => user._id === member._id)
    );
  }

  return [];
};

export const isIncomingMessageCheck = (currentUserId, messageAuthorId) => {
  if (
    typeof currentUserId === "string" &&
    typeof messageAuthorId === "string"
  ) {
    return currentUserId !== messageAuthorId;
  }
};

export const validateInputValue = value => {
  if (typeof value === "string") {
    const optimizedValue = value.trim();
    return optimizedValue === "" || optimizedValue.length > 500;
  }

  return true;
};
