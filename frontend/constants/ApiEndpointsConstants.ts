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
    },
    SendOrders: {
        method: 'POST',
        url: 'https://www.dropshipping.api/api/orders/add'
    },
    GetExtract: {
        method: 'GET',
        url: `https://www.dropshipping.api/api/offers/{supplier}/extract/{field-name}/{operation}`
    },
    GetExtractWithParams: (fieldName?: string, operation?: string) => ({
        method: 'GET',
        url: `https://www.dropshipping.api/api/offers/{supplier}/extract/${fieldName ?? '{field-name}'}/${operation ?? '{operation}'}`
    })
};