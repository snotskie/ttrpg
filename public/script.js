function toggleModes(){
    document.querySelectorAll('section').forEach(
        (e) => e.classList.toggle('invert')
    );
}

function bwbeforeprint(){
    document.querySelectorAll('section').forEach(
        (e) => e.classList.add('bw')
    );
}

function bwafterprint(){
    document.querySelectorAll('section').forEach(
        (e) => e.classList.remove('bw')
    );
}

function bwprint(){
    window.addEventListener("beforeprint", bwbeforeprint);
    window.addEventListener("afterprint", bwafterprint);
    window.addEventListener("afterprint", function(){
        window.removeEventListener("beforeprint", bwbeforeprint);
        window.removeEventListener("afterprint", bwafterprint);
        window.removeEventListener("afterprint", this);
    });
    
    window.print();
}

function toggleGuides(){
    document.querySelectorAll('section.guide').forEach(
        (e) => e.closest("svg").classList.toggle('secret')
    );

    localStorage.setItem("view", (localStorage.getItem("view")==="GM")? "Player" : "GM");
}

function toggleAutoscale(){
    document.querySelectorAll('body > svg').forEach(
        (e) => e.classList.toggle('autoscale')
    );

    localStorage.setItem("zoom", (localStorage.getItem("zoom")==="manual")? "auto" : "manual");
}

function restyleIndexEntry(name){
    const parts = name.trim().split(" ");
    if (parts.length < 2){
        return name;
    }

    const last = parts[parts.length-1];
    const first = parts.slice(0, parts.length-1).join(" ");
    return `${last}, ${first}`;
}

window.addEventListener("load", function(){
    // match user preferred theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        toggleModes();
    }

    // hide guides
    if (localStorage.getItem("view") !== "GM"){
        toggleGuides();
        localStorage.setItem("view", "Player");
    } else {
        document.getElementById("guide-hider").checked = true;
        localStorage.setItem("view", "GM");
    }

    // autoscale or not
    if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)){ // always on mobile
        toggleAutoscale();
        localStorage.setItem("zoom", "auto");
        document.getElementById("autoscaler").closest("label").style.display = "none";
    } else if (localStorage.getItem("zoom") === "auto"){ // else only if user requested it
        toggleAutoscale();
        localStorage.setItem("zoom", "auto");
        document.getElementById("autoscaler").checked = true;
    } else { // else just leave default: manual
        localStorage.setItem("zoom", "manual");
    }

    // table of contents
    var i = 0;
    var toc = document.getElementById("toc");
    document.querySelectorAll("h2,h3").forEach(function(e){
        const section = e.closest("section");
        const page = section.getAttribute("data-marpit-pagination");
        if (page){
            const toc_line = document.createElement("p");
            toc.appendChild(toc_line);
            var entry = document.createElement("em");
            if (e.nodeName === "H2"){
                entry = document.createElement("strong");
                toc_line.classList.add("chapter");
            }

            toc_line.appendChild(entry);

            const entry_a = document.createElement("a");
            entry.appendChild(entry_a);
            entry_a.innerText = e.innerText;
            entry_a.setAttribute("href", "#" + section.getAttribute("id"));

            const page_no = document.createElement("span");
            toc_line.appendChild(page_no);
            page_no.classList.add("page_no");
            page_no.innerText = page;

            ++i;
            if (i === 18){
                toc = document.getElementById("toc2");
            } else if (i === 38){
                toc = document.getElementById("toc3");
            }
        }
    });

    // clickable headings
    document.querySelectorAll("h1,h2,h3,h4,.ability th").forEach(function(e){
        const section = e.closest("section");
        if (parseInt(section.getAttribute("id")) > 1){
            const html = e.innerHTML;
            e.innerHTML = "";
            const a = document.createElement("a");
            e.appendChild(a);
            a.innerHTML = html;
            a.setAttribute("href", "#" + section.getAttribute("id"));
        }
    });

    // table listing
    const tablist = document.getElementById("tablist");
    document.querySelectorAll("h4").forEach(function(e){
        const section = e.closest("section");
        const page = section.getAttribute("data-marpit-pagination");
        if (page){
            const table_line = document.createElement("span");
            tablist.appendChild(table_line);

            const entry = document.createElement("span");
            table_line.appendChild(entry);

            const entry_a = document.createElement("a");
            entry.appendChild(entry_a);
            entry_a.innerText = e.innerText;
            entry_a.setAttribute("href", "#" + section.getAttribute("id"));

            const page_no = document.createElement("span");
            page_no.classList.add("page_no");
            table_line.appendChild(page_no);
            table_line.appendChild(document.createElement("br"));
            page_no.innerText = page;
        }
    });

    // ability index
    abix_entry_map = {};
    abix_entry_keys = [];
    document.querySelectorAll(".ability th").forEach(function(e){
        const section = e.closest("section");
        const page = section.getAttribute("data-marpit-pagination");
        if (page){
            const abix_line = document.createElement("span");
            const entry = document.createElement("span");
            abix_line.appendChild(entry);

            const entry_a = document.createElement("a");
            entry.appendChild(entry_a);
            entry_a.innerText = restyleIndexEntry(e.innerText.replace(/ (d6|d8|d10|One Free)/, ""));
            entry_a.setAttribute("href", "#" + section.getAttribute("id"));
            
            const page_no = document.createElement("span");
            page_no.classList.add("page_no");
            abix_line.appendChild(page_no);
            abix_line.appendChild(document.createElement("br"));
            page_no.innerText = page;
            abix_entry_map[entry.innerText] = abix_line;
            abix_entry_keys.push(entry.innerText);
        }
    });

    i = 0;
    var abix = document.getElementById("abix");
    abix_entry_keys.sort();
    console.log(abix_entry_keys);
    for (const key of abix_entry_keys){
        abix.appendChild(abix_entry_map[key]);
        ++i;
        if (i === 53){
            abix = document.getElementById("abix2");
        }
    }
    
    // loading...
    document.body.classList.add("loaded");

    // force hashes to work after loading
    if (this.location.hash){
        document.getElementById(location.hash.substring(1)).scrollIntoView();
    }
});