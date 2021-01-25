var shopper = {
    firstName: "Platinum",
    lastName: "Ace",
    gamerBirth: "2019",
    location: "walmart",
    hasGfuel: true, 
    shoppingCart: ["salt","tomato","Gfuel","cheese","candy"],
    listCartItems: function() {
        return this.firstName + " " + this.lastName +  " was born"  + this.gamerBirth +   "and has just bought Gfuel"
    }
}

 console.log ( shopper.listCartItems() ); 