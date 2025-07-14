import mongoose from 'mongoose';

const PipelineSchema = new mongoose.Schema({
  Pipeline_Name: { type: String, required: true },
  Total_Deal_Value: { type: Number, required: true },
  No_of_Deals: { type: Number, required: true },
  Stages: { type: String, required: true },
  Created_Date: { type: Date, default: Date.now },
  Status: { type: String, enum: ['Active', 'InActive'], default: 'Active' },
  companyId: { type: String, required: true }, // For multi-tenancy
}, { timestamps: true });

export default mongoose.models.Pipeline || mongoose.model('Pipeline', PipelineSchema);
