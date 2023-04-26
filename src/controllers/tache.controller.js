const tacheCrtl = {};

const Tache = require('../models/tache');

tacheCrtl.rendertacheForm = (req, res) => {
    res.render('taches/new-tache');
}

tacheCrtl.createNewtache = async(req, res) => {
    const { title, description } = req.body;
    const newtache = new Tache({ title, description });
    newtache.user = req.user.id;

    await newtache.save();
    req.flash('success_msg', 'tache added successfully');
    res.redirect('/')
}

tacheCrtl.rendertaches = async(req, res) => {
    const taches = await Tache.find({ user: req.user.id }).sort({ date: 'desc' });
    res.render('taches/all-taches', {
        taches
    });
}

tacheCrtl.renderEditForm = async(req, res) => {
    const tache = await Tache.findById(req.params.id);
    if (tache.user != req.user.id) {
        req.flash('error_msg', 'Not authorized');

        return res.redirect('/taches');
    }
    res.render('taches/edit-tache', {
        tache
    });
}

tacheCrtl.updatetache = async(req, res) => {
    const { title, description } = req.body;

    await Tache.findByIdAndUpdate(req.params.id, {
        title,
        description
    });

    req.flash('success_msg', 'tache updated successfully');

    res.redirect('/taches');
}

tacheCrtl.deletetache = async(req, res) => {
    await Tache.findByIdAndDelete(req.params.id);

    req.flash('success_msg', 'tache deleted successfully');

    res.redirect('/taches');
}

module.exports = tacheCrtl;