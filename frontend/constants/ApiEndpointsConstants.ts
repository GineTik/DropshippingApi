export default {
    AuthHeaders: {
		'x-dropshipping-api-key': '{api-key}'
	},
    GetFilteredOffers: {
        method: 'GET',
        url: 'https://www.dropshipping.api/api/offers/{supplier}/filter',
    },
    GetOneOffer: {
        method: 'GET',
        url: 'https://www.dropshipping.api/api/offers/{supplier}/one'
    }
};