// testing File!
export const gettingCorrectFolderDetails = (fullDocument, documentName) => {
  if (fullDocument.length === 0) {
    return "Folder not found";
  }
  for (let i = 0; i < fullDocument.length; i++) {
    // to loop over the nested object
    const result = searchFolder(fullDocument[i], documentName);
    if (result !== "Folder not found") {
      return result;
    }
  }
  return "Folder not found";
};

const searchFolder = (folder, documentName) => {
  if (folder.name === documentName) {
    return folder.files;
  } else if (folder.files) {
    for (let i = 0; i < folder.files.length; i++) {
      // carry's on calling back to go deeper in the loop
      const result = searchFolder(folder.files[i], documentName);
      if (result !== "Folder not found") {
        return result;
      }
    }
  }

  return "Folder not found";
};
