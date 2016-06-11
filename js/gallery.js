function createSliderPictureElem(src, title, subtitle) {
    return "<li>" +
        "<img src=\"" + src + "\">" +
        "<div class=\"caption right-align\">" +
        "<h3>" + title + "</h3>" +
        "<h5 class=\"light grey-text text-lighten-3\">" + subtitle + "</h5>" +
        "</div>" +
        "</li>"
}

function createSliderHtml() {
    var gallery = data.gallery;
    var html = "<ul class=\"slides\">";
    for (var i = 0; i < gallery.length; i++) {
        var imgData = gallery[i];
        html += createSliderPictureElem(imgData.src, imgData.title, imgData.subtitle);
    }
    html += "</ul>";
    return html;
}

function createGalleryRow(rowImgs, nbPerRow) {
    var html = "<li >" +
        "<div class=\"row\">";
    for (var i = 0; i < rowImgs.length; i++) {
        html += createImgGallery(rowImgs[i], nbPerRow);
    }
    html += "</div>" +
        "</li>";
    return html;
}

function createImgGallery(img, nbPerRow) {
    if (img) {
        return "<div class=\"col s"+(12/nbPerRow)+"\"><img class='materialboxed' width='100%' src=\"" + img.src + "\"></div>"
    }
    else {
        return "";
    }
}

function createGalleryHtml(nbPerRow) { //nbPerRow must divide 12
    var gallery = data.gallery;
    var html = "<ul id='gallery-list'>";
    for (var i = 0; i < gallery.length; i += nbPerRow) {
        var rowImgs = [];
        for (var j = i; j < nbPerRow; j++) {
            rowImgs.push(gallery[j]);
        }
        html += createGalleryRow(rowImgs, nbPerRow);
    }
    html += "</ul>";
    return html;
}