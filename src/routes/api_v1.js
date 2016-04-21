"use strict";
var router = require('express').Router();
var path = require('path');

var organizationController = require('../controller/organization.js');
var userController = require('../controller/user.js');

// -------------------------------------------------------
// ORGANIZATION
// -------------------------------------------------------
router.get('/organization',  organizationController.getAll);
router.post('/organization',  organizationController.create);
router.put('/organization/:id',  organizationController.update);
router.delete('/organization/:id',  organizationController.delete);

// -------------------------------------------------------
// USER
// -------------------------------------------------------
router.post('/user',  userController.create);
router.put('/user/:id',  userController.update);
router.delete('/user/:id',  userController.delete);
router.get('/user/:OrganizationId', userController.getUserByOrgId);

// -------------------------------------------------------
// Homework
// -------------------------------------------------------

// 1. update user API

// 2. delete user API

// 3. get all user by organization id

// 3a. get list of user by organization id and filter by title specified in query string


module.exports = router;
