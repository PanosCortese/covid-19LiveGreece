// pl-scraper.js

const axios = require('axios');
const cheerio = require('cheerio');
const Stamp = require('../models/mongoosSchema'); // fetching the userSchema in the user model



 module.exports = function(_, async){

   return {
     webScrapFUN: function(){
       const url = 'https://www.worldometers.info/coronavirus/#countries';
       axios(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        $('#main_table_countries_today td').each(function(i,e) {
                  let str = $(e).text();
                  if (str === ' UK ' || str === 'UK' || str === ' UK' || str === 'UK '){
                    indices = [i, i+1, i+3, i+5];
                    return
                  }
                });
      this.check_duplicates( $('.content-inner div').eq(1).text(), $('.content-inner div').eq(1).text(),   $('td').eq(indices[1]).text(),    $('td').eq(indices[2]).text(),      $('td').eq(indices[3]).text());



      })
      .catch(console.error);
    },
    check_duplicates: function(update_time, time, total, deaths, recovered){ // checks if there is the update_time in the database and returns true if it is
      times = [];

      async.parallel([
        function(callback){
          Stamp.find({}, (err, results) => {
            callback(err, results);
          });
        }
      ], (err, results) => {
        const res1 = results[0];
        _.forEach(res1, function(val, key) {
          times.push(val.update_time);
          });

          if(times.length == 0) { // if there is no db connection yet
            return 1
          } else {
            console.log(times, update_time,times.indexOf(update_time),times.indexOf(update_time) != -1);
            if(times.indexOf(update_time) != -1){// if there is the update time in the array
                console.log('do nothing');
              } else { // else store it in the database
                this.store(time, total, deaths, recovered);
                console.log('stored in database');
              }
          }


        }
      )

    },

    store: function(time, total, deaths, recovered){
      const newStamp = new Stamp();
      newStamp['update_time'] = time;
      newStamp['total_cases'] = Number(total);
      newStamp['recovered'] = Number(recovered);
      newStamp['deaths'] = Number(deaths);

      newStamp.save(function (err) {
        if (err) return handleError(err);
    // saved!
    });
    }
   }


    };
