

module.exports = {
    getTrips: async (req, res, next) => {
        const { id } =  req.session.user;
        console.log(req.session)
        const db = req.app.get("db");
        const trips = await db.get_trips(id);
        res.status(200).send(trips)
    },

    addTrip: async (req, res, next) => {
        const { id } = req.session.user;
        console.log(req.session);
        const { starting_city, starting_date, ending_city, ending_date } = req.body
        const db = req.app.get('db');
        await db.add_trip(starting_city, starting_date, ending_city, ending_date, id);
        res.status(200).send("Added to trips");

    },

    deleteTrip: async (rea, res, next) => {
        const { id } = req.params;
        const db = req.app.get("db");
        await db.delete_trip(id);
        
    }
}