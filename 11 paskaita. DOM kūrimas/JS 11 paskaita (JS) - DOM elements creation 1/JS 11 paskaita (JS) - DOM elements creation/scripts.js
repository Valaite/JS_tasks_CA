
//general styles for body
document.body.style.margin = 0;
document.body.style.backgroundColor = "azure";

//create main div container and styles
const mainDiv = document.createElement("div");
mainDiv.style.cssText = "width:85%;background-color:white;margin:5rem auto;border-radius:10px;box-shadow: 1px 1px 2px 2px lightgray;padding-bottom:2rem;"

//create main img and styles
const imgUrl = "./portrait.jpg"
const mainImg = document.createElement("img");
mainImg.setAttribute("src", imgUrl)
mainImg.style.cssText = "position:relative;display:block;width:120px;height:120px;border:3px solid white;object-fit:cover;border-radius:50%;bottom:40px;box-shadow: 1px 1px 2px 2px lightgray;margin:auto;"

//create h1 and styles
const nameHeading = document.createElement("h1");
nameHeading.textContent = "Trent Walton"
nameHeading.style.cssText = "font-family:sans-serif;color:#585858;text-align:center;margin-top:0;"

const occupation = document.createElement("h2");
occupation.textContent = "Founder & 1/3 of @paravelinc"
occupation.style.cssText = "font-family:sans-serif;color:gray;text-align:center;margin-top:0;font-weight:400;"

const place = document.createElement("h2");
place.textContent = "Austin, TX"
place.style.cssText = "font-family:sans-serif;color:gray;text-align:center;margin-top:0;font-weight:400;"



//append created elements to document
document.body.appendChild(mainDiv);
mainDiv.append(mainImg, nameHeading, occupation, place);
