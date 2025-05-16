const appointmentService = require('./appointment-service');
const patientService = require('./patient-service');

exports.handler = async (event) => {
    console.log("Received event:", JSON.stringify(event, null, 2));

    // Safely get path or default to empty string
    const path = event?.path || '';

    if (path.includes('appointment')) {
        return await appointmentService.handler(event);
    } else if (path.includes('patient')) {
        return await patientService.handler(event);
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid path' }),
        };
    }
};

