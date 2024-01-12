import { SortingData } from "../sortingData";

describe("Sorting Data by name and by date", () => {
  test("testing empty array returns empty array", () => {
    expect(SortingData([], "name", true)).toEqual([]);
  });
  test("test small test cases for name with ascending and descending", () => {
    expect(
      SortingData(
        [
          {
            type: "pdf",
            name: "Zoo City",
            added: "2017-01-06",
          },
          {
            type: "pdf",
            name: "Public Holiday policy",
            added: "2016-12-06",
          },
        ],
        "name",
        true
      )
    ).toEqual([
      {
        type: "pdf",
        name: "Public Holiday policy",
        added: "2016-12-06",
      },
      {
        type: "pdf",
        name: "Zoo City",
        added: "2017-01-06",
      },
    ]);
    expect(
      SortingData(
        [
          {
            type: "pdf",
            name: "Zoo City",
            added: "2017-01-06",
          },
          {
            type: "pdf",
            name: "Public Holiday policy",
            added: "2016-12-06",
          },
        ],
        "added",
        true
      )
    ).toEqual([
      {
        type: "pdf",
        name: "Public Holiday policy",
        added: "2016-12-06",
      },
      {
        type: "pdf",
        name: "Zoo City",
        added: "2017-01-06",
      },
    ]);
  });
  test("Sorting data descending", () => {
    expect(
      SortingData(
        [
          {
            type: "pdf",
            name: "Public Holiday policy",
            added: "2016-12-06",
          },
          {
            type: "pdf",
            name: "Zoo City",
            added: "2017-01-06",
          },
        ],
        "added",
        false
      )
    ).toEqual([
      {
        type: "pdf",
        name: "Zoo City",
        added: "2017-01-06",
      },
      {
        type: "pdf",
        name: "Public Holiday policy",
        added: "2016-12-06",
      },
    ]);
    expect(
      SortingData(
        [
          {
            type: "pdf",
            name: "Public Holiday policy",
            added: "2018-12-06",
          },
          {
            type: "pdf",
            name: "Zoo City",
            added: "2017-01-06",
          },
        ],
        "name",
        false
      )
    ).toEqual([
      {
        type: "pdf",
        name: "Zoo City",
        added: "2017-01-06",
      },
      {
        type: "pdf",
        name: "Public Holiday policy",
        added: "2018-12-06",
      },
    ]);
  });
  test("Testing with folders", () => {
    expect(
      SortingData(
        [
          {
            type: "pdf",
            name: "Public Holiday policy",
            added: "2018-12-06",
          },
          {
            type: "pdf",
            name: "Zoo City",
            added: "2017-01-06",
          },
          { type: "folder", name: "hello" },
        ],
        "name",
        false
      )
    ).toEqual([
      {
        type: "pdf",
        name: "Zoo City",
        added: "2017-01-06",
      },
      {
        type: "pdf",
        name: "Public Holiday policy",
        added: "2018-12-06",
      },
      { type: "folder", name: "hello" },
    ]);
  });
  test("testing mutations", () => {
    const Json1 = [
      {
        type: "pdf",
        name: "Zoo City",
        added: "2017-01-06",
      },
    ];
    const Json2 = [
      {
        type: "pdf",
        name: "Zoo City",
        added: "2017-01-06",
      },
    ];
    SortingData(Json1);
    expect(Json1).toEqual(Json2);
  });
});
