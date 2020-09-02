//global.fetch = require("node-fetch");
//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;
//GLOBAL.document = new JSDOM(html).window.document;
var userinfo={'username':'denys', 'password':'qwe123ASD'}
var headers_post = {"Content-Type": "application/json"}
let usertoken;
let firstlist=[];
async function gettoken(url) {
    let response = await fetch( url,{method:'POST',body:JSON.stringify(userinfo),headers: headers_post});
    let data = await response.json()
    let dataresult = data.user_token
    return dataresult;
}
async function forcedata(headers_get){
    let gaitforce_datalist = await fetch("https://staging-api2.bluegoji.com/s/v3/user/sensor-gaits", {method:'GET',
                headers: headers_get});//.then(res=>res.json()).then(res =>res.sensor_gaits);//.then(content => JSON.parse(JSON.stringify(content))[0]).then(res => console.log(res));
    let allresult = await gaitforce_datalist.json()
    let sensorgaits = await allresult.sensor_gaits
    let result = await JSON.parse(JSON.stringify(sensorgaits))
    return result}
async function main() {
    usertoken = await gettoken('https://staging-api2.bluegoji.com/s/v4/login')
    console.log(usertoken);
    var X_BlueGoji_App_token = "eyJuYW1lIjoiR29qaVBsYXlXaW4iLCJiZ19hcHBfaWQiOiIzMjI1MjM2MjE4NSIsInZlcnNpb24iOiIzLjAuMTAxLjAiLCJiZ1 9zZGt2IjoiMy4wLjEwMS4wIiwiaW9zX2J1bmRsZV9pZCI6ImNvbS5ibHVlZ29qaS5teWdvamkiLCJsYW5nIjoiZW4iLCJ ncHYiOiIzLjAuMTAxLjAifQ=="
    var X_BlueGoji_Device_token = "eyJtYWtlIjoiTWljcm8tU3RhciBJbnRlcm5hdGlvbmFsIENvLiwgTHRkLiIsIm1vZGVsIjoiTVMtN0MwNCIsIm9zIjoid2luZG9 3cyIsIm9zdiI6Ik1pY3Jvc29mdCBXaW5kb3dzIE5UIDEwLjAuMTgzNjMuMCIsImxhbmciOiJlbiIsImNvdW50cnkiOiJVbml 0ZWQgU3RhdGVzIiwidGltZXpvbmUiOi0yMTYwMC4wLCJiZ19kaWQiOiIyNWE1ZmFmZC1mMDY0LTQ4M2UtYjIxNS 1jNjYxMmY2Zjg5YzUiLCJ1YSI6IlJFU1RTaGFycCIsImRzdCI6ZmFsc2UsImJnX21hbmFnZWRfaW5mbyI6eyJnc19pZ CI6IjI1YTVmYWZkLWYwNjQtNDgzZS1iMjE1LWM2NjEyZjZmODljNSIsImRldmljZV9uYW1lIjoiREVOSVMtUEMifX0="
    var headers_gets = {
            "X-BlueGoji-UserToken": JSON.stringify(usertoken),
            "X-BlueGoji-App": X_BlueGoji_App_token,
            "X-BlueGoji-Device": X_BlueGoji_Device_token
            }
    var result1 = await forcedata(headers_gets)
    console.log(result1[1]);
    for (var i = 0; i<3; i++){firstlist[i]= result1[i].start_time;}
       document.getElementById('para').innerHTML=firstlist[0];
       document.getElementById('para1').innerHTML=firstlist[1];
       document.getElementById('para2').innerHTML=firstlist[2];
    //return firstlist
  }
main()//.then(data => {console.log(data)});
