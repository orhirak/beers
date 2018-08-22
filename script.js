const beers = []

const addbeer = function (name, category,rate) {
    let newbeer = {
        name: name,
        category: category,
        rate:rate
    }
    beers.push(newbeer)
    

}
$(".post-beer").on('click', function () {
    let val = $(".beer-input").val()
    let val2 = $(".category-input").val()
    let val3 = $('#rate').val()
    addbeer(val,val2,val3);
    renderBeers()
    
    
})


let renderBeers = function () {
    $(".beers-list").empty();
    for (let i = 0; i < beers.length; i++) {
        $(".beers-list").append('<li>'+ beers[i].name + " " + beers[i].category  + " " + beers[i].rate + '</li>')
    }
}




