const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const multer = require('multer')
const path = require('path')
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");


/** connect to bd */

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "checkin"
})

/** front host */

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(express.static("./public"));
app.use(express.json());

app.use(session({
    key: "userId",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1000 * 60 * 60 * 24,
    },
}));

/** check if session exist */

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({
            loggedIn: true,
            picture: req.session.user[0].picture,
            firstname: req.session.user[0].firstname,
            lastname: req.session.user[0].lastname
        })
    } else {
        res.send({
            loggedIn: false
        })
    }
})

/** login script */
app.post("/Login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sqlSelect = "SELECT * FROM users WHERE `username` = ? and `password` = ?";
    db.query(sqlSelect, [username, password], (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            if (result.length == 0) {
                res.send({
                    message: "Authentication failed"
                })
            } else {
                req.user = result;
                res.send(result);
            }
        }
    });
});

/** fon login script */



/** logout sceript */

app.post("/logout", (req, res) => {
    req.session.destroy();
});

app.listen(3001, () => {
    console.log("running")
});

/** fin logout script */

/** ajouter annonce script */
app.post("/addannonce", (req, res) => {
    const firstnameRef = req.body.firstnameRef;
    const lastnameRef = req.body.lastnameRef;
    const cinRef = req.body.cinRef;
    const emailRef = req.body.emailRef;
    const phoneRef = req.body.phoneRef;
    const locationRef = req.body.locationRef;
    const dateRef= req.body.dateRef;   
    const priceRef = req.body.priceRef;
    const property = req.body.property;  
    const descRef = req.body.descRef;
   
    const sqlSelect = "INSERT INTO `annonce` (`id_annonce`, `firstname`, `lastname`, `cin`, `email`, `phone`, `location`, `date`, `price`, `property`,`description`) VALUES (NULL,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlSelect, [firstnameRef,lastnameRef,cinRef,emailRef,phoneRef,locationRef,dateRef,priceRef, property,descRef ], (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            res.send({
                message: "Operation completed"
                
            })

        }
    });
});
/** fin ajouter annonce script */


/** select afficher users script */

app.get("/afficheusers", (req, res) => {
    const sqlSelect = "SELECT * FROM `users`";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            if (result.length == 0) {
                res.send({
                    message: "No Rows"
                })
            } else {
                res.send(result);
            }
        }
    });
});

/** fin select afficher usersscript */

/**Script liste annonce */
app.get("/annonce", (req, res) => {
    const sqlSelect = "SELECT * FROM `annonce`";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            if (result.length == 0) {
                res.send({
                    message: "No Rows"
                })
            } else {
                res.send(result);
            }
        }
    });
});

/**fin script annonces */

/** script delete annonces */
app.post("/deleteannonce", (req, res) => {
    const id_ann = req.body.id_ann;
    const sqlSelect = "DELETE FROM `annonce` WHERE `id_annonce` = ?";
    db.query(sqlSelect, [id_ann], (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            res.send({
                message: "Operation completed"
            })
        }
    })
  })
/** script fin delete annonces */


/* script affiche reservation */

app.get("/reserve", (req, res) => {
    const sqlSelect = "SELECT * FROM `reservation` ";
    db.query(sqlSelect, (err, result) => {
      if (err) {
        res.send({
          err: err,
        });
      } else {
        if (result.length == 0) {
          res.send({
            message: "No Rows",
          });
        } else {
          res.send(result);
        }
      }
    });
  });

/* script fin affiche reservation */


/** script delete reservations */
app.post("/deletereservation", (req, res) => {
    const id_res = req.body.id_res;
    const sqlSelect = "DELETE FROM `reservation` WHERE `id_reservation` = ?";
    db.query(sqlSelect, [id_res], (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            res.send({
                message: "Operation completed"
            })
        }
    })
  })

/** script fin delete reservationss */




