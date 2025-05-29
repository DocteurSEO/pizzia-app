const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    env : {
      baseUrl : "",
      user : "test@gmail.com",
      fakeuser:"gmail@gmail.com",
      inscription : "test2@gmail.com",
      mdp : "Test1234",
      mdp2: "Test12345",
      fakemdp:"test789",
    }

  },
});
