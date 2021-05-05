# UI/UX frontend design and implementation assignment

## Introduction

This assignment has a lot of freedom in how you design it. It's defenitely not a kind of "fill in the blanks"-test, quite the opposite. The only thing provided is a very basic backend, just a `db.json` file served with [json-server](https://www.npmjs.com/package/json-server). Your goal is to implement a frontend application in Vue or React, your choice.

## The application

### Overview

The application must be adapted to the target group that you have been assigned.
The application is a bakery shop that will be designed and implemented with UI/UX in mind.

Some requirements:
1. Cakes are presented to the customers.
2. Customers can sign-in/sign-out from the shop.
3. Customers can select cakes and make orders.
4. Staff should be displayed in a nice and appealing way.

### Cakes presentation

Cakes must be presented in a nice way with UI/UX in mind, can be a list or a grid it's up to you.
You might want som short information of the cake in the list then clicking on an item a dialog or a new page with detailed information about the cake might open.

### Sign-In/Sign-Out

De api contains customers with email and password that can be used to sign-in/sign-out users, don't have to setup anything yourself they are predefined. So no sign-up is needed.

### Customers can select cakes and make orders

You might implement a cart that will contain the selected cakes and total price that sums up the price for based on the selected cakes.
A order button should be available that make an API call to add another order to he db.json backend.

### Staff should be displayed in a nice and appealing way.

You should have a section or page where the staff that works on the bakery are presented.

## Backend

Take a look in `db.json`.
The REST api is whatever `npm run start-server` gives you. Basically a CRUD api where you can do GET, PUT, POST, DELETE, PATCH and OPTIONS on all collections.

The backend has four collections:

1. `cakes`: a list of cakes that the bakery offers.
2. `staff`: a list of staff that work in the bakery.
3. `customers` a list of customers.
4. `orders`: a list of orders from customers.

### Example of a backend call

`GET localhost:3000/cakes`

**try it in e.g. postman, or just post the url into the browser**

## Requirements

- The application MUST be implemented in Vue or React.
- Use any npm dependencies (and dev-dependencies) you want. All dependecies you add (except Vue or React) should be motivated (dev dependecies excluded). Use `documentation.md` for this.
- Please test your application. All tests MUST be executed by running `npm run test`
- You are free to use a bootstrap tool to spin upp the application e.g. `Vue CLI` or `Create React App`. However, commits 
- Any description about the project; motivating dependencies you added or design decisions you think is worth mentioning etc. should be placed in a file `documentation.md` in the root of the project.
- Make sure you merged your solution to the `master` branch. If you do work on other branches, that's fine - they don't need to be deleted - but we will not look at them.

## How to get started

You need to have `node` and `npm` installed. Then clone this repository, run `npm install` and get started :)

## How to send in the assignment

The assignement can be checked in to a Github classroom repo that you have been assigned.
