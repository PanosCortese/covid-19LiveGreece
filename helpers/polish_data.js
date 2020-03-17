module.exports = function(_){
  return {
    polish_data: function(Stamp){
        dates = [];
        total_cases = [];
        recovered = [];
        deaths = [];


      Stamp.find({}, function (err, allDetails) {
        _.forEach(allDetails, function(val, key) {
          dates.push(new Date(val.update_time.slice(14, )));
          total_cases.push(Number(val.total_cases));
          recovered.push(Number(val.recovered));
          deaths.push(Number(val.deaths));
        });
        return {dates, total_cases, recovered, deaths}

        });



  }

}
}
