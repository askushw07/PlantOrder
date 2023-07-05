function navbar(){
    return `
        <nav>
            <div>
                <p><a href="">Green Paradise</a></p>
            </div>
            <div>
                <p><a href="">Catlog</a></p>
                <p><a href="">Sale</a></p>
                <p><a href="">Delivery & Payment</a></p>
                <p><a href="">Contact</a></p>
            </div>
            <div>
                <p><input type="text" id="item" placeholder="Search Plant"></p>
                <p><button id="search"><i class="fa-solid fa-magnifying-glass fa-lg"></i></button></p>
                <p><a href=""><i class="fa-solid fa-language fa-lg"></i></a></p>
                <p><a href=""><i class="fa-solid fa-user fa-lg"></i></a></p>
                <p><a href=""><i class="fa-solid fa-cart-shopping fa-lg"></i></a></p>
            </div>
        </nav>`
}

async function fetchdata(){
    let res  = await fetch("https://gentle-ant-handkerchief.cyclic.app/data");
    let data = await res.json();
    // console.log(data);
    document.getElementById("search").addEventListener("click",()=>{
        let val = document.getElementById("item").value;
        if(!val) return;
        else{
            console.log(data);
        }
    })
}
export {navbar,fetchdata}