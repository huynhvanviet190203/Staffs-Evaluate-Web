const mongoose = require('mongoose')
const evaluteSchema = new mongoose.Schema({
    staffId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Staff',
      required: true,
    },
    thoigianphanhoi: {
      type: String,
      required: true,
      enum: ['Nhanh', 'Chậm'],
      default: 'Nhanh'
    },
    thaidophucvu: {
      type: String,
      required: true,
      enum: ['Lịch sự, Niềm nở', 'Hời hợt, Cẩu thả'],
      default: 'Lịch sự',
    },
    kienthucvathongtin: {
      type: String,
      required: true,
      enum: [
        'Có kiến thức chuyên môn của nhân viên tiếp dân về các quy trình, quy định, dịch vụ và thông tin liên quan đến ủy ban nhân dân.',
        'Thiếu kiến thức và chuyên môn, chưa đáp ứng được các yêu cầu của người dân.',
      ],
      default: 'Có kiến thức chuyên môn của nhân viên tiếp dân về các quy trình, quy định, dịch vụ và thông tin liên quan đến ủy ban nhân dân. Nhân viên nên có khả năng cung cấp thông tin chính xác và chi tiết cho người dân.',
    },
    ykiendonggop: {
      type: String,
      required: true,
      default: 'sd'
    },
    created: {
      type: Date,
      required: true,
      default: Date.now,
    },
  });
  

module.exports = mongoose.model('evalutes', evaluteSchema)



