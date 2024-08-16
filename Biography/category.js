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
const allIndicator = document.querySelectorAll('.indicator li');
const allContent = document.querySelectorAll('.content li');

allIndicator.forEach(item=> {
  item.addEventListener('click', function () {
    const content = document.querySelector(this.dataset.target);

    allIndicator.forEach(i=> {
      i.classList.remove('active');
    })

    allContent.forEach(i=> {
      i.classList.remove('active');
    })

    content.classList.add('active');
    this.classList.add('active');
  })
})
class Accordion {
  constructor(el) {
    this.el = el;
    this.summary = el.querySelector('summary');
    this.content = el.querySelector('.faq-content');
    this.expandIcon = this.summary.querySelector('.expand-icon')
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.summary.addEventListener('click', (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();
    this.el.style.overflow = 'hidden';

    if (this.isClosing || !this.el.open) {
      this.open();
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;

    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }
    
    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'ease-out'
    });

    this.animation.onfinish = () => {
      this.expandIcon.setAttribute('src', 'images/plus.svg');
      return this.onAnimationFinish(false);
    }
    this.animation.oncancel = () => {
      this.expandIcon.setAttribute('src', 'images/plus.svg');
      return this.isClosing = false;
    }
  }

  open() {
    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;

    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + 
                         this.content.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }
    
    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 350,
      easing: 'ease-out'
    });

    this.animation.onfinish = () => {
      this.expandIcon.setAttribute(
          'src',
          'images/minus.svg'
      );
      return this.onAnimationFinish(true);
    }
    this.animation.oncancel = () => {
      this.expandIcon.setAttribute(
          'src',
          'images/minus.svg'
      );
      return this.isExpanding = false;
    }
  }

  onAnimationFinish(open) {
    this.el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = this.el.style.overflow = '';
  }
}

document.querySelectorAll('details').forEach((el) => {
  new Accordion(el);
});

const tabs = document.querySelectorAll('.tab-btn');
const allContenttabs = document.querySelectorAll('.container-1');

  tabs.forEach((tab,index)=> {
    tab.addEventListener('click', () => {
       tabs.forEach(tab=>(tab.classList.remove('active')))
       tab.classList.add('active');


       allContenttabs.forEach(content=>(content.classList.remove('active')));
       allContenttabs[index].classList.add('active');
    })
  })
  const allIndicator1 = document.querySelectorAll('.indicator-1 li');
  const allContent1 = document.querySelectorAll('.content-1 li');
  
  allIndicator1.forEach(item=> {
    item.addEventListener('click', function () {
      const content1 = document.querySelector(this.dataset.target);
  
      allIndicator1.forEach(i=> {
        i.classList.remove('active');
      })
  
      allContent1.forEach(i=> {
        i.classList.remove('active');
      })
  
      content1.classList.add('active');
      this.classList.add('active');
    })
  })



  const allIndicator2 = document.querySelectorAll('.indicator-2 li');
  const allContent2 = document.querySelectorAll('.content-2 li');
  
  allIndicator2.forEach(item=> {
    item.addEventListener('click', function () {
      const content2 = document.querySelector(this.dataset.target);
  
      allIndicator2.forEach(i=> {
        i.classList.remove('active');
      })
  
      allContent2.forEach(i=> {
        i.classList.remove('active');
      })
  
      content2.classList.add('active');
      this.classList.add('active');
    })
  })
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