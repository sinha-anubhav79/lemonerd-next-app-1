import dbConnect from '../../../database/dbconnect';
import Post from '../../../database/postSchema';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const posts = await Post.find({});

                res.status(200).json({ success: true, data: posts })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {

                const post = await Post.create(req.body);
                console.log(req.body);

                res.status(201).json({ success: true, data: post })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
