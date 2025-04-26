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
try {
    update();
    characterEdits();
} catch (error) {}

document.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
        const bee = e.target.id;
        buttonToFunction(bee);

        if (e.target.className == "removeThread") {
        var elements = document.getElementsByClassName("removeThread");
            for (var i = 0; i < elements.length; i++) {
                console.log(bee);
                nukeThis(bee); }}

        async function buttonToFunction(x){          

            switch (x) {
                case "refreshAtlas":
                    location.reload();
                    const myTimeout = setTimeout(goUpdate, 2000);
                    function goUpdate() {
                        update();
                    }
                    return;
                case "characterEdits":
                    toggle("characterHub");
                    return;
                case "fullScreenVersion":
                    window.open("/fullscreen.html", "_blank", "width=800,height=800,scrollbars=no");
                    return;
                case "learnMorePage":
                    window.open("/learnmore.html", "_blank", "width=800,height=550,scrollbars=no");
                    return;
                case "nuke":
                    nukeThreads();
                    location.reload();
                    return; 
                case "removeThread":
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
function update(){
    var updateText = document.getElementById("lastUpdated");
    var d = new Date();
    var short = d.toLocaleString('en-US');
    updateText.style.color = "#aaa";
    updateText.innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Last Updated: " + short;
        
}

/**
 * Function to edit character name/color.
 */
function characterEdits(){
    let bark = document.getElementById("characterHub");
    let journalList = [];
    var gettingAllThreads = browser.storage.local.get(null);
        gettingAllThreads.then((results) => {
            let threadsList = Object.keys(results);
            if (threadsList != ""){
                for (i = 0; threadsList.length > i; i++) {
                    let threadContents = results[threadsList[i]];
                    console.log(threadContents.name);

                    if (journalList.length = 0){
                        journalList[i] = threadContents.name + " BUTT";
                    }

                    else {
                        
                    }
                
            }
        }

        console.log(journalList);
    }
    );
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
    const entryTitle = document.getElementsByClassName("entry-title");
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
                        let index = brisket.lastIndexOf("c");
                        var pickles = brisket.slice(index - brisket.length);
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
        const text = document.createElement("span");
        const loading = document.createElement("span");
        const done = document.createElement("span");
        const classy = "atlasLink";
        if (x !== undefined && x !== null){
            node.setAttribute("id", x);
            node.setAttribute("class", classy);

            text.innerText = "Add to Tracker";
            text.setAttribute("class", "text");    
            loading.setAttribute("class", "loader");
            loading.style.display = "none";

            /*  Let's build a circle. */
            loading.style.width = "20px";
            loading.style.height = "20px";
            loading.style.borderWidth = "5px";
            loading.style.borderColor = "#FFF";
            loading.style.borderStyle = "solid";
            loading.style.borderBottomColor = "#afeeee";
            loading.style.borderRadius = "50%";
            loading.style.display = "none";
            loading.style.boxSizing = "border-box";
            loading.style.animation = "rotation 1s linear infinite";


            done.setAttribute("class", "done");
            done.innerHTML = "✔️";
            done.style.display = "none";


            node.appendChild(text);
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
        const text = document.createElement("span");
        const loading = document.createElement("span");
        const done = document.createElement("span");
        const classy = "topLink";
        var butter = entryTitle[0].getElementsByTagName("a");
        var nut = butter[0].href;
        console.log(nut);
        if (x !== undefined && x !== null){
            node.setAttribute("id", nut);
            node.setAttribute("class", classy);

            text.innerText = "Add to Tracker";
            text.setAttribute("class", "text");    
            loading.setAttribute("class", "loader");
            loading.style.display = "none";

            /*  Let's build a circle. */
            loading.style.width = "20px";
            loading.style.height = "20px";
            loading.style.borderWidth = "5px";
            loading.style.borderColor = "#000";
            loading.style.borderStyle = "solid";
            loading.style.borderBottomColor = "#f34b67";
            loading.style.borderRadius = "50%";
            loading.style.display = "none";
            loading.style.boxSizing = "border-box";
            loading.style.animation = "rotation 1s linear infinite";


            done.setAttribute("class", "done");
            done.innerHTML = "✔️";
            done.style.display = "none";


            node.appendChild(text);
            node.appendChild(loading);
            node.appendChild(done);
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
        var playerNames = document.createElement('span');

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

        removeThread.setAttribute('class','removeThread');
        removeThread.setAttribute('id', x.threadTitle);
        removeButton.setAttribute('id', x.threadTitle);
        removeButton.setAttribute('class','removeThread')

        

        nameButton.innerText = x.name;
        if (x.charColor == "") {
            nameButton.style.backgroundColor = '#f5f5f5';

        }
        else {
            nameButton.style.backgroundColor = x.charColor;
        }

        if (x.turn == "Their turn.") {
            turnButton.style.backgroundColor = '#ffd9df';

        }
        else {
            turnButton.style.backgroundColor = '#CDFF82';
        }

        if (x.description == "") {
            descriptionButton.innerText = "Some details here";

        }
        else {
            descriptionButton.innerText  = x.description;
        }

        titleHidden.innerText = x.threadTitle;
        urlButton.innerText = descriptionButton.innerText + " @ ";
        turnButton.innerText = x.turn;
        totalCommentsButton.innerText = x.totalComments;
        myCommentsButton.innerText = x.myComments;
        dateButton.innerText = x.date;

        linkOut.innerText = x.commName + " ";
        linkOut.href = x.url;

        linkOut.style.textDecoration = "none";
        linkOut.style.fontStyle = "italic";
        linkOut.style.padding = "2px";
        linkOut.style.color = "black";
        linkOut.style.backgroundColor ="rgb(241, 255, 137)";
        linkOut.style.borderRadius = "2px";

        playerNames.innerText = " with " + x.allPlayers;
           
        altNameHidden.innerText = x.altName;
        charColorHidden.innerText = x.charColor;
        removeButton.innerText = '🗑️';
        removeButton.style.border = 'none';

        urlButton.appendChild(linkOut);
        urlButton.appendChild(playerNames);

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
        console.log('The nuke has been deployed,');
        console.log(x);
        let deleteThread = browser.storage.local.remove(x);
        deleteThread.then(() => {
            getThreads();
            location.reload();
        });

    }

    function addLoader(x){
       var color = document.getElementById(x);
       var sound = color.getElementsByClassName("atlasLink")[0];
       var movie = sound.getElementsByClassName("loader")[0];
       var film = sound.getElementsByClassName("text")[0];
       movie.style.display = "inline-block";
       film.style.display = "none";

       movie.animate([
        // key frames
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
      ], {
        // sync options
        duration: 1000,
        iterations: Infinity
      });
    }

    function removeLoader(x){
        var color = document.getElementById(x);
        var sound = color.getElementsByClassName("atlasLink")[0];
        var movie = sound.getElementsByClassName("loader")[0];
        var film = sound.getElementsByClassName("done")[0];
        movie.style.display = "none";
        film.style.display = "inline-block";
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
            const turn = determineTurn(topLevel, name);
            const totalComments = getTotalComments(topLevel);
            const myComments = getMyComments(topLevel, name);
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

            /* Refreshes the popbox. */
            try {
                update();
            } catch (error) {}

            removeLoader(this.id);
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
        for (var i = 0; i < boomer.length; i++){
            if (boomer[i].innerText == y){
                jeans = jeans + 1;
            }
        }
        return jeans;
    }

    /**
     * Tell the user whose turn it is.
     * If the most recent comment matches that off the journal makine the query, not their turn.
     */

    function determineTurn(x, y){
        var boomer = x.getElementsByClassName("ljuser");
        var myJournal = y;
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