# WORKSPACE - Flatiron Phase 5 Capstone Project

Workspace - a productivity app to help wrangle all the various assets related to design projects. It is built using a React frontend and a Ruby on Rails backend utilizing a Postgres database. I mainly used React Styled Components for CSS, with a little Bootstrap 5 thrown in for fun. And navigation.

* React.js frontend
  * Styled-Components for main CSS styling
  * Bootstrap 5 for navigation
  * Axios and Fetch for third-party API handling

* Ruby on Rails backend
  * Active Record
  * Active Storage for uploading and storing images
  * BCrypt for password handling
  * Postgresql@14 database

Having worked in the design field for many years, I know firsthand how frustrating it can be to keep track of the various pieces needed for one project, let alone multiple projects. A dedicated workspace would be very helpful. 

As a side goal, from the start of my Flatiron life, I wanted to connect each Phase project into one big Phase 5 project. To be honest, I thought it would make the final project a little easier, but not sure it actually did! But I did find it helpful to stick to my design tool theme when planning out all the phase projects.

First, you must sign in. It's easy to create a new account, but can demo with an existing one. Signing in takes you to the profile page, which acts as a sort of dashboard with quick links to related projects and toolkit features.

The main catalog is a collection of all the user's existing projects and assets. First, let's check out an individual project. The project info is displayed at the top, with included assets below.

To update the project data, click Update Project, and fill out the form. Click submit to see the changes automatically. You can also easily delete the project and it will not delete the related assets from the catalog.

Let's look at an individual asset. The asset information is displayed at the top, followed by links to associated projects. If the asset is not included in a project, it can be added from the dropdown  menu of available projects. You can easily update asset data or delete the record, similar to project update and delete.

To create a new project or upload a new asset, use the links from the nav bar at the top of the page. Let's upload a new image.

Toolkit is a resource area. Currently, there are color, image, and photo search components.

The color section includes information on using hexadecimal colors in your design. You can use the color picker to find a hex value, then generate various color schemes to work with. You may then grab the hex or RGB values to use in your CSS.

The images section dives into how to use CSS in styling images. There are photo examples of different styles with the CSS code snippets below. Utilizing these are a much easier way to transform images than using Photoshop to manipulate or create a new image for each desired effect. The above examples all use the same image, so only one image had to be uploaded and stored.

The last Toolkit feature is a photo search using the Unsplash photo archive API. After you search for an image, you can add a result to your catalog, and then include in a project.

Stretch goals for Workspace include a catalog search and filter, the option to upload more than image files, i.e. PDFs, and also the ability to take notes within the Toolkit features and add the note or code snippet to a project.