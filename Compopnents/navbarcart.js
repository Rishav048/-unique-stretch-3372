function navbar (){

    return`<div id="mainNav">

    <div class="navLeft" >
        <a href="./index.html"><img class="logo" src="https://i.ibb.co/kmCj5FV/KINGS-FRIED-CHICKEN-2.png" alt="logo"></a>
        <h6 id="menuBtn">Menu</h6>
        <h6 id="deals">Deals</h6>
    </div>

    <div class="navRight">
        <i class="fa-regular fa-circle-user fa-2x"></i>

         <h4 id="navRightCorner" >Sign In</h4>
        <p>|</p>
        <h4 >₹ <span id="wallet">0</span></h4>
        <img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="cartImg">
        <h5 id="noi"></h5>

      
       

    </div>

</div>`

}

export {navbar};