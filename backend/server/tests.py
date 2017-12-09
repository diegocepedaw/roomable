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
        self.create_basic_user('bob_email', 'bob_pass')
        response = self.client.get('/server/api/getuser/bob_email/')
        jsonresponse = json.loads(response.content)
        self.assertEqual(jsonresponse['email'], 'bob_email')

    def test_get_user_without_parameter(self):
        '''Test getting user data without a parameter'''
        response = self.client.get('/server/api/getuser/')
        self.assertEqual(response.status_code, 404)

    def test_get_user_with_invalid_user(self):
        '''Test getting user data for an invalid user'''
        response = self.client.get('/server/api/getuser/4321/')
        self.assertEqual(response.status_code, 404)

    def test_get_matches(self):
        '''Test getting the matches for a valid user in the database'''
        self.create_basic_user('bob_email', 'bob_pass')
        self.create_basic_user('sally_email', 'sally_pass')
        response = self.client.get('/server/api/getmatches/bob_email/')
        jsonresponse = json.loads(response.content)
        # bob should match with sally
        self.assertEqual(jsonresponse['userlist'][0]['email'], 'sally_email')

    def test_get_matches_without_parameter(self):
        '''Test getting the matches for a valid user in the database'''
        response = self.client.get('/server/api/getmatches/')
        self.assertEqual(response.status_code, 404)

    def test_get_matches_with_invalid_user(self):
        '''Test getting user matches for an invalid user'''
        response = self.client.get('/server/api/getmatches/4321/')
        self.assertEqual(response.status_code, 404)

    def create_basic_user(self, email, password):
        self.client.post('/server/api/registeruser/',
                         {'email': email, 'password': password})
        self.client.post('/server/api/updateuserinfo',
                         {'email': email, 'handle': 'the best',
                          'description': 'likes studying', 'rng': 100,
                          'lat': 0, 'lng': 0,
                          'gender': 'Male',
                          'pet': 'True',
                          'smoke': 'True',
                          'sleep_late': 'True',
                          'rise_early': 'True',
                          'neat': 'True',
                          'friends': 'True',
                          'music': 'True',
                          'language': 'english',
                          'budget': 500,
                          'dishes': 'True',
                          'skimpy': 'True',
                          'drink': 'True',
                          'drugs': 'True',
                          'shower': 'True',
                          'tv': 'True',
                          'gender_pref': 'True',
                          'pet_pref': 'True',
                          'smoke_pref': 'True',
                          'sleep_late_pref': 'True',
                          'rise_early_pref': 'True',
                          'neat_pref': 'True',
                          'friends_pref': 'True',
                          'music_pref': 'True',
                          'language_pref': 'True',
                          'dishes_pref': 'True',
                          'skimpy_pref': 'True',
                          'drink_pref': 'True',
                          'drug_pref': 'True',
                          'shower_pref': 'True',
                          'tv_pref': 'True'})
