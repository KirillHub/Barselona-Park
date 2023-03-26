export const getImagesAndPaths = (length: number, path: string, extension: string) => {
  const imagesPath = `/assets/${path}`; //base path to folder
  const images = Array.from({ length }, (_, i) => {
    let imgName = i + 1;
    const fileName = `${imagesPath}/${imgName}.${extension}`;
    return {
      name: imgName,
      path: fileName,
    };
  });
  return images;
};
