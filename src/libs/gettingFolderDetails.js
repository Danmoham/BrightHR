const gettingCorrectFolderDetails = (fullDocument, documentName) => {
  console.log(fullDocument);
  if (fullDocument.length === 0) {
    return "Folder not found";
  }

  for (let i = 0; i < fullDocument.length; i++) {
    if (fullDocument[i].name === documentName) {
      return fullDocument[i].files;
    } else if (fullDocument[i].files) {
      // gets the return value of the recursive call
      const result = gettingCorrectFolderDetails(fullDocument[i].files, documentName);
      if (result) {
        return result;
      }
    }
  }
};
module.exports = { gettingCorrectFolderDetails };
