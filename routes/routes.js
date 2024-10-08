const express = require('express');
const router = express.Router();
const Staff = require('../models/staffs');
const Evalute = require('../models/evalutes');

const multer = require('multer');
const bcrypt = require('bcrypt');
const fs = require('fs');
const { request } = require('http');  
const evalutes = require('../models/evalutes');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file,  cb) {
    cb(null,  file.originalname);
  }
});

var upload = multer({
    storage: storage,
}).single("image")

router.get("/", (req, res) => {
    res.render("index", {title: "Home Page"})
});



router.post("/add", upload, (req, res) => {
    const staff = new Staff({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      image: req.file.filename,
      sdt: req.body.sdt, // Assuming 'image' is the field name for the uploaded file
      address: req.body.address,
      birthday: req.body.birthday,
      workday: req.body.workday 
      
       // Assuming 'image' is the field name for the uploaded file
    });
  
    staff.save()
      .then(() => {
        req.session.message = {
          type: 'success',
          message: 'Thêm nhân viên thành công' // Use Vietnamese for success message
        };
        res.redirect("/add_list");
      })
      .catch(err => {
        res.json({
          message: err.message,
          type: 'danger'
        });
      });
  });


router.get("/add", (req, res) => {
    res.render("add_staffs", {title:"Add staffs" })
});


router.get("/add_list", (req, res) => {
  Staff.find().exec()
    .then((staffs) => {
      res.render("add_list", {
        title: "Add staffs",
        staffs: staffs,
      });
    })
    .catch((err) => {
      res.json({ message: err.message });
      console.error(err);
    });
});

router.get('/edit/:id', (req, res) => {
  let id = req.params.id;
  Staff.findById(id).exec()
    .then(staff => {
      if (staff == null) {
        res.redirect("/add_list");
      } else {
        res.render("edit_staffs", {
          title: "Edit staff",
          staff: staff,
        });
      }
    })
    .catch(err => {
      res.redirect("/add_list");
    });
});
 
//updare sftaff after edit


router.post('/update/:id', upload, (req, res) => {
  let id = req.params.id.trim();
  let new_image = "";

  if(req.file){ 
    new_image = req.file.filename;
    try {
      fs.unlinkSync("./uploads/" + req.body.old_image)
    }
    catch(err){
      console.log(err);
    }
  }
  else {
    new_image = req.body.old_image;
  }

  Staff.findByIdAndUpdate(id, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    image: new_image,
    address: req.body.address,
    birthday: req.body.birthday,
    workday: req.body.workday
  }).exec()
    .then(result => {
      req.session.message = {
        type: 'success',
        message: 'Đã cập nhật nhân viên'
      };
      res.redirect("/add_list");
    })
    .catch(err => {
      res.json({ message: err.message, type: 'danger' });
    });
})

//delete staff route
router.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  Staff.findByIdAndDelete(id)
    .then(result => {
      if (result.image !== '') {
        try {
          fs.unlinkSync('./uploads/' + result.image);
          console.log('Deleted image:', result.image);
        } catch (err) {
          console.log(err);
        }
      }
      req.session.message = {
        type: 'info',
        message: 'Staff deleted successfully'
      };
      res.redirect('/add_list');
    })
    .catch(err => {
      res.json({ message: err.message });
    });
});


// router.js

router.get("/staff_list", (req, res) => {
  Staff.find().exec()
    .then((staffs) => {
      res.render("staff_list", {
        title: "Staff List",
        staffs: staffs,
      });
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
});


//Evalute route

router.get('/evalute/:staffId', async (req, res) => {
  try {
    const staffId = req.params.staffId;
    const staff = await Staff.findById(staffId);
    if (!staff) {
      return res.status(404).json({ message: 'Không tìm thấy nhân viên' });
    }
    res.render('evalute_staffs', { staff, title: "evalute staff"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi' });
  }
});

// Route để xử lý việc gửi đánh giá nhân viên
router.post('/evalute/:staffId', async (req, res) => {
  try {
    const staffId = req.params.staffId;
    const staff = await Staff.findById(staffId);
    if (!staff) {
      return res.status(404).json({ message: 'Không tìm thấy nhân viên' });
    }

    const evalute = new Evalute({
      staffId: staff._id,
      thoigianphanhoi: req.body.thoigianphanhoi,
      thaidophucvu: req.body.thaidophucvu,
      kienthucvathongtin: req.body.kienthucvathongtin,
      ykiendonggop: req.body.ykiendonggop,
    });

    await evalute.save();
    req.session.message = {
      type: 'success',
      message: 'Thêm đánh giá thành công',
      };
      res.redirect('/staff_list');
      

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi' });
  }
});




router.get('/evalute_results/:staffId', async (req, res) => {
  const staffId = req.params.staffId;

  try {
    // Lấy thông tin chi tiết của nhân viên dựa trên staffId
    const staffDetail = await Staff.findById(staffId);

    // Lấy tất cả các bản ghi đánh giá có staffId tương ứng
    const evaluteResults = await Evalute.find({ staffId: staffId });

    res.render("evalute_results", {
      title: "Evalute Results",
      staff: staffDetail,
      results: evaluteResults,
     
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});



router.get('/login', (req, res) => {
  res.render('login');
  title = 'Đăng nhập'

});

// Xử lý route đăng nhập
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Kiểm tra thông tin đăng nhập
  if (username === 'admin' && password === 'admin') {
    // Đăng nhập thành công
    res.redirect('/add_list');
  } else {
    // Đăng nhập không thành công
    res.send('Đăng nhập không thành công!');
  }
});

module.exports = router;