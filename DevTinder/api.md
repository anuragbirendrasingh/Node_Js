## auth router
post - signup
post - signin
post - signout

## profile router
get - /profile - view
patch - /profile - edit
patch - /password - editPassword  

## connection request router
post - /request/send/interseted/:userId
post - /request/send/not-intersted/:userId
post - /request/review/accepted/:userId
post -/request/review/accepted/:userId

## userRouter
get - /user/connections
get - /user/requests
get - /user/feed gets you the profile of the users at the pataform

Status : ignored  interseted accepeted rejected


