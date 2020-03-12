function img_create(src, alt, title) {
    var img = new Image();
    img.src = src;
    img.SameSite = "None";
    if ( alt != null ) img.alt = alt;
    if ( title != null ) img.title = title;
    return img;
}

function cleanUp() {
    document.getElementById("but").disabled = false;
    document.getElementById("thumbnails").innerHTML = "";  
}

function bringItOn() {
    var cont = document.createElement("article");
    cont.innerHTML = "<h1>:DDD</h1>";
    var l1 = document.createElement("script");
    l1.async = "true";
    l1.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    /*YoutubeThumbnailDownloaderHorizontalAd-2*/
    var l2 = document.createElement("ins");
    l2.setAttribute("class", "adsbygoogle");
    l2.setAttribute("style", "display:block");
    l2.setAttribute("data-ad-client", "ca-pub-7589017359598217");
    l2.setAttribute("data-ad-slot", "5447137061");
    l2.setAttribute("data-ad-format", "auto");
    l2.setAttribute("data-full-width-responsive", "true");
    var l3 = document.createElement("script");
    l3.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
    cont.innerHTML += l1 + l2 + l3;
    alert(22);
}

function app() {
    document.getElementById("but").disabled = true;
    var url = document.getElementById("videoId").value;
    var vid = "";
    var reg = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(reg);
    if ( match && match[7].length == 11 ){
        vid = "https://img.youtube.com/vi/" + match[7];
    } else{
        alert("Could not extract video ID. Possibly wrong url");
        return;
    }
    
    imgUrl1 = vid + "/1.jpg";
    imgUrl2 = vid +"/2.jpg"
    imgUrl3 = vid +"/3.jpg"
    imgUrlDefault = vid +"/default.jpg"
    imgUrlMqDefault = vid + "/mqdefault.jpg"
    imgUrlHqDefault = vid + "/hqdefault.jpg"
    imgUrlMaxResDefault = vid +"/maxresdefault.jpg"

    var img1 = img_create(imgUrl1, "Auto Thumb-1", "Thumbnail1")
    var img2 = img_create(imgUrl2, "Auto Thumb-2", "Thumbnail2")
    var img3 = img_create(imgUrl3, "Auto Thumb-3", "Thumbnail3")
    var imgDefault = img_create(imgUrlDefault, "Default", "Default")
    var imgMqDefault = img_create(imgUrlMqDefault, "MQ Default", "MQ Default")
    var imgHqDefault = img_create(imgUrlHqDefault, "HQ Default", "HQ Default")
    var imgMaxResDefault = img_create(imgUrlMaxResDefault, "MaxRes Default", "MaxRes Default")
    var imgUrlsElements = [imgMaxResDefault, imgHqDefault, imgMqDefault, imgDefault, img3, img2, img1]; 

    for(var i=0; i<imgUrlsElements.length; i++) {
        var imgContainer = document.createElement("div");
        imgContainer.id = "imgContainer";
        var link = document.createElement("a");
        link.href = imgUrlsElements[i].src;
        link.download =  imgUrlsElements[i].title + ".jpg";
        link.appendChild(imgUrlsElements[i]);
        imgContainer.appendChild(link);
        var titleContainer = document.createElement("div");
        titleContainer.id = "titleContainer";
        titleContainer.innerHTML = "<p>" + imgUrlsElements[i].title+ "</p>"
        imgContainer.appendChild(titleContainer);        
        document.getElementById("thumbnails").appendChild(imgContainer);  
    }
}
