let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let productList=document.querySelector('.box-container');

const searchbox=document.getElementById("search-data")

// start of navbar button
menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

let filterInput=document.getElementById("search-data");
filterInput.addEventListener('click',filterName)

function filterName(){
  const cl=document.getElementById("sales");
  cl.scrollIntoView({behavior:"smooth"})
}
filterInput.addEventListener('keyup',filterNames)

function filterNames(){
  const searchbox=document.getElementById("search-data").value.toUpperCase();
    const storeitems=document.getElementById("box-container")
  const product=document.querySelectorAll(".box")
  const pname=document.getElementsByTagName("h3")


    for(var i=0;i<pname.length;i++){
      let match=product[i].getElementsByTagName('h3')[0];

      if(match){
        let textvalue=match.textContent || match.innerHTML;

        if(textvalue.toUpperCase().indexOf(searchbox)>-1){
          product[i].style.display="";
        }else{
          product[i].style.display="none";
        }
      }
  }

}
//end of navbar
$(document).ready(()=>{
    $.getJSON('product.json', (data)=>{
        data.forEach((course)=>{
            var courseEl = '<div class="box">'+
            '<span class="price">'+ course.price + '</span>'+
                '<img src="' + course.img + '">'+
                '<h3>' + course.name + '</h3>'+
                '   <div class="stars">'+
                '<i class="fa fa-star"></i>'+
                '<i class="fa fa-star"></i>'+
                '<i class="fa fa-star"></i>'+
                '<i class="fa fa-star"></i>'+
                '<i class="fa-solid fa-star-half-stroke"></i>'+
                
            '</div>'+
                 '<a href="productDetails.html?id='+course.id+'" class="btn">'+course.view+ '</a>'+
                 '<a href="#" class="btn">'+course.buy+ '</a>'
            '</div>';
            $('.box-container').append(courseEl);
        });
    });
});