const formEl=document.querySelector('form')
const Inpfield=document.getElementById('input-text')
const searchResults=document.querySelector('.search-results')
const accessKey="BzMLPvOMvuOQMVdIBk0xWMPNYX75U8iafur8WxdxQ3w";
const show=document.querySelector('.show-more')

const theme=document.querySelector(".theme")


// let inputdata=""
let page=1

async function imgSearch(){
    // inputdata=Inpfield.value
    const url=`https://api.unsplash.com/search/photos?pages=${page}&query=${Inpfield.value}&client_id=${accessKey}`

    const response=await fetch(url)
    const data=await response.json()  

    const results=data.results

    if(page===1)
    searchResults.innerHTML=""

    results.map((result)=>{
        const wraper=document.createElement('div')
        wraper.classList.add("search-result")
        const image=document.createElement("img")
        image.src=result.urls.small
        image.alt=result.alt_description
        const link=document.createElement("a")
        link.href=result.links.html 
        link.target="_blank"
        link.textContent=result.alt_description

        wraper.appendChild(image)
        wraper.appendChild(link)
        searchResults.appendChild(wraper)
    });
    page++;
    if(page>1){
          show.style.display="block"
    }


}

formEl.addEventListener("click",(e)=>{
    e.preventDefault()
    page=1;
    imgSearch()
})

show.addEventListener("click",()=>{

    imgSearch()
})

theme.addEventListener("click",()=>{
    if(body.style.backgroundColor==="white"){
    body.style.backgroundColor="black"
        theme.style.backgroundColor="white"
    
    }
else{
body.style.backgroundColor="white"
    theme.style.backgroundColor="yellow"

}
})
