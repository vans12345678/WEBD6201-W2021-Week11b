// Express Configuration
import express from 'express';
export const router = express.Router();

// Contact Model
import * as ContactModel from "../Models/contact";
const Contact = ContactModel.Model; // Contact Alias


/* GET home page - with / */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home', displayName: ''   });
});

/* GET home page - with /home */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home', displayName: ''    });
});

/* GET about page - with /about */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About Us', page: 'about', displayName: ''    });
});

/* GET services page - with /services */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Our Services', page: 'services', displayName: ''    });
});

/* GET projects page - with /projects */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Our Projects', page: 'projects', displayName: ''    });
});

/* GET contact page - with /contact */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Us', page: 'contact', displayName: ''    });
});

/* GET login page - with /login */
router.get('/login', function(req, res, next) 
{
  res.render('index', { title: 'Login', page: 'login', displayName: ''    });
});

/* GET login page - with /login */
router.post('/login', function(req, res, next) 
{
  res.render('index', { title: 'Contact List', page: 'contact-list', displayName: req.body.username});
});

/* GET login page - with /login */
router.get('/logout', function(req, res, next) 
{
  res.render('index', { title: 'Logout', page: 'logout', displayName: ''    });
});


/* GET register page - with /register */
router.get('/register', function(req, res, next) 
{
  res.render('index', { title: 'Register', page: 'register', displayName: ''    });
});

/* temporary routes - mocking up login / register and contact-list related pages */
/* GET register page - with /register */
router.get('/contact-list', function(req, res, next) 
{
    //res.render('index', { title: 'Contact List', page: 'contact-list', displayName: 'temp'  });

    Contact.find(function(err, contacts){
      if(err)
      {
        return console.error(err);
      }
      res.json(contacts);
    });

});

/* Display edit/:id page - with /edit/:id */
router.get('/edit/:id', function(req, res, next) 
{
  res.render('index', { title: 'Edit', page: 'edit', displayName: ''    });
});

/* Display edit/:id page - with /edit/:id */
router.post('/edit/:id', function(req, res, next) 
{
  res.redirect('/contact-list');
});


/* Display add page - with add */
router.get('/add', function(req, res, next) 
{
  res.render('index', { title: 'Add', page: 'edit', displayName: ''    });
});

/* Display add page - with add  */
router.post('/add', function(req, res, next) 
{
  res.redirect('/contact-list');
});

/* Process delete:id page - with /delete/:id */
router.get('/delete/:id', function(req, res, next) 
{
  res.render('index', { title: 'Delete', page: 'delete', displayName: ''    });
});


//module.exports = router;