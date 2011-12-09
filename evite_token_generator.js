
// Dependencies:
// Evite Script "js/ef6717e789599138f81f2f7152c9b08d22bfacc6.cache.js"
// NodeJS Script "js/querystring.js"

function getToken(username, password, expiration) {
	
	if (!expiration)
  expiration = new Date().getTime() + (14 * 24 * 60 * 60 * 1000);

  var msg = [$.trim(username.toLowerCase()), expiration, $.trim(password.toLowerCase())].join(":");
 
  var digest = $().crypt({ method: "sha1", source: msg });

  var bin = "";
  for (var i = 0; i < digest.length; i += 2) {
  	bin += String.fromCharCode(parseInt(digest.substr(i, 2), 16));
  }

  digest = $().crypt({ method: "b64enc", b64Str: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", source: bin });

  var token = [username, expiration, digest].join(":");

  return token;
}

// Parse the current page's querystring
var qs = new Querystring();
var email = qs.get("email");
var pwd = qs.get("pwd");
var token = getPwd(email, pwd, null);