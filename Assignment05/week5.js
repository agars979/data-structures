var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var myItem = {
  sk: {
    S: "8 Oct, 2018"
  },
  name: {
    S: "Sabudana Vada"
  },
  translate: {
    S: "Crispy Sago Fritters"
  },
  description: {
    M: {
      text: {
        S: "Sabudana Vada is a crispy delicious snack made by deep frying spiced sabudana and potato cutlets. These vadas can be made as a snack or an appetizer. These are typically served with curd, Tamarind Chutney, Coriander Chutney or even tomato ketchup."
      },
      spice: {
        S: "Not Spicy"
      },
      texture: {
        S: "Crispy on the outside, Soft on the inside"
      },
      cuisine: {
        S: "Indian"
      },
    }
  },
  tastesbest: {
    S: "During Monsoons"
  },
  pk: {
    S: "Appetizer, Snack"
  },
  time: {
    M: {
      prep: {
        S: "25 mins"
      },
      cook: {
        S: "15 mins"
      },
      total: {
        S: "35 mins"
      }
    }
  },
  ingredients: {
    M: {
      one: {
        S: "1 cup Sabudana (Tapioca Pearls/Sago)"
      },
      two: {
        S: "2 Potatoes (Boiled and Mashed)"
      },
      three: {
        S: "1-2 Green Chillies (Finely Chopped"
      },
      four: {
        S: "1/2 cup Peanuts, roasted and coarsely ground"
      },
      five: {
        S: "1/2 Teaspoon Jeera/Cumin Seeds"
      },
      six: {
        S: "2 Teaspoon Lemon Juice"
      },
      seven: {
        S: "1/2 Teaspoon Red Chilli Powder"
      },
      eight: {
        S: "1/2 Teaspoon Coriander Powder"
      },
      nine: {
        S: "1/2 Teaspoon Cumin Powder"
      },
      ten: {
        S: "1 Teaspoon Salt or Rock Salt"
      },
      eleven: {
        S: "Sabudana (Tapioca Pearls/Sago)"
      },
    }
  },
  steps: {
    M: {
      one: { S: "Soak 1 cup of Sabudana (Tapioca) in water overnight for 5-6 hours. When they have become soft, drain all the water using a **colander**."},
      two: { S: "Boil, peel and mash 2 potatoes. Add them to a large mixing container along with the sabudana."},
      three: { S: "Roast and coarsely grind 1/2 cup of peanuts. Add these to the mixture as well."},
      four: { S: "Add Red Chilli Powder, Cumin Powder, Coriander Powder and Salt."},
      five: { S: "Also add 1-2 finely chopped green chillies, 1/2 teaspoon Cumin Seeds (Jeera) and 2 teaspoon lemon juice."},
      six: { S: "Mix all the ingredients well."},
      seven: { S: "Divide them into small lemon sized portions and shape them into round flat patties."},
      eight: { S: "Fry the patties in medium hot oil till they turn golden brown. Do not set the heat to a high setting, otherwise the vadas will not get cooked properly from the inside. Drain the excess oil on an absorbent paper."},
      nine: { S: "Sabudana Vadas are ready. Serve them hot with Curd, Tamarind Chutney, Coriander Chutney or Tomato Ketchup."},
    }
  },
};

dynamodb.putItem(
  { 
    TableName: "deardiary",
    Item: myItem
  },
                 
	function(error, data) {
	  if (error) {
	    console.log(error);
	  }
    console.log("Hey! I'm done");
	}
);
