var myrow = document.getElementById('myrow'); 


fetch('https://dummyjson.com/users')
.then(r => r.json())
.then(r => {
    
    
    var users = r.users;
    
    console.log(users);

    users.forEach(user => {
        myrow.innerHTML += 
        `<div class="first col-md-4">
        <div class="card border-primary mb-3 text-center">
        <div class="card-header">FullName: ${user.firstName}${user.lastName}</div>
          <img src="${user.image}"></img>
          <div class="card-body">
          <h5 class="card-title">email: ${user.email}</h5>
          <p class="card-text">phone-number:${user.phone}</p>
          <p class="card-text">Address: ${user.address.city}</p>
          </div>
        </div>
        </div>`

    });
});




// for(i=0;i<users.length;i++){

// }

{/* <div class="col-md-4">
<div class="card border-primary mb-3 text-center" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-primary">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div> */}