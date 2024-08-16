const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }
// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});
/***************************************************************************/
let searchForm = document.getElementById('search-form');
    let searchResultList = document.querySelectorAll('.result-items');
    let result = document.getElementById('search-results');
    let searchValue = result.getElementsByTagName("p");


    searchForm.addEventListener("keyup", function(){
        for(var i=0; i< searchValue.length; i++){
            
            console.log(searchForm.value);
           
            let value = searchResultList[i].getElementsByTagName('p')[0];
            
               let filterValue = value.textContent || value.innerHTML;

               if(filterValue.toUpperCase().indexOf(searchForm.value.toUpperCase()) > -1){
                searchResultList[i].style.display = "";
                searchResultList[i].style.visibility = "visible"
               }
               else{
                searchResultList[i].style.display="none";
                
               }
        }
    })
/***************************************************************************/