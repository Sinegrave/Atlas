/* THIS IS DAUNTING!!!! */

/* POP-UP */
const threads = [];

const hermitCrab = document.getElementById("fullScreenVersion");

if (hermitCrab !== undefined && hermitCrab !== null){
    addEventListener("click", doThings);
}

function doThings() {
    console.log("Fear and loathing.");
} 

/**
 * Function to create a new entry.
 */

function NewThread (name, threadTitle, url, turn, comments) {
    this.name = name;
    this.threadTitle = threadTitle;
    this.url = url;
    this.turn = turn;
    this.comments = comments}

const newFullThread = {
    name: "",
    threadTitle: "",
    dateStarted: "",
    mostRecentReply: "",
    url: "",
    turn: "",
    totalComments: "",
    myComments: "",}


/* DREAMWIDTH */
/* Find a comment, any comment, and add a button that says 'add to Atlas'. */
    const bottomRow = document.getElementsByClassName("link reply first-item");
    const topLevel = document.getElementsByClassName("entry-readlink first-item");
    links();
    linksToo();

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
        while (m < topLevel.length){
            const sock = topLevel[m];
            if (sock !== undefined && sock !== null){
                sock.innerHTML += ")​    ​ ​    (";
                sock.appendChild(createNode(m));
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
            const textnode = document.createTextNode("Add to Atlas");
            node.appendChild(textnode);    
            return node; 
        }

        else {
            return node;
        }
        
    }

    /* Click on said comment and have a thing happen. */
    const boxes = document.querySelectorAll('.atlasLink');
    boxes.forEach(atlasLink => {
        atlasLink.addEventListener('click', function handleClick(event) {
            const name = journalName(this.id);
            const threadTitle = this.id;
            const url = threadLink(this.id);
            const turn = "0";
            const comments = commentCount(this.id);

            console.log (threadTitle);
        
            const a = new NewThread(name, threadTitle, url, turn, comments);

            /* Adds this thread to the array of threads. */
            threads.push(a); 

            console.log(name);
            console.log(threadTitle);
            console.log(url);
            console.log(threads);
        });
    });

    /* Obtain thread link. */
    function threadLink(x){
        const snail = document.getElementById("comment-" + x).getElementsByTagName("a");
        console.log(snail[3] + "");
        return snail[3] + "";
    }

    /* Obtain commment count */
    function commentCount(x){
        /* Find parent link. */
        var snail = document.getElementById("comment-" + x).getElementsByClassName("link threadroot");
        var butterfly = snail[0].getElementsByTagName("a")[0].baseURI + "";
        var xhttp = new XMLHttpRequest();
        let cat;
        let hat;
        

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                cat = xhttp.responseText;
                hat = cat.match(/<li class="link commentparent">/gi);
                console.log(hat.length);
                return hat.length;
            }
            else {
                return 0;
            }
            
        };

        xhttp.open("GET", butterfly, true);
        xhttp.send();
             
    }
            
    /* Obtain journal name. */
        function journalName(x){
        const snail = document.getElementById("comment-" + x).getElementsByTagName("a");
        const ghost = snail[2].innerText;
        return ghost;
    }