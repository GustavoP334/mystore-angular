# Angular Fundamentals

> **Note:** This project was built for study purposes as part of the **Full Stack JavaScript Developer** Nanodegree program by [Udacity](https://www.udacity.com/). It is not intended for production use.

## About

This is a simple e-commerce style shopping cart application built with Angular. It demonstrates core Angular fundamentals such as components, services, routing, and data binding.

The app allows users to:

- Browse a list of products
- View product details
- Add products to a shopping cart
- Review and manage the cart
- Complete a checkout and see an order confirmation

## Tech Stack

- [Angular](https://angular.dev/) v22
- [Bootstrap](https://getbootstrap.com/) & [ng-bootstrap](https://ng-bootstrap.github.io/)
- [RxJS](https://rxjs.dev/)
- [Vitest](https://vitest.dev/) for unit testing

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes bundled with Node.js)

## Getting Started

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   ng serve --port 3000 
   ```

3. Open your browser at [http://localhost:3000](http://localhost:3000). The application will automatically reload whenever you modify any of the source files.

## Running Tests

Run the unit tests with:

```bash
npm test
```

## Build

To build the project for production, run:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.
