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

function restyleIndexEntry(name){
    name = name.replace(/ (d6|d8|d10|One Free)/, "");
    const parts = name.trim().split(" ");
    if (parts.length < 2){
        return name;
    }

    const last = parts[parts.length-1];
    const first = parts.slice(0, parts.length-1).join(" ");
    return `${last}, ${first}`;
}

function restyleIndexEntries(records){
  for (const {anchor} of records){
    anchor.innerText = restyleIndexEntry(anchor.innerText);
  }
  
  console.log(records);
  records.sort((a, b) => (a.anchor.innerText <= b.anchor.innerText) ? -1 : +1);
  console.log(records);
}

window.addEventListener("load", function(){
    let toc = document.querySelector(".toc"),
        tablist = document.querySelector(".tablist"),
        abix = document.querySelector(".abix");
  
    MarpShims.autoScale();
    MarpShims.withTOC(toc, "h2,h3", (toc_records) => {
      MarpShims.withTOC(tablist, "h4", (tab_records) => {
        MarpShims.withTOC(abix, ".ability th", (ab_records) => {
          restyleIndexEntries(ab_records);
        });
      });
    });
  
    MarpShims.autoTheme();
    MarpShims.anchorHeadings("h1,h2,h3,h4,.ability th");

//     // table of contents
//     var i = 0;
//     
//     document.querySelectorAll("h2,h3").forEach(function(e){
//         const section = e.closest("section");
//         const page = section.getAttribute("data-marpit-pagination");
//         if (page){
//             const toc_line = document.createElement("p");
//             toc.appendChild(toc_line);
//             var entry = document.createElement("em");
//             if (e.nodeName === "H2"){
//                 entry = document.createElement("strong");
//                 toc_line.classList.add("chapter");
//             }

//             toc_line.appendChild(entry);

//             const entry_a = document.createElement("a");
//             entry.appendChild(entry_a);
//             entry_a.innerText = e.innerText;
//             entry_a.setAttribute("href", "#" + section.getAttribute("id"));

//             const page_no = document.createElement("span");
//             toc_line.appendChild(page_no);
//             page_no.classList.add("page_no");
//             page_no.innerText = page;

//             ++i;
//             if (i === 18){
//                 toc = document.getElementById("toc2");
//             } else if (i === 39){
//                 toc = document.getElementById("toc3");
//             }
//         }
//     });

//     // table listing
//     const tablist = document.getElementById("tablist");
//     document.querySelectorAll("h4").forEach(function(e){
//         const section = e.closest("section");
//         const page = section.getAttribute("data-marpit-pagination");
//         if (page){
//             const table_line = document.createElement("span");
//             tablist.appendChild(table_line);

//             const entry = document.createElement("span");
//             table_line.appendChild(entry);

//             const entry_a = document.createElement("a");
//             entry.appendChild(entry_a);
//             entry_a.innerText = e.innerText;
//             entry_a.setAttribute("href", "#" + section.getAttribute("id"));

//             const page_no = document.createElement("span");
//             page_no.classList.add("page_no");
//             table_line.appendChild(page_no);
//             table_line.appendChild(document.createElement("br"));
//             page_no.innerText = page;
//         }
//     });

//     // ability index
//     abix_entry_map = {};
//     abix_entry_keys = [];
//     document.querySelectorAll(".ability th").forEach(function(e){
//         const section = e.closest("section");
//         const page = section.getAttribute("data-marpit-pagination");
//         if (page){
//             const abix_line = document.createElement("span");
//             const entry = document.createElement("span");
//             abix_line.appendChild(entry);

//             const entry_a = document.createElement("a");
//             entry.appendChild(entry_a);
//             entry_a.innerText = restyleIndexEntry(e.innerText.replace(/ (d6|d8|d10|One Free)/, ""));
//             entry_a.setAttribute("href", "#" + section.getAttribute("id"));
            
//             const page_no = document.createElement("span");
//             page_no.classList.add("page_no");
//             abix_line.appendChild(page_no);
//             abix_line.appendChild(document.createElement("br"));
//             page_no.innerText = page;
//             abix_entry_map[entry.innerText] = abix_line;
//             abix_entry_keys.push(entry.innerText);
//         }
//     });

//     i = 0;
//     var abix = document.getElementById("abix");
//     abix_entry_keys.sort();
//     console.log(abix_entry_keys);
//     for (const key of abix_entry_keys){
//         abix.appendChild(abix_entry_map[key]);
//         ++i;
//         if (i === 53){
//             abix = document.getElementById("abix2");
//         }
//     }

    MarpShims.scrollToHash();
});
