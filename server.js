var fs = require('fs');
var path = require('path');
require('http').createServer(function(req,res){
    if( /.*\.js$/.test(req.url) ){
        var filePath = path.join(__dirname, req.url);
        var stat = fs.statSync(filePath);
            res.writeHead(200, {
                'Content-Type': 'application/javascript',
                'Content-Length': stat.size
            });

            var readStream = fs.createReadStream(filePath);
            // We replaced all the event handlers with a simple call to readStream.pipe()
            readStream.pipe(res);
    }else{
        res.end(require('fs').readFileSync('./index.html'));
    }
    
}).listen(5000);