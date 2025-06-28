
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });
 const checkLogin=()=>{
   let count=JSON.parse(localStorage.getItem("count"));
   console.log(count)
   if(count==null||count==0){
    location.href="login.html";
   }
   else{
    location.href="bookingdetails.html";
   }
 }
 const valLogin=()=>{
  let count=JSON.parse(localStorage.getItem("count"));
   console.log(count)
  let loginbtn=document.querySelector("#loginbtn");
   if(count==null||count==0){
    loginbtn.innerHTML=`<a href="login.html">Login</a>`;
   }
   else{
    loginbtn.innerHTML=`<a onclick='logoutUser()'>Logout</a>`;
   }
 }
 const logoutUser=()=>{
  localStorage.setItem("count",0);
  location.href="index.html";
 }