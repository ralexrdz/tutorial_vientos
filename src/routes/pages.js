module.exports = function()
{ return [
	{
		method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.view('home')
		}
	},
	{
		method: 'GET',
    path: '/day',
    handler: function (request, reply) {
    	reply.view('day')
		}
	},
	{
		method: 'GET',
    path: '/events-list', 
    handler: function (request, reply) {
      reply.view('events-list')
		}
	},
	{
		method: 'GET',
    path: '/modal',
    handler: function (request, reply) {
      reply.view('modal')
		}
	},
		{
		method: 'GET',
    path: '/month-day',
    handler: function (request, reply) {
    	reply.view('month-day')
		}
	},
	{
		method: 'GET',
    path: '/month', 
    handler: function (request, reply) {
      reply.view('month')
		}
	},
	{
		method: 'GET',
    path: '/week-days',
    handler: function (request, reply) {
      reply.view('week-days')
		}
	},
		{
		method: 'GET',
    path: '/week',
    handler: function (request, reply) {
    	reply.view('week')
		}
	},
	{
		method: 'GET',
    path: '/year-month', 
    handler: function (request, reply) {
      reply.view('year-month')
		}
	},
	{
		method: 'GET',
    path: '/year',
    handler: function (request, reply) {
      reply.view('year')
		}
	},
	{
		method: 'GET',
    path: '/parameters/{param1}',
    handler: function (request, reply) {
      reply.view('parameters',request.param1)
		}
	}
]}()
 
