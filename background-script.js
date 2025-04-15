browser.commands.onCommand.addListener((command) => {
    if (command === "saveCurrentThread") {
      console.log("Toggling the feature!");
    }
  });