function extract(path) {
  let directories = path.split("\\");
  let lastPath = directories.pop();

  let lastComa = lastPath.lastIndexOf(".");
  let fileName = lastPath.substring(0, lastComa);
  let extencion = lastPath.substring(lastComa + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extencion}`);
}
extract("C:\\Internal\\training-internal\\Template.pptx");
