# Sensor Data

Sensor recieved: IR Sensor

## To view the working sensor data graph click [here](http://18.222.188.125:8080/ss)

After configuring the sensor on photon.io, we set it up at its location.
In my case the infra-red sensor gave a boolean reading as to whether or not there was something obstructing it.
So I set my sensor up at my window, such that, it could read whether or not my window was open.

![Sensor at Window](https://photos.app.goo.gl/i5TL3Skk8zymtTUy6)

Once this was done we set up the sensor to gather 'true' or 'false' data every 5 minutes over the span of a month. This data was recorded in a postgres database.

[javascript file used for import and insertion into DB](https://github.com/agars979/data-structures/blob/master/Assignment09/app.js)
[Relevance to user (page 2)](https://github.com/agars979/data-structures/blob/master/Assignment11.pdf)

We then represnted this data visually in the form of a graph using d3, grouping it by day and diplaying a percentage of the time of day the window was open.

[javascript file used for graph visualisation](https://github.com/agars979/data-structures/blob/master/finalAssignments/server.js)