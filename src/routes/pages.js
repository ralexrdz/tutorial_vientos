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
	},
	{
	method: 'GET',
    path: '/login/{juan}',
    handler: function (request, reply) {
        reply.view('login',request.params);

		}
	},
	{
	method: 'POST',
    path: '/login_post',
    handler: function (request, reply) {
	$('#submit')
     reply('Ahuevo');
		}
	}
]}()
 
