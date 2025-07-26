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
}

// function sortRecords(records){
//   records.sort((a, b) => (a.anchor.innerText <= b.anchor.innerText) ? -1 : +1);
// }

window.addEventListener("load", function(){
    let toc = document.querySelector(".toc"),
        tablist = document.querySelector(".tablist"),
        abix = document.querySelector(".abix");
  
    MarpShims.autoScale();
    MarpShims.withTOC(toc, "h2,h3", (toc_records) => {
      MarpShims.breakPages();
    });
      
    MarpShims.withTOC(tablist, "h4", (tab_records) => {
      MarpShims.breakPages();
    });
  
    MarpShims.withTOC(abix, ".ability th", (ab_records) => {
      restyleIndexEntries(ab_records);
      MarpShims.breakPages();
    });

    MarpShims.growPages();
  
    MarpShims.autoTheme();
    MarpShims.anchorHeadings("h1,h2,h3,h4,.ability th");

    MarpShims.scrollToHash();
});
