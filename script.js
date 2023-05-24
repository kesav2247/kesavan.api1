let search_text = document.querySelector("#searchtext");
let result = document.querySelector("#result")
let search_btn = document.querySelector("#btn");
let reset_btn = document.querySelector("#Reset-btn");

search_btn.addEventListener("click", async () => {
    let value = document.getElementById("searchtext").value
    
    if (value.length == 0) {
        alert("please enter the valid name");
    }
    else {

        try {
            let data = await fetch(`https://bible-api.com/romans+12:1-2${value}`);
            let result = await data.json();
            // console.log(result)
            for (let i = 0; i < 2; i++) {
                result_data.innerHTML += ` <div class="container">
                <div class="card">
                  <div class="card-header">
                   <div class="card-title">TOP-${i + 1}</div>
                   
                  </div>
                  <div class="card-body">
                
                  Country_id:${result.country[i].country_id}<br>
            Probability :${result.country[i].probability}<br><br>
                
                  </div>
                </div>
                </div>`

            }

        }
        catch {
            console.log(error);
        }

    }

})
let container_data = document.querySelector('.card');
Reset-btn.addEventListener("click", () => {
    document.querySelector('.result').style.display = "none";
    search_text.value = "";
    result_data.innerHTML = " ";

});































// async function foo(){

// let data = await fetch("https://bible-api.com/romans+12:1-2");
// let result = await data.json();
// console.log(result)
// }
// foo()