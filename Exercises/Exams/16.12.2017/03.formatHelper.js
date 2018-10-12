function formatHelper([text]) {
    //add ONE space between group1 and group2
    text = text.replace(/(\.|,|!|\?|:|;)\s*([a-zA-Z0-9])/g, "$1 $2");
    text = text.replace(/(\.|,|!|\?|:|;)\s*(.)/g, "$1 $2");

    //remove more than ONE space if front of the group
    text = text.replace(/\s+(\.|,|!|\?|:|;)/g, "$1");
    //remove all spaces in front of a digit
    text = text.replace(/\.\s+(\d)/g, ".$1");
    //remove spaces after " and before "
    text = text.replace(/"\s*([^"]+?)\s*"/g, '"$1"');
    console.log(text);
}

//formatHelper(`Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .`);
formatHelper(`Make,sure to give:proper spacing where is needed... ! huy`);
