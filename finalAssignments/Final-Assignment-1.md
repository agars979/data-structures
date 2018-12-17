#AA Meetings

To view the working aa map click [here](http://18.222.188.125:8080/aa)

To achieve this result we went through various processes.

First, we went through all the html files of the aa meetings, imported these as text files onto our local servers

[javascript file used for import](https://github.com/agars979/data-structures/blob/master/Assignment01/week1.js)

We then studied these files and parsed them such as to extract required information

[javascript file used for extraction](https://github.com/agars979/data-structures/blob/master/Assignment07/extract.js)

Once we extracted the relevent information we went ahead to create a Texas A&M Geo Service to be able to use the extracted addresses and retrieve their co-ordinates to be able to map the same. To retrieve the co-ordinates and structure all the extracted data we used the following [code.](https://github.com/agars979/data-structures/blob/master/Assignment07/geo.js)

We did a visual exercise of representing how we would like to structure our data and then created and filled a table keeping the same in mind.

![data structure visualisation](https://github.com/agars979/data-structures/blob/master/Assignment04/Relational%20Table-01.png)
[javascript file used for making the table](https://github.com/agars979/data-structures/blob/master/Assignment07/table.js)
[javascript file used for filling the table](https://github.com/agars979/data-structures/blob/master/Assignment07/table-run.js)

Once the data-base was ready, we created the qyery to search for data relevant to the user

[Relevance to user (page 1)](https://github.com/agars979/data-structures/blob/master/Assignment11.pdf)
[javascript file used for finding query](https://github.com/agars979/data-structures/blob/master/Assignment06/week6-AAMeetings.js)

Finally using the DB and query we transferred this information visually using Leaflet to create the map css.

[javascript file used for map visualisation](https://github.com/agars979/data-structures/blob/master/finalAssignments/Final-Assignment-1.md)