import {gettingCorrectFolderDetails } from "../gettingFolderDetails";
describe("Creating a function so we can get the correct folder details based on click of the folder", () => {
  test("test an empty object returns nothing", () => {
    expect(gettingCorrectFolderDetails([])).toBe("Folder not found");
  });
  test("finding shallow copies of folders", () => {
    const Json = [
      {
        type: "pdf",
        name: "Employee Handbook",
        added: "2017-01-06",
      },
      {
        type: "folder",
        name: "Expenses",
        files: [
          {
            type: "doc",
            name: "Expenses claim form",
            added: "2017-05-02",
          },
          {
            type: "doc",
            name: "Fuel allowances",
            added: "2017-05-03",
          },
        ],
      },
    ];

    expect(gettingCorrectFolderDetails(Json, "Expenses")).toEqual([
      {
        type: "doc",
        name: "Expenses claim form",
        added: "2017-05-02",
      },
      {
        type: "doc",
        name: "Fuel allowances",
        added: "2017-05-03",
      },
    ]);
  });
  test("testing deeper copies of a folder", () => {
    const Json = [
      {
        type: "pdf",
        name: "Employee Handbook",
        added: "2017-01-06",
      },
      {
        type: "folder",
        name: "Expenses",
        files: [
          {
            type: "doc",
            name: "Expenses claim form",
            added: "2017-05-02",
          },
          {
            type: "folder",
            name: "Fuel",
            files: [
              {
                type: "doc",
                name: "Fuel allowances",
                added: "2017-05-03",
              },
            ],
          },
        ],
      },
    ];
    expect(gettingCorrectFolderDetails(Json, "Fuel")).toEqual([
      {
        type: "doc",
        name: "Fuel allowances",
        added: "2017-05-03",
      },
    ]);
  });
  test(`Testing folders that aren't the first folder`, () => {
    const Json = [
      {
        type: "folder",
        name: "Expenses",
        files: [
          {
            type: "doc",
            name: "Expenses claim form",
            added: "2017-05-02",
          },
          {
            type: "folder",
            name: "Fuel",
            files: [
              {
                type: "doc",
                name: "Fuel allowances",
                added: "2017-05-03",
              },
            ],
          },
        ],
      },
      {
        type: "folder",
        name: "myFolder",
        files: [
          {
            type: "doc",
            name: "my Allowance",
            added: "2017-05-03",
          },
        ],
      },
    ];
    expect(gettingCorrectFolderDetails(Json, "myFolder")).toEqual([
      {
        type: "doc",
        name: "my Allowance",
        added: "2017-05-03",
      },
    ]);
  });
  test("Making sure the initial Json is not mutated", () => {
    const Json1 = [
      {
        type: "doc",
        name: "my Allowance",
        added: "2017-05-03",
      },
    ];
    const Json2 = [
      {
        type: "doc",
        name: "my Allowance",
        added: "2017-05-03",
      },
    ];

    gettingCorrectFolderDetails(Json1);
    expect(Json1).toEqual(Json2);
  });
  test("To test if folder cannot be found", () => {
    const Json = [
      {
        type: "pdf",
        name: "Employee Handbook",
        added: "2017-01-06",
      },
      {
        type: "folder",
        name: "Expenses",
        files: [
          {
            type: "doc",
            name: "Expenses claim form",
            added: "2017-05-02",
          },
          {
            type: "doc",
            name: "Fuel allowances",
            added: "2017-05-03",
          },
        ],
      },
    ];

    expect(gettingCorrectFolderDetails(Json, "Fuel")).toBe(
      "Folder not found"
    );
  });
});
