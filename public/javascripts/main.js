Computer.prototype.getPrice = function() {
    //set the current price to the base price.
    
    this.currPrice = this.basePrice;
    for (var option in this.options) {
        if (this.options.hasOwnProperty(option)) {

            //update the current price.
            this.currPrice += parseFloat(this.options[option].price);
        }
    }
    return this.currPrice;
}

function Computer (price) {
    //baseprice
    this.basePrice = basePrice;
    //current price
    this.currPrice = this.basePrice;
    
    //options object.
    this.options = {};
}


Computer.prototype.setOption = function (name, value) {
    //set the option
    this.options[name] = value;
    //update the price.
}




function btnSaveHandler(arg) {
    
    //build the data object to be sent
    var data = {};
    //get the options object.
    data.options = $.store.myComputer.options;
    //add the total from the input box.
    data.total = $("input#inputPrice").val();
  
    $.ajax({
        url: "/save",
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
        complete: confirm
    });
}

$( document ).ready(function() {
    
    //initialize my namespace to store the product
    $.store = {};
    
    //build a new computer object and store it in my store namespace
    $.store.myComputer = new Computer(1000);
    
    //wire an option mousedown event.
    $("input.option").on("mousedown", function(e) {
        //e.preventDefault();
        btnOptionSelectHandler(this);
    })
    
    //save button event handler.
    $("button#btnSave").on("click", function(){
        btnSaveHandler(this);
    })
    
    //get the currently selected option to initialy populate the computer
    //object.
    $("input.option:checked").each(function() {
        btnOptionSelectHandler(this);
    })
    
 });
