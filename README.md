### In the terminal, in the root of healthapp/ folder

- **npm run calculateBmi (height) (weight)**  
  for executing the bmiCalculator program. Height must be expresed in centimeters [cm], for example 175; weight must be expresed in kilograms [kg], for example 73. So, an example call could be **_npm run calculateBmi 175 73_**  
  the program's response would be:  
  _Normal range_

- **npm run calculateExercise (target) (day1) (day2) (day3) (day4) (day5) (day6) (day7)**  
  for executing exerciseCalculator program; where _target_ is the average hours of training as goal and _day1, day2, ..., day7_ are the numbers of hours trained each day of the week. Besides, if you introduce less days than 7 (for example 4 training days) the program will interpret that the training program is that number of days long (in the 4 day example, the program interpret that the program is for training 4 days of the week), the average is calculated using this interpretation.  
  An example call could be **_npm run calculateExercise 2 3 0 3 2_**; the program will interpret that the target of average hours is 2 (first argument), that the routine is made of 4 (four) days of training, that the first day the user trained 3 hours, the second 0 hours, the third 3 hours and the last day 2 hours. The response of the program would be  
  {  
  periodLength: 4,  
  trainingDays: 3,  
  success: true,  
  rating: 2,  
  ratingDescription: 'Accomplished, but there is room for improvement',  
  target: 2,  
  average: 2  
  }
