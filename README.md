# Web Development Project 5 - WeatherBit Dashboard 🌤

Submitted by: **Eloy**

This web app: **displays weather data from the WeatherBit API in a searchable, filterable dashboard with summary statistics and a list view.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays weather data for multiple cities
  - Each row includes the city name, current temperature, and weather conditions
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data**
  - Number of cities tracked
  - Average temperature across cities
  - Number of different weather conditions
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar filters items by city name or country
  - The list updates dynamically as the user types
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The dropdown filter uses weather condition as a different attribute from the search bar
  - The list updates dynamically as the filter changes

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - The app uses both a text input and a dropdown selection
- [x] The user can enter specific bounds for filter values

The following **additional** features are implemented:

- [x] A polished dashboard layout with summary cards and a responsive list view
- [x] Simple loading and error states for the API request

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://via.placeholder.com/800x450?text=WeatherBit+Dashboard+Demo' title='Video Walkthrough' width='800' alt='Video Walkthrough' />

GIF created with a placeholder image for now. Replace this with a real GIF or screen recording when available.

## Notes

The main challenge was working with the WeatherBit API response structure and making sure the search and filter logic updated the rendered list smoothly. The project was also styled to feel more like a dashboard than a basic list.

## License

    Copyright 2026 Eloy

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.