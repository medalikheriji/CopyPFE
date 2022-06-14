const expressAsyncHandler = require("express-async-handler");
const Timesheet = require("../models/timesheet");


exports.addTimesheet =async (req, res) => {
    const { date_deb, date_fin,date_approb,ligne} = req.body;
    const ss = Timesheet.create({
        date_deb,
        date_fin,
        date_envoi  : Date.now(),
        date_approb,
        ajouter_par :"jjjj",
        matricule: "hamza",
        ligne
    })
    if (ss)
    {
        res.status(200).json("Timesheet Add...");
    }

}
  
exports.findTimesheet = async (req, res) => {
    const ss = await Timesheet.find({}).populate("ajouter_par" , "firstname lastname matricule");
    res.json(ss);
  
}


exports.deleteTimesheet = async (req, res) => {
    try {
        await Timesheet.findByIdAndDelete(req.params.id);
        res.status(200).json("Timesheet has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
}
  
exports.updateTimesheet = async (req, res) => {
    const existsheet = await Timesheet.findById(req.params.id);
    if (existsheet) {
      existsheet.date_deb = req.body.date_deb || existsheet.date_deb;
      existsheet.date_fin = req.body.date_fin || existsheet.date_fin;
      existsheet.date_approb = Date.now();


      const StyleSheet = await existsheet.save();
      res.json({
          StyleSheet,
      });
    } else {
      res.status(404);
      throw new Error("Timesheet not found !");
    }
}

exports.updateTimesheetTime = async (req, res) => {
  const existsheet = await Timesheet.findById(req.params.id);
  if (existsheet) {
    existsheet.date_deb = req.body.date_deb || existsheet.date_deb;
    existsheet.date_fin = req.body.date_fin || existsheet.date_fin;
    existsheet.date_approb = Date.now();


    const StyleSheet = await existsheet.save();
    res.json({
        StyleSheet,
    });
  } else {
    res.status(404);
    throw new Error("Timesheet not found !");
  }
}