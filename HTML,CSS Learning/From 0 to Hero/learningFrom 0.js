now = new Date();
localtime = now.toString();
utcTime = now.toGMTString();

hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
milisecs = now.getMilliseconds();

document.write(`<p><b>Local time:</b> ${localtime} </p>`);
document.write(`<p><b>UTC time:</b>  ${utcTime} </p>`);

document.write(`<h2><b>${hours} : ${mins} : ${secs}: ${milisecs}</h2></b>`);
