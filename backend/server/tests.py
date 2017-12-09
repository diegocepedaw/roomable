# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.test import Client
from django.test import TestCase
import json


# this class contains the tests that should be run
class WebsiteTests(TestCase):
    def setUp(self):
        # Every test needs a client.
        self.client = Client()

    def test_register_get(self):
        '''Test sending a GET request to registeruser'''
        response = self.client.get('/server/api/registeruser/bob')
        # get requests should not be possible to registeruser
        self.assertEqual(response.status_code, 404)

    def test_register_post(self):
        '''Test sending a POST request to registeruser'''
        response = self.client.post('/server/api/registeruser/',
                                    {'email': 'bob@aol.com',
                                     'password': 'bob'})
        self.assertEqual(response.status_code, 200)

    def test_register_authenticated(self):
        '''Test that registeruser successfully authenticates the user'''
        response = self.client.post('/server/api/registeruser/',
                                    {'email': 'bob@aol.com',
                                     'password': 'bob'})
        jsonresponse = json.loads(response.content)
        self.assertEqual(jsonresponse['authenticated'], True)

    def test_register_email_retrieval(self):
        '''Test that registeruser successfully returns the user's email'''
        response = self.client.post('/server/api/registeruser/',
                                    {'email': 'bob@aol.com',
                                     'password': 'bob'})
        jsonresponse = json.loads(response.content)
        self.assertEqual(jsonresponse['email'], 'bob@aol.com')

    def test_get_user(self):
        '''Test getting the user's data from the database'''
        response = self.client.get('/server/api/getuser/sally')
        jsonresponse = json.loads(response.content)
        self.assertEqual(jsonresponse['email'], 'sally')

    def test_get_user_without_parameter(self):
        '''Test getting user data without a parameter'''
        response = self.client.get('/server/api/getuser/')
        self.assertEqual(response.status_code, 404)

    def test_get_user_with_invalid_user(self):
        '''Test getting user data for an invalid user'''
        response = self.client.get('/server/api/getuser/4321')
        self.assertEqual(response.status_code, 404)

    def test_get_matches(self):
        '''Test getting the matches for a valid user in the database'''
        response = self.client.get('/server/api/getmatches/sally')
        jsonresponse = json.loads(response.content)
        # sally should match with kevin
        self.assertEqual(jsonresponse[0]['email'], 'kevin')

    def test_get_matches_without_parameter(self):
        '''Test getting the matches for a valid user in the database'''
        response = self.client.get('/server/api/getmatches/')
        self.assertEqual(response.status_code, 404)

    def test_get_matches_with_invalid_user(self):
        '''Test getting user matches for an invalid user'''
        response = self.client.get('/server/api/getmatches/4321')
        self.assertEqual(response.status_code, 404)
