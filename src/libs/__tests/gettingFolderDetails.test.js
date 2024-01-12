const { json } = require("express");
const { gettingCorrectFolderDetails } = require("../gettingFolderDetails");

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

    expect(gettingCorrectFolderDetails(Json,"Expenses")).toEqual([  {
      type: "doc",
      name: "Expenses claim form",
      added: "2017-05-02",
    },
    {
      type: "doc",
      name: "Fuel allowances",
      added: "2017-05-03",
    },]);
  });
  test('testing deeper copies of a folder',() =>{
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
            files:  [{
              type: "doc",
              name: "Fuel allowances",
              added: "2017-05-03",
            }
            ],
          },
        ],
      },
    ];
    expect(gettingCorrectFolderDetails(Json,"Fuel")).toEqual([{
      type: "doc",
      name: "Fuel allowances",
      added: "2017-05-03",
    }]);
  })
  test('')
});
