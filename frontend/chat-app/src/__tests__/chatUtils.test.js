import {
  isIncomingMessageCheck,
  validateInputValue,
  filterUsersToInvite
} from "../utils/chatUtils";

describe("Utils tests", () => {
  describe("isIncomingMessageCheck", () => {
    test("current user id (first param) should not be equal to messageAuthorId (second param) ", () => {
      expect(isIncomingMessageCheck("123", "123")).toBeFalsy();
      expect(isIncomingMessageCheck("123", "1213")).toBeTruthy();
    });
  });

  describe("filterUsersToInvite", () => {
    test("should return empty array", () => {
      const mockUsersToInvite = [
        { _id: 1, userName: "Adrik" },
        { _id: 2, userName: "Adrik" }
      ];
      const mockChatMembers = [
        { _id: 1, userName: "Adrik" },
        { _id: 2, userName: "Adrik" }
      ];
      expect(
        filterUsersToInvite(mockUsersToInvite, mockChatMembers)
      ).toHaveLength(0);
    });

    test("should return array of objects which not contained in another array", () => {
      const mockUsersToInvite = [
        { _id: 1, userName: "Adrik" },
        { _id: 2, userName: "Adrik" },
        { _id: 3, userName: "Adrik" }
      ];
      const mockChatMembers = [
        { _id: 1, userName: "Adrik" },
        { _id: 2, userName: "Adrik" }
      ];

      expect(filterUsersToInvite(mockUsersToInvite, mockChatMembers)).toEqual([
        { _id: 3, userName: "Adrik" }
      ]);
    });
  });
});
