export function addFiles(formData, files) {
  files.forEach((el) => formData.append("files[]", el.file, el.name));
}
