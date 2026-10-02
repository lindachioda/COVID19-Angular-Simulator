
🌐 **Live Demo** <br>
✨ [Clicca qui per vedere il mio Progetto online!](https://lindachioda.github.io/COVID19-Angular-Simulator/)

## 🛠️ Tecnologie Utilizzate

* Angular
* TypeScript
* RxJS
* HTML5
* CSS3
* Bootstrap
* Public REST APIs

  
# 🦠 COVID-19 Italy Dashboard

An Angular web application for visualizing and monitoring COVID-19 data in Italy through publicly available data provided by the Italian Civil Protection Department.
The application retrieves data directly from public APIs and presents it in an interactive dashboard, with statistics at national, regional and provincial level.

The application uses the public COVID-19 datasets published by the Italian Civil Protection Department:

* National COVID-19 data
* Regional COVID-19 data
* Provincial COVID-19 data
* Historical regional data
* Historical provincial data

The application does not store the data locally. The information is retrieved from the public repositories and processed by the Angular application.
This project focuses on practicing:

* API integration with `HttpClient`;
* TypeScript interfaces and data models;
* Observables and RxJS;
* dynamic rendering with Angular directives;
* Angular routing;
* custom pipes for sorting data;
* calculations based on API responses;
* displaying and organizing large datasets in a responsive dashboard.
  
## Features

* **National COVID-19 statistics**

  * Current positive cases
  * Recovered patients
  * Deaths
  * Total confirmed cases
  * Daily increases
  * Comparison with previous days

* **Regional statistics**

  * Total cases for each Italian region
  * Current positive cases
  * New positive cases
  * Regions sorted by total cases
  * Dedicated detail page for each region

* **Provincial statistics**

  * Total cases for each Italian province
  * Provinces sorted by number of cases

* **Testing data**

  * Daily number of tests performed
  * Calculation of the percentage of new positive cases compared with the tests performed

* **Daily updates**

  * Data is retrieved directly from the public API, so the dashboard reflects the latest available data.
  * The date displayed in the navigation is updated according to the current data.

* **Angular routing**

  * Clicking on a region opens a dedicated route containing detailed information about that region.




