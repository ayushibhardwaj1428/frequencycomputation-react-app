
# frequencycomputation-react-app
this is a reactjs based web app which calculates the frequecy of top mostly occured words in the document  or file after fetching it.
Please refer to master branch for source code
--------------------------------------------------------------------------------------------------------------------------------------


The library which is used for Layout is Antd and the components Layout, Button, Space, Table, Form, Input is used from antd layout.
-------------------------------------------------------------------------------------------------------------------------------------
Functional Component -> onClick
---------------------------------------------------------------------------------------------------------------------------------------
state variable -> updateDataSource
----------------------------------------------------------------------------------------------------------------------------------------
fetch method is used for fetching the data from the given url then
fetched data was transformed in the form of array with obj object
----------------------------------------------------------------------------------------------------------------------------------------
Obj_sorted function is used for sorting the fetched data
After sorting, the frequency is calculated using one loop 
which is then pushed in the table with the help of state variable updateDataSource.
App is able to display the frequency of top n words.
-----------------------------------------------------------------------------------------------------------------------------------------
Live url of this react app is : https://naughty-yalow-6fb8fb.netlify.app/
-------------------------------------------------------------------------------------------------------------------------------------------
UI accepts input in the form of integer
and display frequency of words 

testcases:
app has been tested for various integer inputs and it is successfully giving accurate results
![Screenshot (288)](https://user-images.githubusercontent.com/43934285/118378375-17719e80-b5f1-11eb-8929-0a0856719415.png)

![Screenshot (287)](https://user-images.githubusercontent.com/43934285/118378418-6b7c8300-b5f1-11eb-94ac-e0699b33cf7b.png)

![Screenshot (286)](https://user-images.githubusercontent.com/43934285/118378426-746d5480-b5f1-11eb-809e-23b01b0b2fce.png)

![Screenshot (284)](https://user-images.githubusercontent.com/43934285/118378453-9b2b8b00-b5f1-11eb-8785-2fc010d47dee.png)

![Screenshot (283)](https://user-images.githubusercontent.com/43934285/118378463-abdc0100-b5f1-11eb-87d9-d31d35563071.png)

![Screenshot (289)](https://user-images.githubusercontent.com/43934285/118378462-abdc0100-b5f1-11eb-8467-dbc18ae74bdc.png)
