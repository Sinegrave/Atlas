/* THIS IS DAUNTING!!!! */

/**
 * 
 * 
 *  POP-UP SIDE
 * 
 * 
 *  */

const threads = [];

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
                    console.log("eggWhites");
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
                toggle("nameColumn");
                return;   
            case "threadTitleOption":
                console.log("brisket");
                return;
            case "dateOption":
               console.log("lunch");
               return;
            case "urlOption":
                console.log("cereal");
                return;
            case "turnOption":
                console.log("eggWhites");
                return;
            case "commentTotalOption":
                console.log("eggWhites");
                return;
            case "myCommentsOptions":
                console.log("cereal");
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
 */

function NewThread (name, threadTitle, url, turn, totalComments, myComments, date) {
    this.name = name;
    this.threadTitle = threadTitle;
    this.url = url;
    this.turn = turn;
    this.totalComments = totalComments
    this.myComments = myComments
    this.date = date
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
        const beer = window.location.href;
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
        atlasLink.addEventListener('click', function handleClick(event) {
            const name = getJournalName(this.id);
            const threadTitle = this.id;
            const url = getThreadLink(this.id);
            const turn = determineTurn();
            const totalComments = getTotalComments(this.id);
            const myComments = "0";
            const date = getDate(this.id);
        
            const a = new NewThread(name, threadTitle, url, turn, totalComments, myComments, date);

            /* Adds this thread to the array of threads. */
            threads.push(a); 
            console.log(threads);

            /* Stores the array in local storage. */
        });
    });
    }

    /* Obtain thread link. */
    function getThreadLink(x){
        const snail = document.getElementById("comment-" + x).getElementsByTagName("a");
        return snail[3] + "";
    }

    /*  Find parent link, return a block of text from the top-most thread.  */
    function goToFirstComment(x){
        var link;
        return new Promise((resolve) => {
            createRequest(getParent(x));
                function getParent(y){
                var snail = document.getElementById("comment-" + y).getElementsByClassName("link commentparent");
                var butterfly = snail[0].getElementsByTagName("a")[0];
                return butterfly;
            }
            
            function createRequest(x){
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", x, true);
                xhttp.responseType = "document";
                xhttp.send();
                xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                       var blockText = xhttp.response;
                       var id = blockText.getElementsByClassName("dwexpcomment")[0].id;
                       var breech = blockText.getElementById("comment-" + id).getElementsByClassName("link commentparent");
                       if ( breech[0] == undefined){
                          link = blockText;
                       }
                       else {
                          createRequest(getParent(id));
                       }
                    }
                };
            }

    setTimeout(() => {
          resolve(link);
        }, 2000);
    });
    }

    /* Obtain total comments. */
    async function getTotalComments(x){
        goToFirstComment(x);
        
        /** const apple = await goToFirstComment(x);
        var hat = apple.match(/<li class="link commentparent">/gi);
        console.log(hat.length);
        return hat.length; */
        return 0;
    }

    /** 
     * Tell the user whose turn it is.
     * If the most recent comment matches that off the journal makine the query, not their turn.
     *
     */

    function determineTurn(){
        var thisJournal = getJournalName;
        var otherJournal = "functionToGetLastCommentUsernameGoesHere"

        if (thisJournal != otherJournal){
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
    async function getDate(x){
        return 0;
    }