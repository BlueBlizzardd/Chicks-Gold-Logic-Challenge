# Water Jug Problem  

One of two challenges made for Chicks Gold, both projects were made in React to showcase my capacity to use the framework and develop components nicely, and also because I've already showcased one project I've made in Angular and it's a bit much for what it's asked of me in both challenges.  

### Mathematical Solution  

The algorithm is located within the algorithm.ts file, and it uses a problem from number theory, more specifically, Greatest Common Divisor (GCD, as it's called in the code). The principle states that a solution is only possible if and only if it is a multiple of the GCD of the two jug capacities.  

If the condition is then met, the algorithm from then on is pretty straightforward, just take the jug you want to fill, and fill it using the other jug. If the amount to calculate is bigger than the smallest jug, but smaller than the biggest one, just keep taking off water from the biggest jug using the smallest jug, and repeat until you get the desired amount of water. If either of the jugs is emptied, fill it completely and repeat either of the processes again.  

It also must be noted that the program will not calculate an end result if it doesn't exist, which can happen in any of these conditions:  

    1. The amount to look for is not a multiple of the GCD of the two jugs.  
    2. The amount to look for is bigger than either of the jugs (the program hinges on the fact that the amount should be reached with only one jug).  
    3. Either of the jugs is less than or equal to zero.  
    4. The amount to look for is less than or equal to zero.  

In any of these cases, no result will be thrown and the program will just state that there is no solution.   

#### Test Cases  

Among the test cases conducted, written as (jug1, jug2, amount) there's   

    - (4, 222, 10),
    - (4, 216, 10),
    - (5, 3, 4),
    - (0, 10, 10),
    - (10, 0, 10),
    - (22, 44, 44),
    - (4, 999, 10)

among others, however, since the program will only run if the solution is actually possible, I've found no errors or long loading times while running it.

## Instructions  

One detail that might be important is the fact that I use pnpm as a package manager and PostCSS as a CSS preprocessor, which should explain the YAML files present (the PostCSS config is also in YAML just to maintain some consistency). The fact that I use pnpm also means that if you want to run the page you would have to use pnpm dev, OR, alternatively, use npm install so you get a package-lock.json first, then run it through npm run dev.  

Once the program is setup, simply input the amount of water for jugs 1 and 2 then input the amount Z of gallons to calculate. Once you're done, just click on the 'Calculate' button, and if all fields make for a measurable solution (i.e the sum of both jugs is more or equal than amount Z, neither jug is smaller than 1L, and they satisfy the equation mentioned in the mathematical solution approach), the solution, including its amount of total steps, should appear on the screen.  
