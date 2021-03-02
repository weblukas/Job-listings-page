const filterItems = document.querySelectorAll(".skills__item");
const jobListing = document.querySelectorAll(".job-listing")

const items = Array.from(filterItems) 
const jobListingItems = Array.from(jobListing);

const selected = []

// function filtered(){
//   jobListingItems.filter((job)=>{
 
//   })
// }

 // nie wiem jak wybrać elementy które nie są w selected arr
  // żeby dodać klasę hide, klasa grey tylko pomocniczo nadana

items.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const currentItem = e.currentTarget.dataset.info
        console.log(selected);

        // mapping through data attr and pushig to arr 
        items.map((item)=>{
          if(item.dataset.info === currentItem){
            item.offsetParent.classList.add('grey')
            selected.push(item.offsetParent)
          }
  
        })
    })
    
})
