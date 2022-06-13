
const express = require('express');
const router = express.Router();
const timesheetController = require('../controllers/timesheetController');

router.post('/',timesheetController.addTimesheet);
router.get('/',timesheetController.findTimesheet);
router.delete('/:id',timesheetController.deleteTimesheet);
router.put('/:id',timesheetController.updateTimesheet);

module.exports = router ; 



// router.post(
    //     "/add",
    //     protect,
    //     asyncHandler(async (req, res) => {
    //         const { date_deb, date_fin,ajouter_par,matricule } = req.body;
    //         const ss = StyleSheet.create({
    //             date_deb,
    //             date_fin,
    //             date_envoi  : Date.now(),
    //             date_approb: Date.now(),
    //             ajouter_par,
    //             matricule
    //         })
    //         if (ss)
    //         {
    //             res.status(200).json("StyleSheet Add...");
    //         }
        
    //     })
    //   );
      
    //   router.get(
    //     "/",
      
    //     asyncHandler(async (req, res) => {
    //       const ss = await StyleSheet.find({}).populate("ajouter_par" , "firstname lastname matricule");
    //       res.json(ss);
    //     })
    //   );
      
    
    //   router.delete(
    //     "/:id",
    //     async (req, res) => {
    //       try {
    //         await StyleSheet.findByIdAndDelete(req.params.id);
    //         res.status(200).json("StyleSheet has been deleted...");
    //       } catch (err) {
    //         res.status(500).json(err);
    //       }
    //     }
    //   );
      
    
    //   router.put(
    //     "/envoye/:id",
      
    //     async (req, res) => {
    //       try {
    //        const ss = await StyleSheet.findById(req.params.id);
    //         if (ss)
    //         {
    //             ss.Statut = "Envoyé";
    //             ss.date_envoi = Date.now()
    //             await ss.save();
    //             res.status(201).json("StyleSheet Envoye success...");
    //         }
    //         else{
    //             res.status(404).json("StyleSheet Non trouver...");
    
    //         }
            
    //       } catch (err) {
    //         res.status(500).json(err);
    //       }
    //     }
    //   );
    
    //   router.put(
    //     "/:id",
    //     protect,
    //     asyncHandler(async (req, res) => {
    //       const existsheet = await StyleSheet.findById(req.user._id);
    //       if (existsheet) {
    //         existsheet.date_deb = req.body.date_deb || existsheet.date_deb;
    //         existsheet.date_fin = req.body.date_fin || existsheet.date_fin;
    //         existsheet.date_approb = Date.now();
      
      
    //         const StyleSheet = await existsheet.save();
    //         res.json({
    //             StyleSheet,
    //         });
    //       } else {
    //         res.status(404);
    //         throw new Error("StyleSheet not found !");
    //       }
    //     })
    //   );
      
