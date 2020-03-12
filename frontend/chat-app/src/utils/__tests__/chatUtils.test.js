import {
  isIncomingMessageCheck,
  validateInputValue,
  filterUsersToInvite
} from "../chatUtils";

describe("Utils tests", () => {
  describe("isIncomingMessageCheck", () => {
    test("current user id (first param) should not be equal to messageAuthorId (second param) ", () => {
      expect(isIncomingMessageCheck("123", "123")).toBeFalsy();
      expect(isIncomingMessageCheck("123", "1213")).toBeTruthy();
    });
  });
});
