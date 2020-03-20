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

    test("should return empty array if entry params not arrays", () => {
      const mockUsersToInvite = NaN;
      const mockChatMembers = undefined;

      expect(filterUsersToInvite(mockUsersToInvite, mockChatMembers)).toEqual(
        []
      );
    });

    test("should return empty array", () => {
      const mockUsersToInvite = [1, 2, 3];
      const mockChatMembers = [23, 1, ""];

      expect(filterUsersToInvite(mockUsersToInvite, mockChatMembers)).toEqual(
        []
      );
    });
  });

  describe("validateInputValue", () => {
    test("should return true if input string empty", () => {
      const mockedEmptyString = "       ";

      expect(validateInputValue(mockedEmptyString)).toBeTruthy();
    });

    test("should return false if input string not empty", () => {
      const mockedCorrectString = "asaasd asd sad asd ";

      expect(validateInputValue(mockedCorrectString)).toBeFalsy();
    });

    test("should return true if input string mor than 500 symbols", () => {
      const mockedTooLongString =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, atque aut consequuntur culpa cum dolores dolorum, eaque excepturi illum iusto mollitia natus quas reiciendis, rem vero. Accusamus ad adipisci architecto ea eaque et laudantium nobis quibusdam rem ullam. Expedita illo odio optio qui rem vero? Accusamus architecto assumenda doloremque dolores magni quaerat repellendus tempore veritatis. Culpa, odio, tempore! Delectus similique tenetur voluptas. Architecto aspernatur cumque incidunt nostrum optio. Ad amet assumenda cum doloribus eaque fugit, illo ipsa nemo qui quod vel, voluptatem. Aperiam assumenda atque commodi dolorum ea, eaque est et, ex exercitationem expedita, fuga fugit harum hic inventore iste nesciunt odit quasi reprehenderit saepe similique sit sunt velit. Deleniti est iste nesciunt possimus praesentium temporibus voluptatem. Accusamus alias commodi doloremque esse explicabo inventore labore natus neque nihil, nostrum officia officiis, placeat quibusdam sequi sit vel voluptas? Facere incidunt ipsum molestias nam necessitatibus perspiciatis possimus voluptate. Ab adipisci aliquam aut autem commodi cum cumque et eveniet ex exercitationem expedita fuga id ipsam iste itaque labore laudantium maiores molestias, nemo nesciunt nihil non nulla pariatur, perspiciatis possimus praesentium, provident quas quibusdam quod repudiandae rerum sint ullam vitae. At consequatur necessitatibus nihil numquam? A aperiam cum dolorem eius eum exercitationem facilis in, itaque, iure iusto officia officiis provident quisquam soluta unde, veniam voluptatibus! Accusamus aperiam autem, delectus, ducimus eius enim est illo molestiae neque nobis nulla obcaecati perspiciatis placeat possimus quis quo ratione repudiandae sequi sunt tempore ullam vero voluptates! Provident, sequi, suscipit? Accusamus aliquam amet aspernatur assumenda consectetur deserunt doloribus enim eos eveniet ex explicabo fugiat fugit illum, incidunt iusto minus nam nemo neque nihil non obcaecati odit officiis perferendis placeat praesentium quae quas quos recusandae rem sapiente sed tenetur unde voluptate. Accusamus assumenda atque autem beatae blanditiis cum, debitis dolores eligendi ex id iste maxime modi mollitia nesciunt non officiis omnis optio perferendis quis quod, recusandae repudiandae rerum saepe sint sunt suscipit voluptatem. Aperiam blanditiis dolor est id inventore odit perferendis quae tempore. Cumque placeat, porro? Fugiat impedit iusto labore natus voluptatibus! Ad assumenda aut culpa deserunt dolor, error eum fugiat hic illo inventore itaque nemo neque quaerat reiciendis ullam. Ab ad aut autem consequuntur doloribus, ducimus earum ipsam laudantium molestias odit pariatur quo recusandae repellat sequi tenetur veniam voluptate. Adipisci asperiores aspernatur, at beatae commodi consequatur consequuntur cumque deleniti dolore eius error ex exercitationem facilis fuga fugit illum incidunt labore libero minima nam necessitatibus neque obcaecati ratione reiciendis rem repellat reprehenderit sunt tempora tempore vitae! A accusamus accusantium aliquam aliquid aspernatur autem consectetur consequuntur debitis dolor doloribus ducimus ea eius enim incidunt inventore itaque iure iusto nobis numquam odio pariatur perspiciatis porro quisquam reiciendis, rem sapiente soluta sunt temporibus ullam voluptatum! Asperiores esse impedit inventore porro saepe! Accusantium aliquid architecto blanditiis, consequatur delectus deleniti distinctio, dolore doloribus eius enim facilis fuga id, laborum laudantium minima minus modi mollitia necessitatibus nesciunt nobis nulla numquam odio officia perferendis placeat praesentium quae quas quis quisquam reiciendis sit tempora tempore temporibus tenetur veritatis vitae voluptates. Aut esse fugiat perferendis quaerat quam vero voluptas. Animi.";

      expect(validateInputValue(mockedTooLongString)).toBeTruthy();
    });

    test("should return empty string if value not a string", () => {
      const mockedNan = NaN;
      const mockedNull = null;

      expect(validateInputValue(mockedNan)).toBeTruthy();
      expect(validateInputValue(mockedNull)).toBeTruthy();
    });
  });
});
