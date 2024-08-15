Zomapp

// Page 1
> List of city (GET)
*  http://localhost:9111/location

> List of Restaurant (GET)
http://localhost:9111/restaurants

> Rest wrt to city (GET)
* http://localhost:9110/restaurants?stateId=1

> Quick Search (GET)
* http://localhost:9110/mealType


// Page 2
> Rest wrt to meal (GET)
http://localhost:9110/filter/1


> Rest wrt to meal + cuisine (GET)
http://localhost:9110/filter/1?cuisineId=3

> Rest wrt to meal + cost (GET)
http://localhost:9110/filter/1?lcost=500&hcost=1500

//page3
> Details of Restaurant (GET)

1- http://localhost:9110/details/2
2- http://localhost:9110/details/66b781ede82fc4c2cad2a6e0

> Menu of restaurant (GET)
http://localhost:9110/menu/2

//page4
> Details of menu selected (POST)
http://localhost:9110/menuDetails
body> {"id": [1,12,3]}

> Place Order (POST)
post - it is a method we can all achieve all the operations 

http://localhost:9110/placeOrder

   {
        "orderId": 1,
        "name": "anvi",
        "email": "anvi21@gmail.com",
        "address": "benglore city",
        "cost": 512,
        "menuItem": [
            1,
            14,
            40
        ],
        "status": "On the Way"
    }



//page
> List all orders (GET)
* http://localhost:9110/orders
* http://localhost:9110/orders?email=anvi21@gmail.com


> update order (PUT)
* http://localhost:9110/updateOrder
> body {
"_id": "66b856f245fd74b98a2093c1",
    "status": "Delivered"
}
http://localhost:9110/orders

> delete order (DELETE)
* http://localhost:9110/deleteOrder

> body {
     "_id": "66b854ff05e93f3be0d7ee95"
}


key 

* http://localhost:9110/location
> header 
key               value
x-access-auth     123Hdn4jwnd4o4