# Laravel mix boilerplate

This is going to be used as a base for front end projects. In this boilerplate it includes SASS with the SCSS syntax, source maps for the SCSS files, a hot reloading live server, copying of assets such as SVG's and the use of PostHTML with the 'includes' plugin allowing you to separate your HTML into partials for making maintainable code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development env running

Firstly run to install all of the dependencies:

```
npm install
```

Once this has run you can produce your dist files and watch for file updates by using:

```
npm run watch
```

As for the local server open a new terminal window run and run:

```
npm run hot
```

Once this is done you can now go to [http://localhost:8080](http://localhost:8080/) to view your project.

## Grid system

This project has a grid system built using flexbox, it currently has upto 12 cols and has util classes for spacing following increments of 8px.

For example to have a 4 col wide column with the margin of 8px on the left in rem simply use the below class

```
grid-col grid-col--4 m-l-8
```

## Deployment

To produce production files use this will output everything into the dist folder

```
npm run production
```

## Built With

- [laravel mix](https://github.com/JeffreyWay/laravel-mix) - The build tool used
- [Post HTML include](https://github.com/posthtml/posthtml-include) - Used for html partials

## Authors

- [Elliot Morris](https://github.com/elliotrpmorris/) for [Ayup Digital](https://ayup.agency/)

## License

This project is licensed under the GNU License - see the [LICENSE.md](LICENSE.md) file for details.
