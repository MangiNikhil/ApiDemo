const database = require("./database"); 
const express = require("express");
const booky = express();
booky.use(express.json());

/*
route          /
description    get all the books
access         public
params         none
methods        get
*/
booky.get("/",(req,res)=>{

   return res.json({books:database.books});

});


/*
route          /is/
description    specific book  book on isbn 
access         public
params         isbn
methods        get
*/
booky.get("/is/:isbn",(req,res)=>{
    const id=req.params.isbn;
    const splbook=database.books.filter((bok)=>  id == bok.ISBN );
    console.log(id)
    console.log(splbook)
    if(splbook.length===0){
        return res.json({error:`No book for the Isbn of ${id} is found. `});
    }
    return res.json({books:splbook});
 
 });


 /*
route          /ca/
description    specific book  book on category 
access         public
params         cat
methods        get
*/
booky.get("/category/:cat",(req,res)=>{
    const cati=req.params.cat;
    const samecatibooks=database.books.filter((bok)=> bok.category.includes(cati) );
    if(samecatibooks.length===0){
        return res.json({error:`No book for the Isbn of ${cati} is found. `});
    }
    return res.json({books:samecatibooks});
 
 });

 
 /*
route          /lang/
description    specific book  based on lang
access         public
params         lan
methods        get
 */

booky.get("/lang/:lan",(req,res)=>{
    const lani=req.params.lan;
    const speclanbook=database.books.filter((bok)=> lani == bok.language);
    if(speclanbook.length==0){
        return res.json({books:`no books on the given language ${lani} is found `});
    }
    return res.json({books:speclanbook})
});


/*
route          /a/
description    to get all the authors
access         public
params         none
methods        get
 */

booky.get("/a",(req,res)=>{
    const allauthors=database.authors
    return res.json({books:allauthors})
});

 /*
route          /a/:aid
description    specific author based on id
access         public
params         aid
methods        get
 */

booky.get("/a/lan/:aid",(req,res)=>{
    const autid=req.params.aid;
    const speaut=database.authors.filter((bok)=> autid == bok.id );
    if(speaut.length==0){
        return res.json({books:`no books on the given language ${autid} is found `});
    }
    return res.json({books:speaut})
});


 /*
route          /a/autbok/:bid
description    list of authors based on book 
access         public
params         bid
methods        get
 */

booky.get("/a/autbok/:bid",(req,res)=>{
    const bidn=req.params.bid;
    const autarr=database.authors.filter((bok)=> bok.books.includes(bidn) );
    if(autarr.length == 0){
        return res.json({books:`no auts found for  the given bookid ${bidn}  `});
    }
    return res.json({books:autarr})
});

/*
route          /p
description    to get all the publications
access         public
params         none
methods        get
 */

booky.get("/p",(req,res)=>{
    const allpubs=database.publications
    return res.json({books:allpubs})
});


 /*
route          /p/
description    specific pubs based on id
access         public
params         pid
methods        get
 */

booky.get("/p/:pid",(req,res)=>{
    const puid=req.params.pid;
    const specpub=database.publications.filter((bok)=> bok.id == puid );
    if(specpub.length == 0){
        return res.json({books:`no auts found for  the given bookid ${puid}  `});
    }
    return res.json({books:specpub})
});


 /*
route          /p/b/
description    list of authors based on book 
access         public
params         bid
methods        get
 */

booky.get("/p/b/:bid",(req,res)=>{
    const bidn=req.params.bid;
    const pubs=database.publications.filter((bok)=> bok.books.includes(bidn) );
    if(pubs.length == 0){
        return res.json({books:`no auts found for  the given bookid ${bidn}  `});
    }
    return res.json({books:pubss})
});

booky.listen(3000,()=>{
    console.log("we're running on 3000 port");
})


