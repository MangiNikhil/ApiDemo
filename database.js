const books=[
   
    {
        ISBN:"b1",
        title:"VB1",
        pubDate:"2021-02-30",
        language:"en",
        numPage:250,
        author:[1,2],
        publication:[1],
        category:["adv","drama","action"]
    },
    {
        ISBN:"b11",
        title:"VB11",
        pubDate:"2021-02-32",
        language:"en",
        numPage:251,
        author:[1,2],
        publication:[1],
        category:["adv","drama"]
    },
    {
        ISBN:"b111",
        title:"VB111",
        pubDate:"2021-02-33",
        language:"tel",
        numPage:252,
        author:[1,2],
        publication:[1],
        category:["adv","action"]
    }
];

const authors=[
    {
        id:1,
        name:"nik",
        books:["b1","b111"]
    },
    {
        id:2,
        name:"chandu",
        books:["b11"]
    },
    {
        id:3,
        name:"vedant",
        books:["b1","b111"]
    },    {
        id:4,
        name:"sandeep",
        books:["b11"]
    }
];

const publications = [
    {
        id:1,
        name:"tatepub",
        books:["b1"]
    },
    {
        id:2,
        name:"dhanunjay",
        books:["b11","b1"]
    }
];

module.exports={books,authors,publications};