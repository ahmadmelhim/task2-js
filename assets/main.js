async function getPost(){

    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    
    
    const result = data.map(function(post){

        return `
        <div class='users'>
            <div class='user1'>
            <h2>${post.id}</h2>
            <hr>
            <h2>${post.name}</h2>
            <h2>${post.username}</h2>
            <h2>${post.email}</h2>
            </div>

            <div class='address'>
            <hr>
            <h2>${post.address.street}</h2>
            <h2>${post.address.suite}</h2>
            <h2>${post.address.city}</h2>
            <h2>${post.address.zipcode}</h2>
            </div>

            <div class='geo'>
            <hr>
            <h2>${post.address.geo.lat}</h2>
            <h2>${post.address.geo.lng}</h2>
            </div>

            <div class='user2'>
            <hr>
            <h2>${post.phone}</h2>
            <h2>${post.website}</h2>
            </div>

            <div class='company'>
            <hr>
            <h2>${post.company.name}</h2>
            <h2>${post.company.catchPhrase}</h2>
            <h2>${post.company.bs}</h2>

            </div>
        </div>
        `
    }).join('');


    document.querySelector(".posts").innerHTML = result;
}

getPost();