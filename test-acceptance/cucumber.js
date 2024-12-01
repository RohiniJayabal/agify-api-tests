module.exports = {
  default: {
    paths: ["test-acceptance/features/**/*.feature"],
    requireModule: ["ts-node/register"],
    require: ["test-acceptance/step-definitions/**/*.ts"],
    // Use tags if you want to run a specific set of tests
    tags: "not @ignore",
    format: [
      "@cucumber/pretty-formatter",
      "html:reports/agify-cucumber-test-report.html",
    ],
  },
  smoketests: {
    paths: ["test-acceptance/features/**/*.feature"],
    requireModule: ["ts-node/register"],
    require: ["test-acceptance/step-definitions/**/*.ts"],
    // Use tags if you want to run a specific set of tests
    tags: "@smoke",
    format: [
      "@cucumber/pretty-formatter",
      "html:reports/agify-cucumber-smoke-test-report.html",
    ],
  },
  nfr: {
    paths: ["test-acceptance/features/**/*.feature"],
    requireModule: ["ts-node/register"],
    require: ["test-acceptance/step-definitions/**/*.ts"],
    // Use tags if you want to run a specific set of tests
    tags: "@nfr",
    format: [
      "@cucumber/pretty-formatter",
      "html:reports/agify-cucumber-nfr-test-report.html",
    ],
  },
};
