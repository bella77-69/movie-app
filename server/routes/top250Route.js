const express = require("express");
const router = express.Router()
const fs = require("fs");
const { v4: uuidv4} = require('uuid');
const path = require('path');

const top250 = path.join(__dirname, '../data/top250.json');

function listSoon() {
    return JSON.parse(fs.readFileSync('./data/top250.json', 'utf-8'));
}

function getListSoonById(id) {
    const listArr = listSoon();
    let filteredList = listArr.find(item => item.id === id);
    return filteredList;
}

function addList(body) {
    const listArr = listSoon();
    const list = new List(body.title, body.year, body.image, body.genere, body.plot )
    listArr.push(list)

    fs.writeFileSync(top250, JSON.stringify(listArr));
    return list;
}

function List(title, year, image, genere, plot) {
    this.id = uuidv4();
    this.title = title;
    this.year = year;
    this.image = image;
    this.genere = genere;
    this.plot = plot;
}

router.get('/', (req, res) => {
    const list = listSoon();
    res.status(200).json(list);
});

router.get('/:id', (req, res) => {
    console.log(req.params.id);
        fs.readFile('./data/top250.json', 'utf-8', (err, data) => {
            if(err) {
                console.log(err);
                res.json({message: 'error getting movie id data'});
            }
    const listData = JSON.parse(data);
	const foundList = listData.find((data) => 
		data.id == req.params.id);
        console.log(req.params.id)
        if(!foundList) {
            res.json({message:'error getting data'});
        } else {
            res.status(200).send(foundList);
        }
	})

});


let post = [];

router.post('/', (req, res) => {
    const newPost = {
        title: req.body.title,
        year: req.body.year,
        image: req.body.image,
        genere: req.body.genere,
        plot: req.body.plot
    }
if(!req.body.title || !req.body.year || !req.body.image || !req.body.genere || !req.body.plot) {

    res.status(400).json({
        error: "POST body must contain all required properties",
        requiredProperties: ['title', 'year', 'image', 'genere', 'plot']
    });
}
post.push(newPost);
console.log(post);
res.json(addList(req.body));
});

module.exports = router;