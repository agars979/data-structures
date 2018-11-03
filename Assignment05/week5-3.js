var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var myItem = {
  sk: {
    S: "12 Oct, 2018"
  },
  name: {
    S: "Fluffy Pancakes"
  },
  description: {
    M: {
      text: {
        S: "Tall and fluffy. These pancakes are just right. Topped with strawberries and whipped cream, they are impossible to resist."
      },
      texture: {
        S: "fluffy, soft"
      },
    }
  },
  pk: {
    S: "Breakfast, dessert"
  },
  time: {
    M: {
      prep: {
        S: "10 mins"
      },
      cook: {
        S: "5 mins"
      },
      total: {
        S: "15 mins"
      }
    }
  },
  ingredients: {
    M: {
      one: {
        S: "3/4 cup milk"
      },
      two: {
        S: "2 tablespoons white vinegar"
      },
      three: {
        S: "1 cup all-purpose flour"
      },
      four: {
        S: "2 tablespoons white sugar"
      },
      five: {
        S: "1 teaspoon baking powder"
      },
      six: {
        S: "1/2 teaspoon baking soda"
      },
      seven: {
        S: "1/2 teaspoon salt"
      },
      eight: {
        S: "1 egg"
      },
      nine: {
        S: "2 tablespoons butter, melted"
      },
      ten: {
        S: "cooking spray"
      },
    }
  },
  steps: {
    M: {
      one: { S: "Combine milk with vinegar in a medium bowl and set aside for 5 minutes to sour."},
      two: { S: "Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into soured milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone."},
      three: { S: "Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side."},
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
