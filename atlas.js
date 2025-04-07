/* THIS IS DAUNTING!!!! */

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
        var snail = document.getElementById("comment-" + x).getElementsByClassName("link commentparent");
        var butterfly = snail[0].getElementsByTagName("a")[0] + "";
        console.log(butterfly);
        cheetah(butterfly);

        /* Find open parent link. */
        var xhr = new XMLHttpRequest();

        /* If a 'parent' link is present, reload. */
        var hasParent = true;
        
        function cheetah(x){
        xhr.open('GET', x, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4)  { 
                let cat = xhr.responseText;
                let hat = cat.match('Reply to this</a></li><li class="link thread"><a');
                console.log(hat.length);
                if (hat.length == 1) {
                    hasParent = false;
                }
                else {
                    hasParent = true;
                }

                if (hasParent = true){
                    var broom = cat.match(/<li class="link commentparent"></gi);
                    var sheep = broom[0];
                    cheetah(broom);
                }

                else {
                    let text = xhr.responseText;
                    let result = text.match(/commentparent/gi);
                    console.log(result.length);
                }
            }
        };
        xhr.send(null);  
    }
}
    
        /* Find total comment count. */
        

    /* Obtain turn. */
        function journalName(x){
        const snail = document.getElementById("comment-" + x).getElementsByTagName("a");
        console.log(snail[2] + "");
    }