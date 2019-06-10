# Tracking the International Space Station

> Using All We've Learned this Quarter.

For this project, I used an api called "Where is the ISS" (https://api.wheretheiss.at/v1/satellites/25544) to 
locate the International Space Station, provide those coordinates in longitude and latitude, and then project them 
onto a Google Map in real-time. 


## Project Goals
Create an interface for locating and displaying the location of the ISS. 

## Directions
Once accessing the website, allow a few moments for the longitude and latitude of the ISS to populate. It will appear
automatically after the page has rendered. 

Once the rendering is done, you will be able to see the location of the ISS (by latitude and longitude) as well as a brief 
message on the weather conditions in that area of the world. 

If you would like to see that location on a map, please click the "See on a Map" router link to travel to the second Vue page. Again, the information will populate automatically once the page has rendered. 

##How It Works
I tried to keep this project simple: I used the wheretheiss.at api to get the data on the location of the ISS. I then placed
that data as results.latitude and results.longitude into their respective slots on the main vue page. I included the weather for a bit of fun since that was some of the data that the app would present me with. 

On the map page, I used the same api call. However, instead of funneling the data into a string-based slot, I placed results.latitude and results.longitude into a googlemap url iframe. The result was a map which showed the location as a dot of the ISS. 

## Credits
Special thank you to 'https://api.wheretheiss.at/v1/satellites/25544' the free API I used to make this project possible. 