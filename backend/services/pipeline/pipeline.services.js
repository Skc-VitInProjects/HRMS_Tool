import Pipeline from '../../models/pipeline/pipeline.schema.js';

export const getPipelines = async (companyId) => {
  try {
    const pipelines = await Pipeline.find({ companyId });
    return pipelines;
  } catch (error) {
    throw new Error('Error fetching pipelines: ' + error.message);
  }
};
