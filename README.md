# TFL API Example calls

## How to get Station IDs

For example the API call for [arrivals for Liverpool Street](https://api.tfl.gov.uk/StopPoint/910GLIVST/arrivals) Overground rail is

`https://api.tfl.gov.uk/StopPoint/910GLIVST/arrivals`

This can be customised to any TFL station, by changing the `910GLIVST`, the code can be found by searching this link

https://tfl.gov.uk/travel-information/stations-stops-and-piers/

and taking the station ID. Be aware that each line has it's own ID, but can fall under a umberalla ID for the station that has many services, e.g. Liverpool Street is `HUBLST` since it includes London Overground & Rail, Central line and Circle, Hammersmith & City and Metropolitain.

So for each transport line, drill down to find the Id for example, the Liverpool Street - Central line underground station's URL is

`https://tfl.gov.uk/tube/stop/940GZZLULVT/liverpool-street-underground-station?lineId=central`

Thus the API call for [arrivals](https://api.tfl.gov.uk/StopPoint/940GZZLULVT/arrivals) would be `https://api.tfl.gov.uk/StopPoint/940GZZLULVT/arrivals`

TFL Blog post on these calls from TFL can be found [here](https://blog.tfl.gov.uk/2015/10/08/unified-api-part-2-lot-location-of-things/)

More information and some example calls using Postman can be found on the offical API webpage as well [here](https://api.tfl.gov.uk/)
