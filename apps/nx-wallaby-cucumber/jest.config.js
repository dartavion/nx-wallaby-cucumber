module.exports = {
  name: "nx-wallaby-cucumber",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/nx-wallaby-cucumber/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
