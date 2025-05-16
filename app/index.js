const appointmentService = require('./appointment-service');
const patientService = require('./patient-service');

exports.handler = async (event) => {
    if (event.path.includes('appointment')) {
        return await appointmentService.handler(event);
    } else if (event.path.includes('patient')) {
        return await patientService.handler(event);
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid path' }),
        };
    }
};

