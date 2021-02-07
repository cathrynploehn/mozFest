
async function search(){

  $('#search').on("click", async function() {
      $('#search').addClass("disabled");
      var searchPromise = new Promise(async (resolve, reject) => {
          $.ajax({
              url: "https://api.inaturalist.org/v1/observations?photos=true&project_id=97146&order=desc&order_by=created_at",
              success: function(data) {
                console.log(data)
                resolve();
              }
          });
      });

      searchPromise.then(() => { console.log("search done!") })

  });

}

search();
