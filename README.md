# frequencycomputation-react-app
this is a reactjs based web app which calculates the frequecy of top mostly occured words in the document  or file after fetching it.
--------------------------------------------------------------------------------------------------------------------------------------
state variable -> updateDataSource![Screenshot (288)](https://user-images.githubusercontent.com/43934285/118378375-17719e80-b5f1-11eb-8929-0a0856719415.png)

The library which is used for Layout is Antd and the components Layout, Button, Space, Table, Form, Input is used from antd layout.
Functional Component -> onClick
fetch method is used for fetching the data from the given url then
fetched data was transformed in the form of array with obj object
Obj_sorted function is used for sorting the fetched data
After sorting, the frequency is calculated using one loop 
which is then pushed in the table with the help of state variable updateDataSource.
App is able to display the frequency of top n words.
-------------------------------------------------------------------------------------------------------------------------------------------
UI accepts input in the form of integer
and display frequency of words 

testcases:
