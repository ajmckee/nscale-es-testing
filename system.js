// Define the system topology here. The topolgy should reference 
// containers defined in definitions/services.js

exports.name = 'esaj';
exports.namespace = 'esaj';
exports.id = '2541616a-5d56-4690-aecd-bb6fd3224b6f';

exports.topology = {
	local: {
		root: ['elasticsearch']
	}
	// development: {
	// 	root: [
	// 		{
	// 			machine: {
	// 				contains: ['elasticsearch'],
	// 				{
	// 					specific: {
	// 						ipAddress: '127.0.0.1'
	// 					}
	// 				}
	// 			}
	// 		}
	// 	]
	// }
};
