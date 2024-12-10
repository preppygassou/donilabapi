const { Post, Category,Tag, User } = require('../models');

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    if (req.body.categories) {
      await post.setCategories(req.body.categories);
      
    }
    if (req.body.tags) {
      await post.setTags(req.body.tags);
      
    }
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: Category },
        { model: Tag },
        { model: User, as: 'author', attributes: ['id', 'name', 'email'] }
      ]
    });
    res.json(posts.map(post => ({
      ...post.toJSON(),
      categories: post.Categories,
      tags: post.Tags
    })));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        { model: Category},
        { model: Tag },
        { model: User, as: 'author', attributes: ['id', 'name', 'email'] }
      ]
    });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({
      ...post.toJSON(),
      categories: post.Categories,
      tags: post.Tags
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    await post.update(req.body);
    if (req.body.categories) {
      await post.setCategories(req.body.categories);
    }
    if (req.body.tags) {
      await post.setTags(req.body.tags);
    }
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    await post.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};