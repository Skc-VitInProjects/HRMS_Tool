import { getPipelines } from '../../services/pipeline/pipeline.services.js';
import roles from '../../constants/roles.json';

const allowedRoles = [roles.SUPERADMIN, roles.ADMIN, roles.HR];

const pipelineController = (socket, io) => {
  socket.on('pipeline/list', async (data) => {
    try {
      const { companyId, role } = socket;
      if (!companyId || !allowedRoles.includes(role)) {
        socket.emit('pipeline/error', { message: 'Unauthorized or missing companyId.' });
        return;
      }
      const pipelines = await getPipelines(companyId);
      socket.emit('pipeline/list', pipelines);
    } catch (error) {
      socket.emit('pipeline/error', { message: error.message });
    }
  });
};

export default pipelineController;
