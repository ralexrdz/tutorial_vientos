module.exports = function()
{ return [
	{
	method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.view('home');
		}
	},
	{
	method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.view('calendar');
		}
	},
		{
			method: 'GET',
		    tmplsPath: '/', //'/templs/modal, '/templs',? igual acá, cómo iría la ruta
		    handler: function (request, reply) {
		        reply.view('year');
			}
		},
			

	{
	method: 'GET',
    path: '/about',
    handler: function (request, reply) {
        reply.view('about');
		}
	},
	{
	method: 'GET',
    path: '/parameters/{param1}',
    handler: function (request, reply) {
        reply.view('parameters',request.params);
		}
	}
]}()
 
