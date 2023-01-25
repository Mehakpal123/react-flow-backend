# react-flow
React Flow Project

# How to Setup 
1. Download or Clone this Repository files in your Local Machine.
2. Open project root in terminal, and run command "npm install".
3. Once packages are installed, run "npm start".
4. Your project should be running on localhost at port 3000. http://localhost:3000

# About Project
The project once start on localhost:3000, will show a bunch of nodes and edges grouped together called a graph. The nodes are built using AWS Icons. The flow data is being received from a backend server built with node. The nodes are draggable/movable. The nodes could be deleted by pressing "Backspace" button. The edges used are smooth and have respective label.

# Notes
- In the pdf file where task was mentioned, the json data shared in Appendix 1 didn't have any "position" key setup on nodes object. So a dynamic "x" and "y" axis positions has been given by the code. So if you are testing with any other data , you will get right output.
- Also in the Edges array, the label was provided in the "data" key due to which React-Flow was not showing the label. So in order to preview the label, it must be provided in a seperate "label" key. For Example, {label:'mylabel'};

In case of any queries/issues, I am available for help. 

Thank You!!
