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

        function buttonToFunction(x){
            switch (x) {
                case "refreshAtlas":
                    console.log("brisket");
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
function refresh(){

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

function NewThread (name, threadTitle, url, turn, totalComments, myComments, date, description, altName, charColor) {
    this.name = name;
    this.threadTitle = threadTitle;
    this.url = url;
    this.turn = turn;
    this.totalComments = totalComments
    this.myComments = myComments
    this.date = date
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
    const bottomRow = document.getElementsByClassName("link reply first-item");
    const topLevel = document.getElementsByClassName("entry-readlink first-item");
    links();
    linksToo();
    addThread();

    function links(){
        let j = 0;
        while (j < bottomRow.length){
            const shoe = bottomRow[j];
            if (shoe !== undefined && shoe !== null){
                shoe.innerHTML += ")​    ​ ​    (";
                shoe.appendChild(createNode(j));
            }
            j++;
        }
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
        const beer = document.getElementsByClassName("dwexpcomment")[x].id;
        const classy = "atlasLink";
        if (beer !== undefined && beer !== null){
            node.setAttribute("id", beer);
            node.setAttribute("class", classy);
            const textnode = document.createTextNode("Add to Tracker");
            node.appendChild(textnode);    
            return node; 
        }

        else {
            return node;
        }
    }

    function createBigNode(x){
        const node = document.createElement("a");
        const beer = document.getElementsByClassName("entry")[0].id;
        const classy = "topLink";
        if (beer !== undefined && beer !== null){
            node.setAttribute("id", beer);
            node.setAttribute("class", classy);
            const textnode = document.createTextNode("Add to Tracker");
            node.appendChild(textnode);    
            return node; 
        }

        else {
            return node;
        }
    }

    function createNewRow (x){
        var cheese = document.getElementById("charaName");
        const div = document.createElement('div');
        div.append(x.name);
        cheese.innerHTML ="hello";
        cheese.innerHTML += div;
    }

     /**
     * 
     * Show currently saved threads from past sessions.
     * 
     */ 

     function getThreads (){
        var gettingAllThreads = browser.storage.local.get(null);
        gettingAllThreads.then((results) => {
            let threadsList = Object.keys(results);
            /* For every item in the array, display. */
            for (let individualThread of threadsList) {
                let threadContents = results[individualThread];
                var newDiv = document.createElement("div");

                var lettuce = document.getElementById("dateStarted");
                var cheese = document.getElementById("charaName");
                var tomato = document.getElementById("threadDescr");
                var onion = document.getElementById("URL");
                var pepper = document.getElementById("turnCounter");
                var pickles = document.getElementById("commentsTotal");
                var oil = document.getElementById("myComments");

                
                cheese.innerHTML += '<div>' + threadContents.name+ '</div>';
                lettuce.innerHTML += '<div>' + threadContents.date + '</div>';
                onion.innerHTML += '<div>' + threadContents.url + '</div>';
                pepper.innerHTML += '<div>' + threadContents.turn + '</div>';
                pickles.innerHTML += '<div>' + threadContents.totalComments + '</div>';
                tomato.innerHTML += '<div>' + threadContents.description + '</div>';
                oil.innerHTML += '<div>' + threadContents.myComments + '</div>';

        }})}
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
            const topLevel = await goToFirstComment(this.id); // Document/XML version of the top-level

            const name = getJournalName(this.id);
            /* CHANGE THIS TO BE THE TOP-MOST THREAD ID */ 
            
            const threadTitle = this.id; 
            const url = getThreadLink(this.id);
            const turn = determineTurn(topLevel);
            const totalComments = getTotalComments(topLevel);
            const myComments = getMyComments(topLevel, this.id);
            const date = getDate(topLevel);
            const description = "";
            const altName = "";
            const charColor = "";
        
            const a = new NewThread(name, threadTitle, url, turn, totalComments, myComments, date, description, altName, charColor);

            /* Adds this thread to the array of threads. */
            threads.push(a); 

            /* Stores the array in local storage. */
            storeThread(threadTitle, a);  
        });
    });
    }

    /* Obtain thread link. */
    function getThreadLink(x){
        const snail = document.getElementById("comment-" + x).getElementsByTagName("a");
        return snail[3] + "";
    }

    /*  Find parent link, return a block of text from the top-most thread.  */
    async function goToFirstComment(x){
        var link;
        return new Promise((resolve) => {
            createRequest(getParent(x, document));
                function getParent(y, z){
                var snail = z.getElementById("comment-" + y).getElementsByClassName("link commentparent");
                var butterfly = snail[0].getElementsByTagName("a")[0];
                return butterfly;
            }
            
            function createRequest(x){
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", x, true);
                xhttp.responseType = "document";
                xhttp.onload = function(){
                    var blockText = xhttp.response;
                       var id = blockText.getElementsByClassName("dwexpcomment")[0].id;
                       var breech = blockText.getElementById("comment-" + id).getElementsByClassName("link commentparent");
                       if ( breech[0] == undefined){
                          link = blockText;
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

    /* Obtain total comments. */
    function getTotalComments(x){
        var boomer = x.getElementsByClassName("link commentparent");
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
     * 
     * Tell the user whose turn it is.
     * If the most recent comment matches that off the journal makine the query, not their turn.
     *
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
        var boomer = x.getElementsByClassName("datetime")
        return boomer[1].innerText;
    }