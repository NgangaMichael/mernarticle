const Blogs = require('../models/blogmodel');

exports.blogs = async (req, res) => {
    try {
        const blogs = await Blogs.find()
        res.json(blogs)
    } catch (error) {
        console.log('Err on home', error)
    }
}

exports.blogdetails = async(req, res) => {
    try {
        const {id} = req.params;
        const blog = await Blogs.findById(id)
        res.json(blog)
    } catch (error) {
        console.log('Err on details', error)
    }
}

exports.editblog = async (req, res) => {
    try {
        const {id} = req.params;
        const blog = await Blogs.findById(id)
        res.json(blog)
    } catch (error) {
        console.log('Err on edit route', error)
    }
}

exports.addblog = async (req, res) => {
    try {
        const { title, subtitle, body, author } = req.body;

        // Create a new Blog instance and set the properties
        const newBlog = new Blogs({
            title: title,
            subtitle: subtitle,
            body: body,
            author: author,
            image: req.file.filename
        });
        await newBlog.save();
    } catch (error) {
        console.log('Err on add blog', error)
    }
}

exports.updateblog = async (req, res) => {
    try {
        const {id} = req.params;
        await Blogs.findByIdAndUpdate(id, {...req.body})
    } catch (error) {
        console.log('Err on update blog', error)
    }
}

exports.deleteblog = async (req, res) => {
    try {
        const {id} = req.params;
        await Blogs.findByIdAndRemove(id)
    } catch (error) {
        console.log('Err on delete route', error)
    }
}