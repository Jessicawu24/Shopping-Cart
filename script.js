var items=[];
var price = 0;
$('.Item').click(function() {
    var itemImage = $ (".itemImage").val();
    var itemName = $ (".itemName").val();
    var itemPrice = $ (".itemPrice").val();
    items.push(itemImage);
    price=price+parseInt($ (".itemPrice").val());
    console.log(items);
    //$(".").text(items.length);
    $(".cart").append(
        "<div class=item><p><img src="+itemImage + "></p><p>"+itemName + "</p></p><p>"+itemPrice + "</p></div>"
    );
    
    
});

$('.buy').click(function() {
    window.alert ("Your total is "+price+" .Thanks for purchasing "+items[0]+" and all of your other items!");
});