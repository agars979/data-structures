var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var myItem = {
  pk: {
    S: "8 Oct, 2018"
  },
  name: {
    S: "Sabudana Vada"
  },
  translate: {
    S: "Crispy Sago Fritters"
  },
  description: [
    {text: { S: "Sabudana Vada is a crispy delicious snack made by deep frying spiced sabudana and potato cutlets. These vadas can be made as a snack or an appetizer. These are typically served with curd, Tamarind Chutney, Coriander Chutney or even tomato ketchup."}},
    //{spice: { S: "Not Spicy"}},
    {texture: { S: "Crispy on the outside, Soft on the inside"}},
    {cuisine: { S: "Indian"}},
    ],
  tastesbest: {
    S: "During Monsoons"
  },
  sk: {
    S: "Appetizer, Snack"
  },
  time: [
    {prep: { S: "25 mins"}},
    {cook: { S: "15 mins"}},
    {total: { S: "35 mins"}},
  ],
  ingredients: [
    {one: [{qty: {S: "1 cup"}},
        {name: {S: "Sabudana (Tapioca Pearls/Sago)"}}
      ]},
    {two: [{qty: {S: "2"}},
        {name: {S: "Potatoes (Boiled and Mashed)"}}
      ]},
    {three: [{qty: {S: "1-2"}},
        {name: {S: "Green Chillies (Finely Chopped)"}}
      ]},
    {four: [{qty: {S: "1/2 cup"}},
        {name: {S: "Peanuts, roasted and coarsely ground"}}
      ]},
    {five: [{qty: {S: "1/2 Teaspoon"}},
        {name: {S: "Jeera/Cumin Seeds"}}
      ]},
    {six: [{qty: {S: "2 Teaspoon"}},
        {name: {S: "Lemon Juice"}}
      ]},
    {seven: [{qty: {S: "1/2 Teaspoon"}},
        {name: {S: "Red Chilli Powder"}}
      ]},
    {eight: [{qty: {S: "1/2 Teaspoon"}},
        {name: {S: "Coriander Powder"}}
      ]},
    {nine: [{qty: {S: "1/2 Teaspoon"}},
        {name: {S: "Cumin Powder"}}
      ]},  
    {ten: [{qty: {S: "1 Teaspoon"}},
        {name: {S: "Salt or Rock Salt"}}
      ]},
    {eleven: { S: "Sabudana (Tapioca Pearls/Sago)"}},
  ],
  steps: [
    {one: { S: "Soak 1 cup of Sabudana (Tapioca) in water overnight for 5-6 hours. When they have become soft, drain all the water using a colander."}},
    {two: { S: "Boil, peel and mash 2 potatoes. Add them to a large mixing container along with the sabudana."}},
    {three: { S: "Roast and coarsely grind 1/2 cup of peanuts. Add these to the mixture as well."}},
    {four: { S: "Add Red Chilli Powder, Cumin Powder, Coriander Powder and Salt."}},
    {five: { S: "Also add 1-2 finely chopped green chillies, 1/2 teaspoon Cumin Seeds (Jeera) and 2 teaspoon lemon juice."}},
    {six: { S: "Mix all the ingredients well."}},
    {seven: { S: "Divide them into small lemon sized portions and shape them into round flat patties."}},
    {eight: { S: "Fry the patties in medium hot oil till they turn golden brown. Do not set the heat to a high setting, otherwise the vadas will not get cooked properly from the inside. Drain the excess oil on an absorbent paper."}},
    {nine: { S: "Sabudana Vadas are ready. Serve them hot with Curd, Tamarind Chutney, Coriander Chutney or Tomato Ketchup."}},
    ]
};

dynamodb.putItem(
  { 
    TableName: "deardiary",
    Item: myItem
  },
                 
	function(error, data) {
    console.log("Hey! I'm done");
	}
);