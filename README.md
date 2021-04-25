# code-20210425-sanketdhone
# BMI calculator and mapping

#node.js installation:  
	https://nodejs.org/en/download/package-manager/  
  
  #steps to install project  
	- $ git clone PROJECT_HTTPS_URL_FROM_MASTER  
	- $ cd PROJECT_TITLE  
	- $ npm install  
  
  #Running the project  
    $ npm start  
    
  #Running unit test cases  
    $ npm run test  
    
# Project Structure  
  ##Data Files  
  -inputData.json  
    |-- Data input for person which inclues 1 lakh+ records (repetative).  
  -table1.json  
    |-- BMI Mapping tabel from problem statement.  
  -output.txt  
    |-- Generated output file of mapped BMI and count of overweight people from input Data.  
  -testData.json  
    |-- Test data to run test cases for BMI calculator and Mapper.  
    
   ##Code Structure  
  - index.js (Main javascript file)  
    |-- Code to accept inputJson data excute BMI calculator and mapping function respectively. Storing mapped result in output.text  
  - utils.js  
    |-- Utility file for defining BMI calculator and Mapping function (Logic).  
  - test.js  
    |-- Unit test cases using mocha for assignment.  
    
 
