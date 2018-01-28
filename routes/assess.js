var express = require('express');
var router = express.Router();
var assess = require('../model/assessment');
assess.find().count(function(err,count){
  global.recount=count;
  console.log(recount);
});
router.use(function(req, res, next) {
     req.assess = assess;
     next();
});

router.get('/', function(req, res,next) {
  //BookApi.getAllBooks(function(err, items)
  // {
  //  res.render('book/index', {title: 'Books', books: items})
  //  res.json(items);
	// });
  assess.find(function(err, items,next) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                else
                {
               // console.log(items);
                res.json(items);
                }

                
                });
  
});

/*router.get('/create', function(req, res) {
	//res.render('book/create');
  res.json();
});*/

router.post('/', function(req, res,next) {
  let ass = new assess();
  ass.author = req.body.author;
  ass.title = req.body.title;
  ass.isbn = req.body.isbn;
  ass.publicationdate = req.body.publicationdate;
  ass.publisher = req.body.publisher;
  ass.price = req.body.price;
  ass.genre = req.body.genre;
  ass.format = req.body.format;
  
  ass.id=++recount;
  /*BookApi.saveBook(book, function(err, book) {
	  //res.redirect('/book');
    res.send(book);
  });*/
  //var new_book= new books(req.body);
ass.save(function(err, ass) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                   {
                     res.send(err);
                    res.json("failed to add");
                   }
                else
                {
               // console.log(book);
                //console.log(book.id);
                //res.send(item);
                res.json(ass);
                }

                
                });
  
});

router.get('/:id', function(req, res) {
  /*BookApi.getBookById(req.params.id, function(err, book) {
    //res.render('book/edit', {book: book});
    res.json(book);
  });*/
  assess.findOne({id:req.params.id},function(err, assess) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                else
                //console.log(books);
                res.json(assess);

                /*db.close(function(){
        console.log("close");
                });*/
                
    });

});

router.put('/:id', function(req, res) {
  var updatedAss = {};
  updatedAss.author = req.body.author;
  updatedAss.title = req.body.title;
  updatedAss.price = req.body.price;
  updatedAss.isbn = req.body.isbn;
  updatedAss.publicationdate = req.body.publicationdate;
  updatedAss.publisher = req.body.publisher;
  updatedAss.genre = req.body.genre;
  updatedAss.format = req.body.format;
  /*BookApi.updateBookById(req.params.id, updatedBook, function(err) {
		//	res.redirect('/book');
    res.json(updatedBook);
  });*/
  assess.findOneAndUpdate({id: req.params.id}, req.body, {new: true}, function(err, updatedBook) {
    if (err)
      res.send(err);
    res.json( updatedAss);
  });

});

router.delete('/:id',function(req, res) {
  
  assess.remove({
    id: req.params.id
  }, function(err, ass) {
    if (err)
      res.send(err);
    res.json(ass);
  });
});

//router.options("*",cors());
module.exports = router;