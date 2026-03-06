# CS4804 Final Project: The Generation Gap - Daily Screen Time (2015-2025)
**Author:** Conor McCoy

## Important Links for Grading
* **Live Interactive Visualization:** https://conor-mccoy.github.io/final/
* **2-Minute Screencast:** https://www.loom.com/share/42e1ec62b29743d9844a9ad470a359c1
* **Process Book:** [Process Book](./CS4804_Final_Process_Book.pdf)

## Project Overview
This project visualizes the shifts in digital consumption habits across different age demographics (Gen Z, Millennials, and Gen X) over the last decade. The primary goal was to explore whether the 2020 pandemic caused a permanent shift in screen time habits across all age groups, and to analyze how older generations' usage growth compares to "digital natives."

## Key Insights
* **The Pandemic Spike:** Every generation saw a sharp jump in screen time leading into 2021. For Gen Z, this peaked at over 8.6 hours a day, and levels across the board haven't really dropped back to 2015 baselines.
* **The Millennial Exception:** Millennials were the exception here. They had the smallest increase in screen time during the pandemic, showing a much flatter curve than the other two groups over the course of both the decade as a whole and the pandemic.
* **Overall Growth:** Gen Z saw the largest total increase in daily usage, adding nearly 1.8 hours to their daily average since 2015. However, Gen X showed the highest relative growth, increasing their daily screen time by over 30% in that same decade.

## Technical Implementation
* **Library:** D3.js (v7)
* **Features:** Multi-line temporal chart, interactive hover tooltips for exact data point extraction, and data normalization (converted varied metrics into uniform "Average Hours per Day").

## Running Locally
Because D3 loads the `data.csv` file dynamically, simply double-clicking the `index.html` file in a browser will result in a CORS error. To view the project locally:
1. Clone the repository.
2. Open the directory in your preferred IDE (e.g., VS Code, WebStorm).
3. Run a local web server
4. Navigate to `http://localhost:5500` (or your respective port).

## Data Sources
The data for this project was aggregated and interpolated from the following reports:
* **[Common Sense Media](https://www.commonsensemedia.org/press-releases/two-years-into-the-pandemic-media-use-has-increased-17-among-tweens-and-teens):** Census data on teen and tween media use.
* **[Evoca](https://evoca.tv/screen-time-statistics/):** Aggregated screen time statistics.
* **[DemandSage](https://www.demandsage.com/screen-time-statistics/):** Demographic screen time reports.
