/* THIS IS DAUNTING!!!! */

/**
 * 
 * 
 *  POP-UP SIDE
 * 
 * 
 *  */

const threads = [];

/**
 * 
 * Put the threads in the tracker.
 * 
 */


/* HOLY SHIT. */

document.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
        const bee = e.target.id;
        buttonToFunction(bee);

        var elements = document.getElementsByClassName("removeThread");
            for (var i = 0; i < elements.length; i++) {
                console.log ('Chicken Jockey');
                console.log(this.id);
                elements[i].onclick(nukeThis(this.threadTitle));
            }

        function buttonToFunction(x){
            switch (x) {
                case "refreshAtlas":
                    update();
                    return;
                case "manualAdd":
                   console.log("lunch");
                   return;
                case "characterEdits":
                    console.log("cereal");
                    return;
                case "atlasOptions":
                    toggle("atlasOptionsBar");
                    return;
                case "fullScreenVersion":
                    window.open("/fullscreen.html", "_blank", "width=800,height=800,scrollbars=no");
                    return;
                case "learnMorePage":
                    window.open("/learnmore.html", "_blank", "width=500,height=500,scrollbars=no");
                    return;
                case "nuke":
                    nukeThreads();
                    return; 
            }
        }
    }

    if (e.target.tagName == "INPUT") {
        const bush = e.target.id;
        columnToggle(bush);
        function columnToggle(x){
        switch (x) {
            case "charaNameOptions":
                toggle("charaName");
                return;   
            case "threadTitleOption":
                toggle("threadDescr");
                return;
            case "dateOption":
                toggle("dateStarted");
               return;
            case "urlOption":
                toggle("URL");
                return;
            case "turnOption":
                toggle("turnCounter");
                return;
            case "commentTotalOption":
                toggle("commentsTotal");
                return;
            case "myCommentsOptions":
                toggle("myComments");
                return;     
        }
    }
}

});

/**
 * Function to check for updates.
 */
async function update (){
    var updateText = document.getElementById("lastUpdated");
    var d = new Date();
    updateText.style.color = "#aaa";
    await updateThreads();
    updateText.innerHTML = "Last Updated: " + d; 
}

/**
 * Function to add a new thread via a link.
 */
function quickAdd(){

}

/**
 * Function to edit character name/color.
 */
function edit(){

}


/**
 * Function to open the options panel.
 */
function toggle(z){
    var x = document.getElementById(z);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/**
 *  Function for the fullscreen panel.
 */


/**
 * Function to create a new entry.
 * Has ten parameters. 
 */

function NewThread (name, threadTitle, url, turn, totalComments, myComments, date, commName, allPlayers, description, altName, charColor) {
    this.name = name;
    this.threadTitle = threadTitle;
    this.url = url;
    this.turn = turn;
    this.totalComments = totalComments
    this.myComments = myComments
    this.date = date
    this.commName = commName;
    this.allPlayers = allPlayers;
    this.description = description;
    this.altName = altName;
    this.charColor = charColor;
}


/**
 * 
 * 
 * DREAMWIDTH SIDE 
 * 
 * 
 * */

/* Find a comment, any comment, and add a button that says 'add to tracker'. */
    const comment = document.getElementsByClassName("comment");
    const bottomRow = document.getElementsByClassName("link reply first-item");
    const threadLink = document.getElementsByClassName("link commentpermalink");

    const topLevel = document.getElementsByClassName("entry-readlink first-item");
    links();
    linksToo();
    addThread();

    function links(){
        let j = 0;
        while (j < comment.length){
                const shoe = bottomRow[j];
                if (shoe !== undefined && shoe !== null){
                    shoe.innerHTML += ")​    ​ ​    (";
                    if (threadLink[j] != undefined){ 
                        var brisket = threadLink[j].getElementsByTagName("a")[0].href;
                        var pickles = brisket.slice(-12);
                        shoe.appendChild(createNode(pickles));
            }
        }
            j = j + 1; }
    }

    function linksToo(){
        let m = 0;
        while (m <= topLevel.length){
            const sock = topLevel[m];
            if (sock !== undefined && sock !== null){
                sock.innerHTML += ")​    ​ ​    (";
                sock.appendChild(createBigNode(m));
            }
            m++;
        }
    }
    
    function createNode(x){
        const node = document.createElement("a");
        const loading = document.createElement("span");
        const done = document.createElement("span");
        const classy = "atlasLink";
        if (x !== undefined && x !== null){
            node.setAttribute("id", x);
            node.setAttribute("class", classy);

            const textnode = document.createTextNode("Add to Tracker");    

            loading.setAttribute("class", "loadingClass");
            loading.style.display = "none";
            done.setAttribute("class", "doneClass");
            done.style.display = "none";

            const loadingInnerText = document.createTextNode('Loading...');
            const doneInnerText = document.createTextNode('All done!');

            loading.appendChild(loadingInnerText);
            done.appendChild(doneInnerText);


            node.appendChild(textnode);
            node.appendChild(loading);
            node.appendChild(done);
            return node; 
        }

        else {
            return node;
        }
    }

    function createBigNode(x){
        const node = document.createElement("a");
        const classy = "topLink";
        if (x !== undefined && x !== null){
            node.setAttribute("id", x);
            node.setAttribute("class", classy);
            const textnode = document.createTextNode("Add to Tracker");
            node.appendChild(textnode);    
            return node; 
        }

        else {
            return node;
        }
    }


    /**
     * DEEP BREATH.
     * 
     *  One row div.
     *  Ten divs for the ten elements.
     *  Three are hidden.
     *  Appends to place the data within the elements.
     *  Div classes.
     * 
     * 
     */

    let threadHub = document.querySelector('.threadHub');
    
    function addToPopUp(x){
        var threadRow = document.createElement('div');

        var nameButton = document.createElement('div');
        var titleHidden = document.createElement('div');
        var urlButton = document.createElement('div');
        var turnButton = document.createElement('div');
        var totalCommentsButton = document.createElement('div');
        var myCommentsButton = document.createElement('div');
        var dateButton = document.createElement('div');
        var descriptionButton = document.createElement('span');
        var altNameHidden = document.createElement('div');
        var charColorHidden = document.createElement('div');
        var linkOut = document.createElement('a');

        var removeThread = document.createElement('div');
        var removeButton = document.createElement('button');
        

        threadRow.setAttribute('class','threadRow');
        threadRow.setAttribute('id', x.threadTitle);
        nameButton.setAttribute('class','popName');
        titleHidden.setAttribute('class','popTitle');
        urlButton.setAttribute('class','popURL');
        turnButton.setAttribute('class','popTurn');
        totalCommentsButton.setAttribute('class','popTotal');
        myCommentsButton.setAttribute('class','popMyComments');
        dateButton.setAttribute('class','popDate');
        descriptionButton.setAttribute('class','popDescription');
        altNameHidden.setAttribute('class','popAlt');
        removeButton.setAttribute('class','removeThread');
        removeButton.setAttribute('id', x.threadTitle);
        removeThread.setAttribute('id', x.threadTitle);

        

        nameButton.innerText = x.name;
        if (x.charColor == "") {
            nameButton.style.backgroundColor = '#f5f5f5';

        }
        else {
            nameButton.style.backgroundColor = x.charColor;
        }

        if (x.turn == "Their turn.") {
            turnButton.style.backgroundColor = '#f3decd';

        }
        else {
            turnButton.style.backgroundColor = '#e1f0c9';
        }

        if (x.description == "") {
            descriptionButton.innerText = "Some details here";

        }
        else {
            descriptionButton.innerText  = x.description;
        }

        titleHidden.innerText = x.threadTitle;
        urlButton.innerText = descriptionButton.innerText + " @ " + x.commName + " with " + x.allPlayers;
        turnButton.innerText = x.turn;
        totalCommentsButton.innerText = x.totalComments;
        myCommentsButton.innerText = x.myComments;
        dateButton.innerText = x.date;
           
        altNameHidden.innerText = x.altName;
        charColorHidden.innerText = x.charColor;
        removeButton.innerText = '🗑️';

        urlButton.appendChild(linkOut);

        removeThread.appendChild(removeButton);
        

        threadRow.appendChild(nameButton);
        threadRow.appendChild(titleHidden);
        threadRow.appendChild(urlButton);
        threadRow.appendChild(turnButton);
        threadRow.appendChild(totalCommentsButton);
        threadRow.appendChild(myCommentsButton);
        threadRow.appendChild(dateButton);
        threadRow.appendChild(altNameHidden);
        threadRow.appendChild(charColorHidden);
        threadRow.appendChild(removeThread);

        threadHub.appendChild(threadRow);
    }
    /**
     * 
     * Check for changes in the current list of threads.
     * 
     */
    async function updateThreads(){
        var gettingAllThreads = browser.storage.local.get(null);
        gettingAllThreads.then(async (results) => {
            let threadsList = Object.keys(results);
            console.log(threadsList);
            /* For every item in the array, display. */
            for (let individualThread of threadsList) {
                let threadContents = results[individualThread];
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", threadContents.url, true);
                xhttp.responseType = "document";
                xhttp.onload = function(){
                    var blockText = xhttp.response;
                    console.log(getTotalComments(blockText));
                    }
                xhttp.send();
                }
            });
        }


     /**
     * 
     * Show currently saved threads from past sessions.
     * 
     */ 

     getThreads();
     function getThreads (){
        var gettingAllThreads = browser.storage.local.get(null);
        gettingAllThreads.then((results) => {
            let threadsList = Object.keys(results);
            console.log(threadsList);
            /* For every item in the array, display. */
            for (let individualThread of threadsList) {
                let threadContents = results[individualThread];
                addToPopUp(threadContents);
        }}
    
    )}

    /** 
     * 
     * Add a new thread to local storage.
     */

    function storeThread(x, y) {
        let storeNewThread = browser.storage.local.set({ [x] : y });
        storeNewThread.then(() => {
            getThreads();
        });

    }

    /** 
     * 
     * Delete all threads. (Mostly for testing purposes.)
     * 
     */

    function nukeThreads() {
        let deleteAllThreads = browser.storage.local.clear();
        deleteAllThreads.then(() => {
            getThreads();
        });
    }

    /** 
     * 
     * Delete this thread.
     * 
     */

    function nukeThis(x) {
        let deleteThread = browser.storage.local.remove(x);
        console.log('The nuke has been deployed,')
        console.log(this.threadTitle)
        deleteThread.then(() => {
            getThreads();
        });

    }

    function addLoader(x){
        var neef = document.getElementById("comment-" + x).getElementsByClassName('atlasLink');
        var burn = neef.getElementsByClassName("loadingClass")[0];
        console.log(burn);
    }

    /** 
     * 
     *  The meat and potatoes! 
     * 
     *  Click on said comment and have a thing happen. 
     *  getTotalComments() and getDateStarted() have a delay to them. 
     * 
     * 
     * */
    
    function addThread() {
        const boxes = document.querySelectorAll('.atlasLink');
        boxes.forEach(atlasLink => {
            atlasLink.addEventListener('click', async function handleClick(event) {
            addLoader(this.id);
            const topLevel = await goToFirstComment(this.id); // Document/XML version of the top-level

            const name = getJournalName(this.id);
            const threadTitle = getThreadTitle(topLevel); 
            const url = getTopLevelLink(topLevel); 
            const turn = determineTurn(topLevel);
            const totalComments = getTotalComments(topLevel);
            const myComments = getMyComments(topLevel, this.id);
            const date = getDate(topLevel);
            const commName = getCommName(topLevel);
            const allPlayers = getAllPlayers(topLevel, name);
            const description = "";
            const altName = "";
            const charColor = "";
        
            const a = new NewThread(name, threadTitle, url, turn, totalComments, myComments, date, commName, allPlayers, description, altName, charColor);

            /* Adds this thread to the array of threads. */
            threads.push(a); 
            console.log(a);

            /* Stores the array in local storage. */
            storeThread(threadTitle, a);  
        });
    });
    }

      /*  Find parent link, return a block of text from the top-most thread.  */
      async function goToFirstComment(x){
        var link;
        var butterfly = [];
        console.log(x);
        return new Promise((resolve) => {
            createRequest(getParent(x, document));
                function getParent(x, z){
                    var snail = z.getElementById("comment-" + x).getElementsByClassName("link commentparent");
                    console.log(snail);

                    if (snail[0] == undefined){
                       var grub = z.getElementById("comment-" + x).getElementsByClassName("commentpermalink")[0];


                       console.log(z.getElementById("comment-" + x));
                       console.log(z.getElementById("comment-" + x).getElementsByClassName("commentpermalink")[0]);
                       var beast =  grub.getElementsByTagName("a")[0];
                       butterfly[0] = beast.href;
                       butterfly[1] = x;
                       console.log(butterfly);
                    }
                    else if (snail[0] != undefined)  {
                        butterfly[0] = snail[0].getElementsByTagName("a")[0];
                        
                    }
                return butterfly;
            }

            
            function createRequest(x){
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", x[0], true);
                xhttp.responseType = "document";
                xhttp.onload = function(){
                    var blockText = xhttp.response;
                       var id = blockText.getElementsByClassName("dwexpcomment")[0].id;
                       var breech = blockText.getElementById("comment-" + id).getElementsByClassName("link commentparent");
                       if ( breech[0] == undefined){
                          link = blockText;
                          console.log(link);
                          resolve(link);
                       }
                       else {
                          createRequest(getParent(id, blockText));
                       }
                }
                xhttp.send();
            }
    });
    }


    /* Obtain thread link. */
    function getThreadTitle(x){
        var id = x.getElementsByClassName("dwexpcomment")[0].id;
        return id;
    }

    function getTopLevelLink (x){
        var site = x.getElementsByClassName("commentpermalink")[0].getElementsByTagName("a")[0];
        var top = site.baseURI;
        return top;
    }

    /* Obtain total comments. */
    function getTotalComments(x){
        var boomer = x.getElementsByClassName("comment");
        return boomer.length;
    }

    /* Obtain comments made by user. */
    function getMyComments(x, y){
        var boomer = x.getElementsByClassName("ljuser");
        var jeans = -1;
        var myJournal = getJournalName(y);
        for (var i = 0; i < boomer.length; i++){
            if (boomer[i].innerText == myJournal){
                jeans = jeans + 1;
            }
        }
        return jeans;
    }

    /**
     * Tell the user whose turn it is.
     * If the most recent comment matches that off the journal makine the query, not their turn.
     */

    function determineTurn(x){
        var boomer = x.getElementsByClassName("ljuser");
        var myJournal = boomer[boomer.length-1].innerText;
        var otherJournal = boomer[boomer.length-2].innerText;
        if (otherJournal == myJournal){
            return "Their turn."
        }
        else {
            return "Your turn!"
        }
    }
     
    /* Obtain journal name. */
    function getJournalName(x){
        const snail = document.getElementById("comment-" + x).getElementsByTagName("a");
        const ghost = snail[2].innerText;
        return ghost;
    }

    /* Obtain date started. */
    function getDate(x){
        var boomer = x.getElementsByClassName("datetime")[1];
        var butt = boomer.innerText;
        var teeth = butt.slice(0, 12);
        return teeth;
    }

    /* Obtain name name of the community where the thread is occuring. */
    function getCommName(x){
        var bread = x.getElementsByClassName("ljuser")[1].innerText;
        console.log(bread);
        return bread;
    }

    /*  Obtain the journal name of the other player(s).
     * 
     * Should return an array of at least two usernames.
     */

    function getAllPlayers(x, y){
        var bread = x.getElementsByClassName("poster comment-poster");
        var names = [];
        let i = 0;
        while (i < bread.length){
            var noWhite = bread[i].innerText.trim();
            if (names.indexOf(noWhite) == -1 && noWhite != y){
                names += noWhite + ", ";
            }
            
            i++}
        var butt = names.slice(0, names.length-2);
        console.log(butt);
        return butt;
    }