import { db } from '../database/database.connection.js';

export async function getAllGames(req, res) {
    try {
        const games = await db.query("SELECT * FROM games");
        res.send(games.rows)

    } catch (error) {
        res.send(500).send(error.message)
    }
}

export async function registerNewGame(req, res) {
    const {name, image, stockTotal, pricePerDay} = req.body;

    try {
        const registerGame = await db.query(`
            INSERT INTO games (name, image, "stockTotal", "pricePerDay") 
                VALUES ('${name}', '${image}', '${stockTotal}', '${pricePerDay}')`)
        res.sendStatus(201)

    } catch (error) {
        res.send(500).send(error.message)
    }
}