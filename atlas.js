/* THIS IS DAUNTING!!!! */
console.log("Fear and loathing.");

document.addEventListener("click", (e) => {
        document.body.style.border = "5px solid red";
        console.log("In Las Vegas.");
        }
); 

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
            threadLink(this.id);
            journalName(this.id);
            commentCount(this.id);
        });
    });

    /* Obtain thread link. */
    function threadLink(x){
        const snail = document.getElementById("comment-" + x).getElementsByTagName("a");
        console.log(snail[3] + "");
    }

    /* Obtain journal name. */
    function journalName(x){
        const snail = document.getElementById("comment-" + x).getElementsByTagName("a");
        console.log(snail[2] + "");
    }

    /* Obtain commment count */
    function commentCount(x){
        /* Find parent link. */
        var snail = document.getElementById("comment-" + x).getElementsByClassName("link threadroot");
        var butterfly = snail[0].getElementsByTagName("a")[0].baseURI + "";
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let cat = xhttp.responseText;
                let hat = cat.match(/<li class="link commentparent">/gi);
                console.log(hat.length);
            }
        };

        xhttp.open("GET", butterfly, true);
        xhttp.send();
    }
            
    /* Obtain turn. */
        function journalName(x){
        const snail = document.getElementById("comment-" + x).getElementsByTagName("a");
        console.log(snail[2] + "");
    }