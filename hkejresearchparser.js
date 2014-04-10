/**
 * Created by macpro on 5/4/14.
 */
var request = require('request');
var cheerio = require('cheerio');
var moment = require('moment');

function feedparse()
{

    var url = 'http://stock360.hkej.com/marketWatch/Report';
    request(url, function(err, resp, body) {
        if (err)
            throw err;

        $ = cheerio.load(body);

        var parsedResults = [];
        $('.table-rollout').each(function(i, element){

            var code = $(this).children('.code').text();
            var name = $(this).children('.name').text();
            var sector = $(this).children('.sector').text();
            var firm = $(this).children('.firm').text();
            var action1 = $(this).children('.action1').text();
            var action2 = $(this).children('.action2').text();
            var targetPrice1 = $(this).children('.targetPrice1').text();
            var targetPrice2 = $(this).children('.targetPrice2').text();
            var summary = $(this).children('.summary').text();

            var metadata = {
                code            : $(this).children('.code').text(),
                name            : $(this).children('.name').text(),
                sector          : $(this).children('.sector').text(),
                firm            : $(this).children('.firm').text(),
                action1         : $(this).children('.action1').text(),
                action2         : $(this).children('.action2').text(),
                targetPrice1    : $(this).children('.targetPrice1').text(),
                targetPrice2    : $(this).children('.targetPrice2').text(),
                summary         : $(this).children('.summary').text()
            };

            parsedResults.push(metadata);
            console.dir(metadata);
        });
    });



}
feedparse();
setInterval(feedparse, 1800000);