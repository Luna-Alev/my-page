const db = require('../utils/db');

const getProjects = async (req, res) => {
    console.log('Getting projects')
    const category = req.query.category;
    const sql = 'SELECT pr.Id, pr.Title, im.Url FROM Projects pr INNER JOIN Images im ON pr.Id = im.project_id WHERE Category = ?';
    db.query(sql, [category], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Database query failed' });
        };
        console.log(result);
        res.json(result);
    });
};

module.exports = {
    getProjects,
};