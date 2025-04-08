
/**
 * Function to create a new entry.
 */

const newThread = {
    Name: "",
    threadTitle: "",
    URL: "",
    Turn: "",
    Comments: "",}

const newFullThread = {
    Name: "",
    threadTitle: "",
    dateStarted: "",
    mostRecentReply: "",
    URL: "",
    Turn: "",
    totalComments: "",
    myComments: "",}
    
/**
 * Function to populate the entry with content from thread.
 */

/**
 * Function to add the entry to the list.
 */

/**
 * Function to check all current threads in the background.
 */

/** 
 * Function to open fullscreen. 
*/
function openFullscreen() {
    console.log("peanut");
    let createData = {
        type: "detached_panel",
        url: "fullscreen.js",
        width: 250,
        height: 100,
    };

    let creating = browser.windows.create(createData);
}