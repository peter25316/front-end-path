1. What does API stand for?
   Application Programming Interface

2. How would you describe an API in your own words?
   A tool that allows your code to talk with (use the goodness from)
   someone else's code. (Web APIs, 3rd-party package, etc.)

3. Can you think of an example of an API you've used?

- BoredAPI - https://www.boredapi.com/ (getting data from a server)
- Local Storage (localStorage)

4. What are some examples of "clients" you've used today?

- Laptop
- Smart Phone
- Robot vacuum
- Smart plugs

5. How would you explain what a "server" is to a 5 year-old?
   A computer that send my own computer things when I ask it to.

6. In what way do clients and servers interact with each other?
   Client sends a request to a server, and the server sends back a response.

7. What are 3 things your computer (client) might request from a server?

- JSON array of suggested videos
- Video stream
- HTML page

8. What is the main job of a server?
   Receive a request from a client and return a response.

9. Self study: what would the 3-digit server response code
   be if the server experiences an internal server error?
   500 Internal Server Error

10. What does HTTP stand for?
    Hypertext Transfer Protocol

11. How would you describe what a protocol is to a complete newbie?
    An agreed-upon, standard way of doing something

12. Which part of this URL describes the protocol?:
    https://apis.scrimba.com/jsonplaceholder/posts

13. If you had to guess, which request method (GET, POST, PUT, DELETE) would you
    think we made in the previous challenge when we asked for data from the
    JSON Placeholder API?
    GET

14. What's the difference between a Base URL and an Endpoint?
    - Base URL is the part of the URL that won't change, no matter
      which resource we want to get from the API
    - Endpoint specifies exactly which resource we want to get
      from the API

Given the following URLs from an example API:

- https://blahblahblah.com/api/v2/users
- https://blahblahblah.com/api/v2/products
- https://blahblahblah.com/api/v2/products/123

15. Which part is the Base URL?
    https://blahblahblah.com/api/v2

16. What are the available endpoints?
    /users, /products, /products/<some id of a product here>

Try to think of a time you used each of the four main methods
(GET, POST, PUT, DELETE) in the real world as you went about
your regular usage of the internet. E.g. today, I checked the
weather on my phone which probably sent a GET request to retrieve
weather information.

GET: Retrieved weather information on my phone

POST: Created a new screencast (the one you're waching now)

PUT: Marked items from my shared todo list as "completed"

DELETE: Deleted a message on Slack that was no longer necessary

REST API:

17. How would you describe what REST is to your non-technical friend?
    A standarized way to have your computer, like your laptop,
    get or send information to another computer (like a server)

18. What does a RESTful API usually return in response to incoming requests?
    JSON data

19. What kind of client devices can make use of a RESTful API?
    ALL OF THEM.

20. What does it mean for the server to be "Stateless"?
    It forgets the interaction after the response is sent.

- In the Mike's Bikes example, what URL endpoint (and request method)
  would you expect to use in order to accomplish the following:

  2. Retrieve a list of all the bikes that are sold?
     GET /bikes

  3. Retrieve detailed information about the bike with an ID of 42?
     GET /bikes/42

  4. Update the price of the bike with an ID of 21?
     PUT /bikes/21

  5. Add a new bike to the list of bikes being sold?
     POST /bikes

  6. Remove the bike with an ID of 56 from the list of bikes?
     DELETE /bikes/56

21. How is a nested resource URL like /bikes/123/reviews
    different from an endpoint like /reviews?
    /bikes/123/reviews - return an array of reviews about that specific bike
    /reviews - return an array of all reviews on the site

22. What URL might you use to GET the review with an ID of 5 on the bike
    with the ID of 123?
    /bikes/123/reviews/5

23. Describe a "URL Parameter" in your own words:
    Variable inside the URL that acts as a placeholder for the real value
    (Oftentimes they replace the ID of the resource)

At Mike's Bikes, they also sell bike racks (endpoint is /bikeracks).

What would you expect the endpoints to be for the following tasks:

24. Get a list of all bike racks sold on the site?
    /bikeracks

25. Get a list of all bike racks available in the physical store right now?
    (Assume a query called "available" that is a boolean true/false)
    /bikeracks?available=true ==> {available: "true"} (Will be parsed as a string)

26. Get a list of all "Thule"-brand bike racks that can hold 4 bikes?
    (Assume there are "brand" and "numBikes" queries)
    /bikeracks?brand=thule&numBikes=4


# Promises

1. What is a promise (in your own words)?
A promise that an operation that normally takes a bit of time
will eventually finish running. I.O.U. (I owe you)

2. Which part of the code we have so far is a promise?
The fetch request returns a promise object.

3. What are the three states a promise can be in?
(1) Pending, (2) Resolved (fulfilled), (3) Rejected

4. What does it mean when a promise is "resolved" (or fulfilled)?
The task we wanted to perform finished successfully.

5. How do we tell the code to do something only AFTER a
   promise is resolved?
.then() method

- 3 states
    - Pending: the default, beginning state for any promise. Means the promise has yet to be completed
    - Fulfilled: completed as promised.
    - Rejected: does NOT mean the result wasn't what you wanted, but that the promise wasn't completed at all

