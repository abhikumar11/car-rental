const fetchData = async () => {
     let url = "http://localhost:3000/booking";
     let res = await fetch(url, { method: "GET" });
     let data = await res.json();
     dataShow(data);
}
const dataShow=(data)=>{

     let tbody = document.querySelector("#booking-table");
     tbody.innerHTML="";
     data.map((item) => {
          tbody.innerHTML += ` <tr>
                <td>${item.id}</td>
                <td>${item.pickuploc}</td>
                <td>${item.startdate}</td>
                <td>${item.enddate}</td>
                <td>${item.price}</td>
                <td>
                    <div class="action-btn">
                    <Button class="edit-btn" onclick="editForm('${item.id}')">Edit</Button>
                    <Button class="delete-btn" onclick="delRecord('${item.id}')">Delete</Button>
                    </div>
                </td>
             </tr>`;
     });
};
const delRecord = (id) => {
     let url = `http://localhost:3000/booking/${id}`;
     fetch(url, { method: "DELETE" });
     fetchData();
};
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

const editForm = async (id) => {
     let editfrm = document.querySelector(".edit-form");
     editfrm.style.display = "block";
     let url = `http://localhost:3000/booking/${id}`;
     const res = await fetch(url, { method: "GET" });
     const data = await res.json();
     editfrm.innerHTML = `
     <form id="bookingForm">
  <label for="pickup">Pickup Location</label>
  <input type="text" id="pickuploc" value="${data.pickuploc}" placeholder="Enter location" required />

  <label>Schedule</label>
  <div class="datetime-row">
    <input type="datetime-local" onchange="getPrice()" id="startdate" value="${data.startdate}" required />
    <span>to</span>
    <input type="datetime-local" onchange="getPrice()" id="enddate" value="${data.enddate}" required />
  </div>

  <label for="price">Total Price (₹60/hr)</label>
  <input type="text" id="totalprice" readonly placeholder="₹0" value="${data.price}" />

  <div class="form-actions">
    <button type="submit" onclick="return editDetail('${id}')">Save</button>
    <button type="button" onclick="return cancelEdit()">Cancel</button>
  </div>
</form>

    `;
};
const editDetail = (id) => {
     let url = `http://localhost:3000/booking/${id}`;
     let pickuploc = document.querySelector("#pickuploc").value;
     let startdate = document.querySelector("#startdate").value;
     let enddate = document.querySelector("#enddate").value;
     let totalprice = document.querySelector("#totalprice").value;

     fetch(url, {
          method: "PUT",
          headers: {
               "Content-type": "application/json",
          },
          body: JSON.stringify({
               pickuploc,
               startdate,
               enddate,
               price: totalprice,
          }),
     });
     document.querySelector(".edit-form").style.display="none";
     fetchData(); 
     return false;
};
const cancelEdit = () => {
  document.querySelector(".edit-form").style.display="none";
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
   if(count==null||count==0){
    loginbtn.innerHTML=`<a href="login.html">Login</a>`;
   }
   else{
    loginbtn.innerHTML=`<a onclick='logoutUser()'>Logout</a>`;
    fetchData();
   }
 }
 const searchData=async()=>{
     let searchinp=document.querySelector("#searchinp").value.toLowerCase();
     let url = "http://localhost:3000/booking";
     let res=await fetch(url);
     let data=await res.json();
     let filterdata=data.filter((item)=>{
          return item.pickuploc.toLowerCase().includes(searchinp);
     })
     dataShow(filterdata);
 }
 const logoutUser=()=>{
  localStorage.setItem("count",0);
  location.href="index.html";
 }