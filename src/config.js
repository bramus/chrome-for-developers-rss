const endpoint = 'https://developer.chrome.com/_d/dynamic_content';

const data = {
	blog: '[null,null,null,"type:blog",null,null,null,null,10,null,null,null,2]',
	'case-studies': '[null,null,null,"type:case_study",null,null,null,null,10,null,null,null,1]',
	all: '[null, null, null, "tenant:chrome", null, null, null, null, 100, null, null, null, 2, 1]',
};

const headers = {
	accept: '*/*',
	'accept-language': 'en-US,en;q=0.9,nl;q=0.8,fr;q=0.7',
	'content-type': 'text/plain;charset=UTF-8',
};

export { endpoint, data, headers };
