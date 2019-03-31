#!/usr/bin/env python

# Copyright 2016 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START imports]
import os
import urllib

from google.appengine.api import users
from google.appengine.ext import ndb

import jinja2
import webapp2

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)
# [END imports]


# [START main_page]
class MainPage(webapp2.RequestHandler):

    def get(self):

        template_values = {'javascript_file': "/static/js/apolonius.js"}
        template = JINJA_ENVIRONMENT.get_template('templates/canvas.html')
        self.response.write(template.render(template_values))
# [END main_page]

class SlidePage(webapp2.RequestHandler):
    """docstring for SlidePage"""
    def get(self):
        caso = self.request.get('caso', "index")
        if caso == "index":
            template = JINJA_ENVIRONMENT.get_template('templates/index.html')
            self.response.write(template.render({}))

        else:
            template = JINJA_ENVIRONMENT.get_template('templates/slides.html')
            template_values = {'javascript_file': "/static/js/%s.js"%caso}
            self.response.write(template.render(template_values))



# [START app]
app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/slide', SlidePage),
], debug=True)
# [END app]