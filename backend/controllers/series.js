const pool = require("../models/db");

const addSeries = (req, res) => {
  const {
    title,
    description,
    genre,
    trailer,
    poster,
    rate,
    actors,
    director,
    writers,
    episodes,
    created_at,
  } = req.body;
  const query = `insert into series (title , description , genre , trailer , poster , rate , actors , director , writers , episodes , created_at) Values ('${title}','${description}','${genre}','${trailer}','${poster}','${rate}','${actors}','${director}','${writers}','${episodes}','${created_at}') RETURNING *`;
  pool
    .query(query)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "series added successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "error in adding the series",
        error: err.message,
      });
    });
};

const getSeries = (req, res) => {
  const query = `select * from series WHERE is_deleted=0`;
  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "getting all series",
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "error while getting series",
        error: err.message,
      });
    });
};

const getSeriesById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM series WHERE id = ${id}`;

  pool
    .query(query)
    .then((result) => {
      if (result.rowCount > 0) {
        return res.status(200).json({
          success: true,
          message: `getting the series with id : ${id}`,
          result: result.rows,
        });
      } else {
        res.status(404).json({
          success: false,
          message: `there is no series with id : ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        error: err.message,
      });
    });
};

const deleteSeriesById = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE series SET is_deleted = 1 WHERE id= $1;`;
  const data = [id];

  pool
    .query(query, data)
    .then((result) => {
      if (result.rowCount !== 0) {
        res.status(200).json({
          success: true,
          message: `Series with id: ${id}  deleted successfully`,
        });
      } else {
        throw new Error("Error happened while deleting series");
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: err.message,
      });
    });
};

const getSeriesByActorId = (req, res) => {
  const { id } = req.params;
  console.log("id", id);

  const query = `
  SELECT series.*, actors.actor_name, actors.avatar
  FROM series
  LEFT JOIN series_actor ON series.id = series_actor.series_id
  LEFT JOIN actors ON series_actor.actor_id = actors.id
  WHERE actors.id = $1 AND series.is_deleted = 0;
`;

  pool
    .query(query, [id])
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "series getting successfully",
        result: result.rows,
      });
    })
    .catch((err) => {
      console.log("err", err);

      res.status(500).json({
        success: false,
        message: "Error getting series",
        error: err.message,
      });
    });
};

const getSeriesByDirectorId = (req, res) => {
  const { id } = req.params;

  const query = `
    SELECT series.*, directors.director_name , directors.avatar , writers.writer_name , writers.avatar
    FROM series 
    LEFT JOIN directors ON series.director_id = directors.id
    LEFT JOIN writers ON series.writer_id = writers.id
    WHERE directors.id = $1 AND series.is_deleted = 0;
  `;

  pool
    .query(query, [id])
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "series by the director getting successfully",
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Error getting series by director",
        error: err.message,
      });
    });
};

const getSeriesByWriterId = (req, res) => {
  const { id } = req.params;

  const query = `
    SELECT series.*, directors.director_name , directors.avatar , writers.writer_name , writers.avatar
    FROM series 
    LEFT JOIN directors ON series.director_id = directors.id
    LEFT JOIN writers ON series.writer_id = writers.id
    WHERE directors.id = $1 AND series.is_deleted = 0;
  `;

  pool
    .query(query, [id])
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "series by the writer getting successfully",
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Error getting series by writer",
        error: err.message,
      });
    });
};

module.exports = {
  addSeries,
  getSeries,
  getSeriesById,
  deleteSeriesById,
  getSeriesByActorId,
  getSeriesByDirectorId,
  getSeriesByWriterId
};
