import {articles} from "../../../data";

// damit werden alle Artikel als Liste über eine API abrufbar
export default function handler(req, res) {
    res.status(200).json(articles)
}