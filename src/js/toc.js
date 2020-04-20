/**
 * Generate a table of content
 */
export default function toc(contentElementId="main-content" , tocElementId="toc") {

    if (document.getElementById(contentElementId) && document.getElementById(tocElementId)) {
        let toc = "";
        let level = 0;

        document.getElementById(contentElementId).innerHTML =
            document.getElementById(contentElementId).innerHTML.replace(
                /<h([\d])>([^<]+)<\/h([\d])>/gi,
                function (str, openLevel, titleText, closeLevel) {
                    if (openLevel !== closeLevel) {
                        return str + ' - ' + openLevel;
                    }

                    if (openLevel > level) {
                        toc += (new Array(openLevel - level + 1)).join("<ol>");
                    } else if (openLevel < level) {
                        toc += (new Array(level - openLevel + 1)).join("</ol>");
                    }

                    level = parseInt(openLevel);

                    const anchor = titleText.replace(/ /g, "_");
                    toc += "<li><a href=\"#" + anchor + "\">" + titleText
                        + "</a></li>";

                    return "<h" + openLevel + "><a name=\"" + anchor + "\">"
                        + titleText + "</a></h" + closeLevel + ">";
                }
            );

        if (level) {
            toc += (new Array(level + 1)).join("</ol>");
        }
        document.getElementById(tocElementId).innerHTML += toc;
    }
}