# My Course Roster

## Features
- Course selection: Users can browse, view course details and select courses of interest from the available courses, which are displayed in card view.
- Credit hour tracking: Users can track the total credit hours of the courses they have selected. The project enforces a 20-hour credit limit. Users can also track the number of credit hours remaining.
- Cart: Users can add courses to a cart and view the courses they have selected in the cart.
- Toast notifications: Users receive toast notifications when they attempt to select a course that is already in their selection or when they exceed the credit hour limit. These notifications enhance the user experience.





## Managed States
### Here, the states are managed using the useState hook from React. The following states are managed:

- allCourses: 
This state stores all the available courses.
Here the 'allCourses' state variable is initialized as an empty array by using 'useState([])'. From a JSON file, the data for all courses is fetched in the 'useEffect' hook, and when the data is received, it is set using 'setAllCourses(data)'.




- selectedCourses: 
This state stores the courses that the user has selected.

Here the 'selectedCourses' state variable is initialized as an empty array by using 'useState([])'. This is for storing the courses that the user has selected to add to the cart. 'setSelectedCourse' is used to update this state variable when the user selects a course. In the 'handleSelectCourse' function, the selected course is being added to the 'selectedCourses' array.




- totalCredit: 
This state stores the total credit hours that the user has selected, which will not be more than 20.

The 'totalCredit' state variable is initialized with a value of '0' using 'useState(0)'. The total credit hours are calculated and updated in the 'handleSelectCourse' function using 'setTotalCredit(count)'.




- remaining: 
This state stores the number of credit hours remaining.
This state variable, 'remaining', is initially set to 20 (assuming a maximum credit limit of 20 hours). It is updated when a course is added to the 'selectedCourses' array. The remaining credit hours are calculated and set using 'setRemaining(creditRemaining').


A component receives three props: 'selectedCourses', 'totalCredit' and 'remaining' which are passed from a parent component where the corresponding states were declared. This component is rendering the selected courses, total credit hours and remaining credit hours in a visually appealing manner based on the props received from the parent component. These props are used to display information about the user's course selections and credit tracking within the cart section.



