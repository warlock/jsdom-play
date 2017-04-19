var jsdom = require("jsdom");

function we() {
return new Promise((resolve, reject) => {
  jsdom.env({
   url: "http://sc1.anpro21.com:3004/",
   scripts: ["http://code.jquery.com/jquery.js"],
   features: {
     FetchExternalResources: ["script"],
     ProcessExternalResources: ["script"],
     SkipExternalResources: false
   },
   done: function (err, window) {
     var $ = window.$;
     var a = $('#form').html()
      window.close()
     if (a !== undefined) resolve(a)
     else reject('not value')
   }
  })
  })
}

we()
.then(console.log)
.catch(console.log)

