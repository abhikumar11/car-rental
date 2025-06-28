const getPrice = () => {
     const start = new Date(document.querySelector("#startdate").value);
     const end = new Date(document.querySelector("#enddate").value);
     const totalprice = document.querySelector("#totalprice");

     if (start && end && end > start) {
          const ddiff = end - start;
          const hours = Math.ceil(ddiff / (1000 * 60 * 60));
          totalprice.value = hours * 60;
     } else {
          totalprice.value = 0;
     }
};
const insertBook=()=>{
        let url="http://localhost:3000/booking";
        let pickuploc=document.querySelector("#pickuploc").value;
        let startdate=document.querySelector("#startdate").value;
        let enddate=document.querySelector("#enddate").value;
        let totalprice=document.querySelector("#totalprice").value;
       
        fetch(url,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                pickuploc,
                startdate,
                enddate,
                price:totalprice,
            })
        })
        return false;
}
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
  let bookbtn=document.querySelector("#bookbtn");
   if(count==null||count==0){
    loginbtn.innerHTML=`<a href="login.html">Login</a>`;
    bookbtn.innerHTML=`<Button><a href="login.html">Login to Continue</a></Button>`
   }
   else{
    loginbtn.innerHTML=`<a onclick='logoutUser()'>Logout</a>`;
    bookbtn.innerHTML=`<button type="submit" onclick="return insertBook()">Confirm Booking</button>`
   }
 }
  const logoutUser=()=>{
  localStorage.setItem("count",0);
  location.href="index.html";
 }