Project Folder Structure 
    /src
  ├── /components
      /Dashboard
  │   ├── Accommodation.jsx
  │   ├── Activities.jsx
  │   ├── Destination.jsx
  │   ├── Navbar.jsx
  │   ├── UpcomingTrip.jsx
  ├── /pages
  │   ├── Onboarding.jsx
  │   ├── MainDashboard.jsx
  ├── App.jsx
  ├── /assets
  │   ├── /images
  │   └── /icons
  ├── /styles
  │   ├── main.css
  └── index.js


# PROJECT SETUP-------
        1. Clone the repository('git clone https://github.com/ashishsinghAK/Travel_App.git')
        2. Project Directory ('cd Travel')
        3. Install Dependencies('npm install')
        4. Start the development server('npm run dev')

# Tech Stack----------
        1. React.js (Frontend library)
        2. Vite (Build tool for fast development)
        3. TailwindCSS (Utility-first CSS framework)
        4. React Router (Routing between pages)
        5. React Icons (Icon library)



# Explanation(Folder Structure)--


#    /components: Contains reusable UI components that are part of the MainDashboard such as accommodation details,         activities, and the navigation bar.

        =)Accommodation.jsx: Component to display accommodation-related information.

        =)Activities.jsx: Component to display activities the user can do at the destination.

        =)Destination.jsx: Displays information about the selected destination.

        =)Navbar.jsx: The top navigation bar component for the app.

        =)UpcomingTrip.jsx: A component to show upcoming trip details.


#  /pages: Contains the different pages of the application.

        =)Onboarding.jsx: The onboarding page where users input basic details like duration, number of members, and destination.

        =)MainDashboard.jsx: The main dashboard where the trip information is displayed, divided into various sections like accommodations, flights, and activities.

        =)App.jsx: The main component that handles routing between the Onboarding and MainDashboard pages.


#    /styles: Contains global and page-specific styles.

#    index.js: The entry point to the application, where ReactDOM is rendered.



# Application Flow-------

1 Onboarding page--
        A) Users are first presented with the Onboarding page where they can enter:

           a) Duration of the trip.
           b) Number of members traveling.
           c) Destination.

2 Main Dashboard
        B) Once the user is redirected to the Main Dashboard, the following sections are displayed:

            a) Accommodation: Displays accommodation options for the selected destination.
            b) Flight Details: Displays flight details including departure and arrival information.
            c) Activities: Shows a list of activities available at the destination.
            d) Navbar: Provides navigation options like the ability to go back to the onboarding page or view upcoming trips.
            e) Upcoming Trip: Displays an overview of the user's upcoming trip, including dates, members, and destination.
