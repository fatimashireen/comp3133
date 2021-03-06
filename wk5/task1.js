
 
db.getCollection("Restaurants").find({
  "cuisine":"Japanese"
})

db.getCollection("Restaurants").find({
  "cuisine":"Japanese"
},
  {"cuisine":1,"name":1}
)


db.getCollection("Restaurants").find({
  "cuisine" : "Japanese"}).sort({
  "name":1
  })

db.getCollection("Restaurants").find({
  "cuisine":{$eq : "Japanese"}},
  {"_id":1, "cuisine":1 , "name":1 , "city" : 1, "restaurant_id":1}).sort({"restaurant_id":1})

db.getCollection("Restaurant").find({
  "cuisine" : {$eq : "Delicatessen"}},
  { "_id":0, "cuisine":1 , "name": 1 , "city":1 }  
).sort({"name":-1})

db.getCollection("Restaurants").find({
  "cuisine" : {$eq : "Delicatessen"} , "city" : {$ne : "Brooklyn"}},
  {"cuisine":1, "name": 1 , "city" : 1 , "_id":0}
).sort({  "name":1})

db.getCollection("Restaurants").find({
$and : [
  {"cuisine" : {$in : ["Bakery","Chicken","Hamburgers","American" ]}},
  {"city": {$ne : "Brooklyn"}},
  { "restaurant_id" : {$gt : 4000000}},
  {"_id":0, "cuisine":1,"name":1,"city":1, "restaurant_id":1}
  ]
}).sort({"restaurant_id":-1})

db.getCollection("Restaurants").find({
 $or:[ {"name":"/Thai$/"} , {"address.street":"/Street$/"}, {"address.zipcode" : {$eq : 17988}}]
})




