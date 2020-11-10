*a node server is created using express
*the server is hosted in the localhost:3000

crud operations are performed
-------------------------------

create
-------

*a college database is created
*student model is created in the college database


read
------
*the get request is made in postman to perform the read operation

update 
--------
*the put request is made in postman to perform the update operation
*first name is used as the condition to find the documents that need to be updated
*the firstname is passed using body parser 
*only the updated datas are reflected at the end of put request
*only a single document satisfying the condition is updated during the put request

delete 
-------
*the delete request is made in postman to perform the delete operation 
*first name is used as the condition for the documents that need to be deleted
*the first name is passed using body parser
*all the documents with similar first name is deleted



_____________________________________________________________

database 
-----------
*the database is hosted in the mongo atlas platform using aws cloud service
____________________________________________________________________________

code is available in the master branch 

__________________________________________________________________________________
