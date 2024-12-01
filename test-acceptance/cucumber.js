module.exports = {
  default: {
    paths: ["test-acceptance/features/**/*.feature"],
    requireModule: ["ts-node/register"],
    require: ["test-acceptance/step-definitions/**/*.ts"],
    // Use tags if you want to run a specific set of tests
    // tags: "@all",
    format: ["@cucumber/pretty-formatter", "html:reports/cucumber-report.html"],
  },
  smoketests: {
    paths: ["test-acceptance/features/**/*.feature"],
    requireModule: ["ts-node/register"],
    require: ["test-acceptance/step-definitions/**/*.ts"],
    // Use tags if you want to run a specific set of tests
    // tags: "@smoke",
    format: ["@cucumber/pretty-formatter", "html:reports/cucumber-report.html"],
  },
};
