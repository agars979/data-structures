var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var myItem = {
  pk: {
    S: "10 Oct, 2018"
  },
  name: {
    S: "Alfredo Chicken Lasagna Rolls"
  },
  description: {
    M: {
      text: {
        S: "Chicken, Alfredo, and cheese rolled up in lasagna noodles for tasty awesomeness."
      },
      spice: {
        S: "Not Spicy"
      },
      texture: {
        S: "Light"
      },
      cuisine: {
        S: "Italian"
      },
    }
  },
  sk: {
    S: "Main Course"
  },
  time: {
    M: {
      prep: {
        S: "15 mins"
      },
      cook: {
        S: "53 mins"
      },
      total: {
        S: "1 hr 8 mins"
      }
    }
  },
  ingredients: {
    M: {
      one: {
        S: "1 (12 fluid ounce) can evaporated milk"
      },
      two: {
        S: "2 skinless, boneless chicken breasts"
      },
      three: {
        S: "1 (1 ounce) package ranch dressing mix"
      },
      four: {
        S: "9 lasagna noodles"
      },
      five: {
        S: "1 cup Alfredo sauce, or as desired"
      },
      six: {
        S: "1 1/2 cups shredded mozzarella cheese, or to taste"
      },
      seven: {
        S: "1/4 cup crumbled cooked bacon, or to taste (optional)"
      },
      eight: {
        S: "1 pinch dried oregano, or more to taste"
      },
      nine: {
        S: "1 pinch garlic salt, or more to taste"
      },
    }
  },
  steps: {
    M: {
      one: { S: "Preheat oven to 350 degrees F (175 degrees C)."},
      two: { S: "Combine evaporated milk, chicken, and ranch dressing mix in a skillet over medium heat; cook until chicken is no longer pink in the center, 10 to 15 minutes. Shred chicken."},
      three: { S: "Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in the boiling water, stirring occasionally until tender yet firm to the bite, about 8 minutes. Drain and dry on paper towels."},
      four: { S: "Spread Alfredo sauce over each noodle; top with shredded chicken."},
      five: { S: "Combine mozzarella cheese, bacon, oregano, and garlic salt in a bowl; sprinkle over chicken layer. Roll each noodle around the filling and place rolls in an 8-inch baking dish."},
      six: { S: "Bake in the preheated oven until cheese is melted and bubbly, 30 to 35 minutes."},
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
